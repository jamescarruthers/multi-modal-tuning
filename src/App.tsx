import { useState, useCallback, useRef } from 'react';
import { SharedSettingsPanel, OptimizationSettings } from './components/SharedSettingsPanel';
import { SingleBarOptimizer } from './components/SingleBarOptimizer';
import { BarRangeFinder } from './components/BarRangeFinder';
import { TunerTab } from './components/TunerTab';
import { TabSwitcher, AppMode } from './components/TabSwitcher';
import { BatchOptimizationItem } from './types';
import { encodeGenes } from './optimization/geneCodec';
import { MATERIALS, getShearModulus } from './data/materials';
import './styles/main.css';

function App() {
  // App mode
  const [activeTab, setActiveTab] = useState<AppMode>('optimizer');

  // Bar dimensions (in mm for UI, converted to m for calculations)
  const [barLength, setBarLength] = useState(350);
  const [barWidth, setBarWidth] = useState(50);
  const [barThickness, setBarThickness] = useState(10);

  // Material
  const [selectedMaterial, setSelectedMaterial] = useState('aluminum');
  const previousMaterialRef = useRef('aluminum');

  // Custom material properties (used when selectedMaterial === 'custom')
  const [customE, setCustomE] = useState(10e9);       // Pa (default 10 GPa)
  const [customRho, setCustomRho] = useState(1000);   // kg/m³
  const [customNu, setCustomNu] = useState(0.33);     // Poisson's ratio
  const [customG, setCustomG] = useState(1e9);        // Pa (default 1 GPa)

  // Handle material change - copy values from previous material when switching to custom
  const handleMaterialChange = useCallback((newMaterial: string) => {
    if (newMaterial === 'custom' && previousMaterialRef.current !== 'custom') {
      // Copy values from previous material to custom
      const prevMat = MATERIALS[previousMaterialRef.current];
      if (prevMat) {
        setCustomE(prevMat.E);
        setCustomRho(prevMat.rho);
        setCustomNu(prevMat.nu);
        // Use explicit G if available, otherwise calculate from E and nu
        setCustomG(getShearModulus(prevMat.E, prevMat.nu, prevMat.G));
      }
    }
    previousMaterialRef.current = newMaterial;
    setSelectedMaterial(newMaterial);
  }, []);

  // Tuning
  const [selectedPreset, setSelectedPreset] = useState('1:4:10');
  const [fundamentalFrequency, setFundamentalFrequency] = useState(175);

  // Optimization params
  const [numCuts, setNumCuts] = useState(3);
  const [useVolumePenalty, setUseVolumePenalty] = useState(true);
  const [volumeWeight, setVolumeWeight] = useState(0.05);
  const [useRoughnessPenalty, setUseRoughnessPenalty] = useState(false);
  const [roughnessWeight, setRoughnessWeight] = useState(0.05);
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
  const [seedGeneCode, setSeedGeneCode] = useState(''); // Gene code for seeding optimization

  // Optimization state
  const [isRunning, setIsRunning] = useState(false);

  // Batch optimization state (shared between tabs)
  const [batchItems, setBatchItems] = useState<BatchOptimizationItem[]>([]);

  // Get optimization settings object for passing to children
  const optimizationSettings: OptimizationSettings = {
    tuningPreset: selectedPreset,
    numCuts,
    useVolumePenalty,
    volumeWeight,
    useRoughnessPenalty,
    roughnessWeight,
    populationSize,
    maxGenerations,
    targetError,
    f1Priority,
    numElements,
    minCutWidth,
    maxCutWidth,
    minCutDepth,
    maxCutDepth,
    maxLengthTrim,
    maxLengthExtend,
    maxCores
  };

  // Handle adding bars to batch queue from BarRangeFinder
  const handleAddToBatch = useCallback((items: BatchOptimizationItem[]) => {
    setBatchItems(items);
    // Switch to optimizer tab to show the batch queue
    setActiveTab('optimizer');
  }, []);

  // Handle loading a single batch result for further optimization (legacy)
  const handleLoadFromBatch = useCallback((item: BatchOptimizationItem) => {
    if (!item.optimizationResult) return;

    // Set bar length from batch result
    setBarLength(item.barResult.optimalLength);

    // Set fundamental frequency from the bar's target
    setFundamentalFrequency(item.barResult.targetFrequency);

    // Load the gene code to seed further optimization
    if (item.optimizationResult.bestIndividual) {
      const geneCode = encodeGenes(item.optimizationResult.bestIndividual.genes);
      setSeedGeneCode(geneCode);
    }

    // Clear batch and switch to single bar mode
    setBatchItems([]);
    setActiveTab('optimizer');
  }, []);

  return (
    <div className="app-container">
      <TabSwitcher
        activeTab={activeTab}
        onTabChange={setActiveTab}
        disabled={isRunning}
      />

      {/* Shared Settings Sidebar */}
      <div className="sidebar">
        <SharedSettingsPanel
          barWidth={barWidth}
          barThickness={barThickness}
          onBarWidthChange={setBarWidth}
          onBarThicknessChange={setBarThickness}
          selectedMaterial={selectedMaterial}
          onMaterialChange={handleMaterialChange}
          customE={customE}
          customRho={customRho}
          customNu={customNu}
          customG={customG}
          onCustomEChange={setCustomE}
          onCustomRhoChange={setCustomRho}
          onCustomNuChange={setCustomNu}
          onCustomGChange={setCustomG}
          numCuts={numCuts}
          useVolumePenalty={useVolumePenalty}
          volumeWeight={volumeWeight}
          useRoughnessPenalty={useRoughnessPenalty}
          roughnessWeight={roughnessWeight}
          populationSize={populationSize}
          maxGenerations={maxGenerations}
          f1Priority={f1Priority}
          numElements={numElements}
          minCutWidth={minCutWidth}
          maxCutWidth={maxCutWidth}
          minCutDepth={minCutDepth}
          maxCutDepth={maxCutDepth}
          maxLengthTrim={maxLengthTrim}
          maxLengthExtend={maxLengthExtend}
          maxCores={maxCores}
          targetError={targetError}
          seedGeneCode={seedGeneCode}
          onNumCutsChange={setNumCuts}
          onUseVolumePenaltyChange={setUseVolumePenalty}
          onVolumeWeightChange={setVolumeWeight}
          onUseRoughnessPenaltyChange={setUseRoughnessPenalty}
          onRoughnessWeightChange={setRoughnessWeight}
          onPopulationSizeChange={setPopulationSize}
          onMaxGenerationsChange={setMaxGenerations}
          onF1PriorityChange={setF1Priority}
          onNumElementsChange={setNumElements}
          onMinCutWidthChange={setMinCutWidth}
          onMaxCutWidthChange={setMaxCutWidth}
          onMinCutDepthChange={setMinCutDepth}
          onMaxCutDepthChange={setMaxCutDepth}
          onMaxLengthTrimChange={setMaxLengthTrim}
          onMaxLengthExtendChange={setMaxLengthExtend}
          onMaxCoresChange={setMaxCores}
          onTargetErrorChange={setTargetError}
          onSeedGeneCodeChange={setSeedGeneCode}
          referenceLength={barLength}
          showSeedInput={activeTab === 'optimizer'}
          mode={activeTab}
          disabled={isRunning}
        />
      </div>

      {/* Main Content Area - Mode specific */}
      <div className={`main-content ${activeTab === 'tuner' ? 'tuner-mode' : ''}`}>
        {activeTab === 'optimizer' && (
          <SingleBarOptimizer
            barLength={barLength}
            barWidth={barWidth}
            barThickness={barThickness}
            onBarLengthChange={setBarLength}
            selectedMaterial={selectedMaterial}
            customE={customE}
            customRho={customRho}
            customNu={customNu}
            customG={customG}
            tuningPreset={selectedPreset}
            onTuningPresetChange={setSelectedPreset}
            fundamentalFrequency={fundamentalFrequency}
            onFundamentalChange={setFundamentalFrequency}
            optimizationSettings={optimizationSettings}
            seedGeneCode={seedGeneCode}
            isRunning={isRunning}
            onRunningChange={setIsRunning}
            batchItems={batchItems}
            onBatchItemsChange={setBatchItems}
          />
        )}
        {activeTab === 'rangeFinder' && (
          <BarRangeFinder
            barWidth={barWidth}
            barThickness={barThickness}
            selectedMaterial={selectedMaterial}
            customE={customE}
            customRho={customRho}
            customNu={customNu}
            customG={customG}
            optimizationSettings={optimizationSettings}
            onLoadBar={handleLoadFromBatch}
            onAddToBatch={handleAddToBatch}
          />
        )}
        {activeTab === 'tuner' && (
          <TunerTab
            tuningPreset={selectedPreset}
            fundamentalFrequency={fundamentalFrequency}
            onTuningPresetChange={setSelectedPreset}
            onFundamentalChange={setFundamentalFrequency}
          />
        )}
      </div>
    </div>
  );
}

export default App;
