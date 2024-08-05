export interface WEngine {
  name: string;
  baseAttack: number;
  attackPercentage?: number;
  energyRegenPercentage?: number;
  impactPercentage?: number;
  hpPercentage?: number;
  penRatio?: number;
  critDamagePercentage?: number;
  anomalyProficiency?: number;
  critRate?: number;
  defensePercentage?: number;
  type: "stun" | "support" | "anomaly" | "attack" | "defense";
  effect: string;
}

export interface Character {
  name: string;
  attack: number;
  defense: number;
  level: number;
  penRatio: number;
  pen: number;
  critRate: number;
  critDamage: number;
  outgoingDamage: number;
}

export interface Enemy {
  name: string;
  attack: number;
  defense: number;
}
