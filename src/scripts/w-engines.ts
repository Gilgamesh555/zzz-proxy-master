export const enginesTypeB: WEngine[] = [
  {
    name: "vortex-revolver",
    baseAttack: 32,
    attackPercentage: 0.08,
  },
  {
    name: "vortex-hatchet",
    baseAttack: 32,
    energyRegenPercentage: 0.16,
  },
  {
    name: "vortex-arrow",
    baseAttack: 32,
    impactPercentage: 0.048,
  },
  {
    name: "reverb-mark-3",
    baseAttack: 32,
    hpPercentage: 0.08,
  },
  {
    name: "reverb-mark-2",
    baseAttack: 32,
    energyRegenPercentage: 0.16,
  },
  {
    name: "reverb-mark-1",
    baseAttack: 32,
    attackPercentage: 0.08,
  },
  {
    name: "magnetic-storm-charlie",
    baseAttack: 32,
    penRatio: 0.064,
  },
  {
    name: "magnetic-storm-bravo",
    baseAttack: 32,
    anomalyProficiency: 24,
  },
  {
    name: "magnetic-storm-alpha",
    baseAttack: 32,
    attackPercentage: 0.08,
  },
  {
    name: "lunar-pleniluna",
    baseAttack: 32,
    attackPercentage: 0.08 + 0.12, // 0.12 from when equipped with attack character
  },
  {
    name: "lunar-noviluna",
    baseAttack: 32,
    critRate: 0.064,
  },
  {
    name: "lunar-decrescent",
    baseAttack: 32,
    attackPercentage: 0.08 + 0.15, // only when chain or ultimate attack around 6s
  },
  {
    name: "identity-inflection",
    baseAttack: 32,
    defensePercentage: 0.128,
  },
  {
    name: "identity-base",
    baseAttack: 32,
    defensePercentage: 0.128,
  },
];

export interface WEngine {
  name: string;
  baseAttack: number;
  attackPercentage?: number;
  energyRegenPercentage?: number;
  impactPercentage?: number;
  hpPercentage?: number;
  penRatio?: number;
  anomalyProficiency?: number;
  critRate?: number;
  defensePercentage?: number;
}
