import { useState, useRef, useCallback, useEffect } from 'react';
import { InputPanel } from './components/InputPanel';
import { BarProfileSVG } from './components/BarProfileSVG';
import { FrequencyTable } from './components/FrequencyTable';
import { ResultsSummary } from './components/ResultsSummary';
import { OptimizationControls } from './components/OptimizationControls';
import { GenerationLog, GenerationEntry } from './components/GenerationLog';
import { MATERIALS } from './data/materials';
import { TUNING_PRESETS, calculateTargetFrequencies } from './data/tuningPresets';
import {
  OptimizationParams,
  OptimizationResult,
  WorkerMessage,
  WorkerResponse,
  ProgressUpdate,
  Cut,
  Individual
} from './types';
import { genesToCuts } from './physics/barProfile';
import './styles/main.css';

// Import worker
import OptimizationWorker from './workers/optimizationWorker?worker';

function App() {
  // Bar dimensions (in mm for UI, converted to m for calculations)
  const [barLength, setBarLength] = useState(350);
  const [barWidth, setBarWidth] = useState(50);
  const [barThickness, setBarThickness] = useState(10);

  // Material
  const [selectedMaterial, setSelectedMaterial] = useState('aluminum');

  // Tuning
  const [tuningMode, setTuningMode] = useState<'preset' | 'custom'>('preset');
  const [selectedPreset, setSelectedPreset] = useState('1:4:10');
  const [customRatios, setCustomRatios] = useState('1, 4, 10');
  const [fundamentalFrequency, setFundamentalFrequency] = useState(175);

  // Optimization params
  const [numCuts, setNumCuts] = useState(3);
  const [penaltyType, setPenaltyType] = useState<'volume' | 'roughness' | 'none'>('volume');
  const [penaltyWeight, setPenaltyWeight] = useState(0.05);
  const [populationSize, setPopulationSize] = useState(50);
  const [maxGenerations, setMaxGenerations] = useState(100);
  const [f1Priority, setF1Priority] = useState(2);
  const [numElements, setNumElements] = useState(80);
  const [minCutWidth, setMinCutWidth] = useState(2); // mm
  const [maxCutWidth, setMaxCutWidth] = useState(0); // mm, 0 = no limit
  const [minCutDepth, setMinCutDepth] = useState(0); // mm, 0 = no limit
  const [maxCutDepth, setMaxCutDepth] = useState(0); // mm, 0 = no limit
  const [maxLengthTrim, setMaxLengthTrim] = useState(0); // mm, 0 = no trimming
  const [maxLengthExtend, setMaxLengthExtend] = useState(0); // mm, 0 = no extension
  const [maxCores, setMaxCores] = useState(0); // 0 = auto (use all available cores)
  const [targetError, setTargetError] = useState(0.01); // % error threshold to stop early

  // Optimization state
  const [isRunning, setIsRunning] = useState(false);
  const [currentGeneration, setCurrentGeneration] = useState(0);
  const [bestFitness, setBestFitness] = useState(Infinity);
  const [currentBestIndividual, setCurrentBestIndividual] = useState<Individual | null>(null);
  const [currentComputedFreqs, setCurrentComputedFreqs] = useState<number[]>([]);
  const [currentErrorsInCents, setCurrentErrorsInCents] = useState<number[]>([]);
  const [currentLengthTrim, setCurrentLengthTrim] = useState(0); // Current length trim in m
  const [result, setResult] = useState<OptimizationResult | null>(null);
  const [generationLog, setGenerationLog] = useState<GenerationEntry[]>([]);
  const [selectedLogGeneration, setSelectedLogGeneration] = useState<number | null>(null);

  // Worker ref
  const workerRef = useRef<Worker | null>(null);

  // Calculate target frequencies
  const getTargetFrequencies = useCallback((): number[] => {
    if (tuningMode === 'preset') {
      const preset = TUNING_PRESETS.find(p => p.name === selectedPreset);
      if (preset) {
        return calculateTargetFrequencies(preset.ratios, fundamentalFrequency);
      }
    } else {
      const ratios = customRatios.split(',').map(s => parseFloat(s.trim())).filter(n => !isNaN(n));
      if (ratios.length > 0) {
        return calculateTargetFrequencies(ratios, fundamentalFrequency);
      }
    }
    return [fundamentalFrequency];
  }, [tuningMode, selectedPreset, customRatios, fundamentalFrequency]);

  // Start optimization
  const handleStart = useCallback(() => {
    // Create worker
    const worker = new OptimizationWorker();
    workerRef.current = worker;

    // Handle messages from worker
    worker.onmessage = (event: MessageEvent<WorkerResponse>) => {
      const response = event.data;

      switch (response.type) {
        case 'PROGRESS':
          const progress = response.data as ProgressUpdate;
          setCurrentGeneration(progress.generation);
          setBestFitness(progress.bestFitness);
          setCurrentBestIndividual(progress.bestIndividual);
          if (progress.computedFrequencies) {
            setCurrentComputedFreqs(progress.computedFrequencies);
          }
          if (progress.errorsInCents) {
            setCurrentErrorsInCents(progress.errorsInCents);
          }
          if (progress.lengthTrim !== undefined) {
            setCurrentLengthTrim(progress.lengthTrim);
          }
          // Add to generation log
          if (progress.computedFrequencies && progress.errorsInCents) {
            setGenerationLog(prev => [...prev, {
              generation: progress.generation,
              fitness: progress.bestFitness,
              errorsInCents: progress.errorsInCents!,
              computedFrequencies: progress.computedFrequencies!,
              genes: [...progress.bestIndividual.genes]
            }]);
          }
          break;

        case 'COMPLETE':
          setResult(response.result);
          setIsRunning(false);
          break;

        case 'ERROR':
          console.error('Optimization error:', response.message);
          setIsRunning(false);
          break;

        case 'STOPPED':
          setIsRunning(false);
          break;
      }
    };

    // Prepare optimization parameters
    const material = MATERIALS[selectedMaterial];
    const targetFreqs = getTargetFrequencies();

    const params: OptimizationParams = {
      bar: {
        L: barLength / 1000,      // Convert mm to m
        b: barWidth / 1000,
        h0: barThickness / 1000,
        hMin: barThickness / 10000  // 10% of thickness
      },
      material,
      targetFrequencies: targetFreqs,
      numCuts,
      penaltyType,
      penaltyWeight,
      eaParams: {
        populationSize,
        elitismPercent: 10,
        crossoverPercent: 30,
        mutationPercent: 60,
        mutationStrength: 0.1,
        maxGenerations,
        targetError,
        numElements,         // FEM mesh resolution
        f1Priority,          // Weight f1 more than higher modes
        minCutWidth: minCutWidth / 1000,  // Convert mm to m
        maxCutWidth: maxCutWidth / 1000,
        minCutDepth: minCutDepth / 1000,
        maxCutDepth: maxCutDepth / 1000,
        maxLengthTrim: maxLengthTrim / 1000,  // Convert mm to m
        maxLengthExtend: maxLengthExtend / 1000,  // Convert mm to m
        maxCores
      }
    };

    // Start optimization
    const message: WorkerMessage = { type: 'START', params };
    worker.postMessage(message);

    setIsRunning(true);
    setCurrentGeneration(0);
    setBestFitness(Infinity);
    setCurrentBestIndividual(null);
    setCurrentComputedFreqs([]);
    setCurrentErrorsInCents([]);
    setCurrentLengthTrim(0);
    setResult(null);
    setGenerationLog([]);
    setSelectedLogGeneration(null);
  }, [
    selectedMaterial,
    barLength,
    barWidth,
    barThickness,
    numCuts,
    penaltyType,
    penaltyWeight,
    populationSize,
    maxGenerations,
    numElements,
    f1Priority,
    minCutWidth,
    maxCutWidth,
    minCutDepth,
    maxCutDepth,
    maxLengthTrim,
    maxLengthExtend,
    maxCores,
    targetError,
    getTargetFrequencies
  ]);

  // Stop optimization
  const handleStop = useCallback(() => {
    if (workerRef.current) {
      const message: WorkerMessage = { type: 'STOP' };
      workerRef.current.postMessage(message);
    }
  }, []);

  // Cleanup worker on unmount
  useEffect(() => {
    return () => {
      if (workerRef.current) {
        workerRef.current.terminate();
      }
    };
  }, []);

  // Get display data
  const targetFreqs = getTargetFrequencies();

  // Find selected generation entry if one is selected
  const selectedLogEntry = selectedLogGeneration !== null
    ? generationLog.find(e => e.generation === selectedLogGeneration)
    : null;

  // Show selected generation, current best during optimization, or final result when complete
  const displayCuts: Cut[] = selectedLogEntry
    ? genesToCuts(selectedLogEntry.genes)
    : result?.cuts ?? (currentBestIndividual ? genesToCuts(currentBestIndividual.genes) : []);

  // Use selected generation frequencies, live frequencies, or final result
  const computedFreqs = selectedLogEntry?.computedFrequencies ?? result?.computedFrequencies ?? currentComputedFreqs;
  const errorsInCents = selectedLogEntry?.errorsInCents ?? result?.errorsInCents ?? currentErrorsInCents;

  // Get effective length (accounting for length adjustment)
  // During optimization, compute from current length adjustment; after completion, use result
  // lengthTrim is actually lengthAdjust: positive = trim (shorten), negative = extend (lengthen)
  const effectiveLength = result?.effectiveLength
    ? result.effectiveLength * 1000  // Convert m to mm
    : currentLengthTrim !== 0
      ? barLength - 2 * currentLengthTrim * 1000  // Convert m to mm and compute effective
      : barLength;  // Default to original length

  return (
    <div className="app-container">
      <InputPanel
        barLength={barLength}
        barWidth={barWidth}
        barThickness={barThickness}
        onBarLengthChange={setBarLength}
        onBarWidthChange={setBarWidth}
        onBarThicknessChange={setBarThickness}
        selectedMaterial={selectedMaterial}
        onMaterialChange={setSelectedMaterial}
        tuningMode={tuningMode}
        selectedPreset={selectedPreset}
        customRatios={customRatios}
        fundamentalFrequency={fundamentalFrequency}
        onTuningModeChange={setTuningMode}
        onPresetChange={setSelectedPreset}
        onCustomRatiosChange={setCustomRatios}
        onFundamentalChange={setFundamentalFrequency}
        numCuts={numCuts}
        penaltyType={penaltyType}
        penaltyWeight={penaltyWeight}
        populationSize={populationSize}
        maxGenerations={maxGenerations}
        onNumCutsChange={setNumCuts}
        onPenaltyTypeChange={setPenaltyType}
        onPenaltyWeightChange={setPenaltyWeight}
        onPopulationSizeChange={setPopulationSize}
        onMaxGenerationsChange={setMaxGenerations}
        f1Priority={f1Priority}
        onF1PriorityChange={setF1Priority}
        numElements={numElements}
        onNumElementsChange={setNumElements}
        minCutWidth={minCutWidth}
        onMinCutWidthChange={setMinCutWidth}
        maxCutWidth={maxCutWidth}
        onMaxCutWidthChange={setMaxCutWidth}
        minCutDepth={minCutDepth}
        onMinCutDepthChange={setMinCutDepth}
        maxCutDepth={maxCutDepth}
        onMaxCutDepthChange={setMaxCutDepth}
        maxLengthTrim={maxLengthTrim}
        onMaxLengthTrimChange={setMaxLengthTrim}
        maxLengthExtend={maxLengthExtend}
        onMaxLengthExtendChange={setMaxLengthExtend}
        maxCores={maxCores}
        onMaxCoresChange={setMaxCores}
        targetError={targetError}
        onTargetErrorChange={setTargetError}
      />

      <div className="main-content">
        <OptimizationControls
          isRunning={isRunning}
          currentGeneration={currentGeneration}
          maxGenerations={maxGenerations}
          bestFitness={bestFitness}
          onStart={handleStart}
          onStop={handleStop}
        />

        <BarProfileSVG
          length={barLength}
          thickness={barThickness}
          cuts={displayCuts}
          showDimensions={displayCuts.length > 0}
          effectiveLength={effectiveLength}
        />

        <FrequencyTable
          targetFrequencies={targetFreqs}
          computedFrequencies={computedFreqs}
          errorsInCents={errorsInCents}
        />

        <GenerationLog
          entries={generationLog}
          targetFrequencies={targetFreqs}
          selectedGeneration={selectedLogGeneration}
          onSelectGeneration={setSelectedLogGeneration}
        />

        {result && (
          <ResultsSummary
            tuningError={result.tuningError}
            maxErrorCents={result.maxErrorCents}
            volumePercent={result.volumePercent}
            generations={result.generations}
            cuts={result.cuts}
            lengthTrim={result.lengthTrim}
            effectiveLength={result.effectiveLength}
          />
        )}
      </div>
    </div>
  );
}

export default App;
