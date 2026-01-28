# Multi-Modal Bar Tuning

A web-based tool for optimizing the frequency ratios of vibrating bars (such as marimba, xylophone, or vibraphone bars) using evolutionary algorithms and finite element analysis.

## Overview

This application helps instrument makers and acoustics researchers design tuned percussion bars with specific frequency ratios between vibrational modes. By strategically removing material (creating an undercut profile), the natural frequencies of the bar can be adjusted to achieve harmonic or other desired tuning relationships.

The optimization uses:
- **Finite Element Method (FEM)** for computing bar vibration frequencies
- **Evolutionary Algorithm (EA)** for finding optimal cut profiles
- **WebAssembly (Rust/WASM)** for high-performance parallel computation

## Features

- **Multiple tuning presets**: Harmonic (1:4:10), Gamelan, Marimba, and more
- **Custom tuning ratios**: Define your own frequency relationships
- **Material library**: Metals (aluminum, brass, steel) and woods (rosewood, padauk, maple)
- **Adjustable constraints**: Control cut width, depth, and length trimming/extension
- **Real-time visualization**: See the bar profile evolve during optimization
- **Parallel processing**: WASM with multi-threading for fast computation
- **Configurable stopping criteria**: Set target error threshold for early termination

## Getting Started

### Prerequisites

- Node.js 18+
- Rust **nightly** toolchain (required for multi-threaded WASM)
- `wasm-pack` CLI
- The `wasm32-unknown-unknown` target
- The Rust `std` source component (for `build-std`)

```bash
# Install Rust nightly and required components
rustup toolchain install nightly
rustup component add rust-src --toolchain nightly
rustup target add wasm32-unknown-unknown --toolchain nightly

# Install wasm-pack
cargo install wasm-pack
```

### Building the WASM Physics Module

The WASM module must be built before running the app. It uses Rayon for multi-threaded parallel computation, which requires shared memory, atomics, and the nightly `build-std` feature.

```bash
cd wasm-physics

RUSTUP_TOOLCHAIN=nightly wasm-pack build --target web --release
```

This compiles the Rust code to WASM with multi-threading support and outputs JavaScript/TypeScript bindings to `wasm-physics/pkg/`. The `.cargo/config.toml` in that directory configures the necessary flags for shared memory, atomics, bulk memory, and TLS exports.

**Note:** The `[unstable] build-std` setting in `.cargo/config.toml` rebuilds the Rust standard library with threading support — this is why the nightly toolchain is required.

### Installation

```bash
# Install dependencies
npm install

# Build and run development server
npm run dev
```

### Building for Production

```bash
npm run build
```

### COOP/COEP Headers

Multi-threaded WASM requires `SharedArrayBuffer`, which browsers only enable when the page is served with these headers:

```text
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

The Vite dev server and preview server are already configured to send these headers. If deploying elsewhere, make sure your hosting environment sets them. Without these headers the app will fall back to single-threaded mode.

## Usage

1. **Set bar dimensions**: Length, width, and thickness in millimeters
2. **Select material**: Choose from metals or woods, or use custom properties
3. **Choose tuning target**: Select a preset or enter custom frequency ratios
4. **Set fundamental frequency**: The target f₁ (can enter as note name like "C4")
5. **Configure optimization**: Number of cuts, constraints, and algorithm parameters
6. **Run optimization**: Click "Start" and watch the profile evolve
7. **Review results**: Check achieved frequencies and export the profile

## How It Works

The bar is modeled as a Timoshenko beam with variable cross-section. The optimizer searches for the best undercut profile by:

1. **Encoding**: Each solution is a genome representing cut positions (λ) and depths (h)
2. **Evaluation**: FEM computes the first N natural frequencies for each profile
3. **Fitness**: Error is calculated as the weighted deviation from target frequency ratios
4. **Evolution**: Tournament selection, crossover, and mutation create new generations
5. **Termination**: Stops when target error is reached or max generations exceeded

## Project Structure

```text
multi-modal-tuning/
├── src/
│   ├── components/       # React UI components
│   ├── data/             # Materials and tuning presets
│   ├── optimization/     # Evolutionary algorithm
│   ├── physics/          # FEM and WASM bridge
│   ├── types/            # TypeScript interfaces
│   └── workers/          # Web Worker for background optimization
├── wasm_physics/         # Rust WASM module for parallel FEM
└── public/
```

## References

This tool is based on the methodology described in:

> Soares, F., Music, J., & Antunes, J. (2020). *Computational optimization of marimba bar profiles for targeted modal tuning*. [HAL-04240657](https://hal.science/hal-04240657v1/file/soares2020.pdf)

## License

MIT
