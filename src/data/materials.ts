import { Material } from '../types';

export const MATERIALS: Record<string, Material> = {
  // Metals commonly used in vibraphones, glockenspiels, metallophones
  aluminum: {
    name: 'Aluminum 6061',
    E: 68.9e9,      // Pa
    rho: 2700,      // kg/m^3
    nu: 0.33,
    category: 'metal'
  },
  aluminum7075: {
    name: 'Aluminum 7075',
    E: 71.7e9,
    rho: 2810,
    nu: 0.33,
    category: 'metal'
  },
  brass: {
    name: 'Brass C260',
    E: 110e9,
    rho: 8530,
    nu: 0.35,
    category: 'metal'
  },
  steel: {
    name: 'Steel 1018',
    E: 205e9,
    rho: 7870,
    nu: 0.29,
    category: 'metal'
  },
  stainlessSteel: {
    name: 'Stainless Steel 304',
    E: 193e9,
    rho: 8000,
    nu: 0.29,
    category: 'metal'
  },
  bronze: {
    name: 'Phosphor Bronze',
    E: 110e9,
    rho: 8800,
    nu: 0.34,
    category: 'metal'
  },
  bellBronze: {
    name: 'Bell Bronze (B20)',
    E: 100e9,
    rho: 8600,
    nu: 0.34,
    category: 'metal'
  },

  // Premium tonewoods for marimbas/xylophones
  // Note: Wood G values are explicit because wood is orthotropic.
  // G/E ratio for hardwoods is typically 0.06-0.08 (vs ~0.38 for isotropic materials)
  rosewood: {
    name: 'Honduran Rosewood',
    E: 12.5e9,
    rho: 850,
    nu: 0.37,
    G: 0.81e9,       // ~0.065 * E
    category: 'wood'
  },
  africanRosewood: {
    name: 'African Rosewood (Bubinga)',
    E: 15.8e9,
    rho: 890,
    nu: 0.36,
    G: 1.03e9,       // ~0.065 * E
    category: 'wood'
  },
  padauk: {
    name: 'African Padauk',
    E: 11.7e9,
    rho: 750,
    nu: 0.35,
    G: 0.76e9,       // ~0.065 * E
    category: 'wood'
  },
  sapele: {
    name: 'Sapele',
    E: 12.0e9,
    rho: 640,
    nu: 0.35,
    G: 0.78e9,       // ~0.065 * E
    category: 'wood'
  },
  bubinga: {
    name: 'Bubinga',
    E: 15.8e9,
    rho: 890,
    nu: 0.36,
    G: 1.03e9,       // ~0.065 * E
    category: 'wood'
  },

  // Other tonewoods
  maple: {
    name: 'Hard Maple',
    E: 12.6e9,
    rho: 705,
    nu: 0.35,
    G: 0.82e9,       // ~0.065 * E
    category: 'wood'
  },
  purpleheart: {
    name: 'Purpleheart',
    E: 17.0e9,
    rho: 880,
    nu: 0.35,
    G: 1.11e9,       // ~0.065 * E
    category: 'wood'
  },
  wenge: {
    name: 'Wenge',
    E: 14.0e9,
    rho: 870,
    nu: 0.35,
    G: 0.91e9,       // ~0.065 * E
    category: 'wood'
  },
  bocote: {
    name: 'Bocote',
    E: 14.1e9,
    rho: 930,
    nu: 0.36,
    G: 0.92e9,       // ~0.065 * E
    category: 'wood'
  },
  zebrawood: {
    name: 'Zebrawood',
    E: 15.2e9,
    rho: 780,
    nu: 0.35,
    G: 0.99e9,       // ~0.065 * E
    category: 'wood'
  },
  cocobolo: {
    name: 'Cocobolo',
    E: 14.1e9,
    rho: 1100,
    nu: 0.36,
    G: 0.92e9,       // ~0.065 * E
    category: 'wood'
  },
  ebony: {
    name: 'African Ebony',
    E: 17.4e9,
    rho: 1050,
    nu: 0.38,
    G: 1.13e9,       // ~0.065 * E
    category: 'wood'
  },
  teak: {
    name: 'Teak',
    E: 12.3e9,
    rho: 630,
    nu: 0.35,
    G: 0.80e9,       // ~0.065 * E
    category: 'wood'
  },

  // Synthetic alternatives
  fiberglass: {
    name: 'Fiberglass Composite',
    E: 17.0e9,
    rho: 1800,
    nu: 0.30,
    category: 'metal'  // grouped with metals for UI
  },

  // Custom material - user-defined properties
  custom: {
    name: 'Custom Material',
    E: 10.0e9,        // Default: 10 GPa
    rho: 1000,        // Default: 1000 kg/m³
    nu: 0.33,         // Default: 0.33
    category: 'custom'
  }
};

// Get material by key
export function getMaterial(key: string): Material | undefined {
  return MATERIALS[key];
}

// Get all materials grouped by category
export function getMaterialsByCategory(): { metals: [string, Material][]; woods: [string, Material][]; custom: [string, Material][] } {
  const entries = Object.entries(MATERIALS);
  return {
    metals: entries.filter(([, m]) => m.category === 'metal'),
    woods: entries.filter(([, m]) => m.category === 'wood'),
    custom: entries.filter(([, m]) => m.category === 'custom')
  };
}

// Get shear modulus - use explicit G if provided, otherwise calculate from E and nu (isotropic)
export function getShearModulus(E: number, nu: number, G?: number): number {
  if (G !== undefined) {
    return G;
  }
  // Isotropic formula (valid for metals, not accurate for wood)
  return E / (2 * (1 + nu));
}

// Calculate shear modulus from Young's modulus and Poisson's ratio (isotropic formula)
// Kept for backwards compatibility
export function calculateShearModulus(E: number, nu: number): number {
  return E / (2 * (1 + nu));
}

// Shear correction factor for rectangular cross-section
export const KAPPA = 5 / 6;
