import { WEngine } from "../interfaces/gameInterfaces";

export const enginesTypeB: WEngine[] = [
  {
    name: "vortex-revolver",
    baseAttack: 32,
    attackPercentage: 0.08,
    type: "stun",
    effect: "EX Special Attacks inflict 10% more Daze.",
  },
  {
    name: "vortex-hatchet",
    baseAttack: 32,
    energyRegenPercentage: 0.16,
    type: "stun",
    effect:
      "Upon entering combat or switching in, the equipper's Impact increases by 9% for 10s. This effect can trigger once every 20s.",
  },
  {
    name: "vortex-arrow",
    baseAttack: 32,
    impactPercentage: 0.048,
    type: "stun",
    effect: "The equipper's attacks inflict 8% more Daze on their main target.",
  },
  {
    name: "reverb-mark-3",
    baseAttack: 32,
    hpPercentage: 0.08,
    type: "support",
    effect:
      "Launching an Chain Attack or Ultimate increases all squad member's ATK by 8% for 10s. This effect can trigger once every 20s. Passive effects of the same name do not stack.",
  },
  {
    name: "reverb-mark-2",
    baseAttack: 32,
    energyRegenPercentage: 0.16,
    type: "support",
    effect:
      "Launching an EX Special Attack or Chain Attack increases all squad member's Anomaly Mastery and Anomaly Proficiency by 10 for 10s. This effect can trigger once every 20s. Passive effects of the same name do not stack.",
  },
  {
    name: "reverb-mark-1",
    baseAttack: 32,
    attackPercentage: 0.08,
    type: "support",
    effect:
      "Launching an EX Special Attack increases all squad member's Impact by 8% for 10s. This effect can trigger once every 20s. Passive effects of the same name do not stack.",
  },
  {
    name: "magnetic-storm-charlie",
    baseAttack: 32,
    penRatio: 0.064,
    type: "anomaly",
    effect:
      "Whenever a squad member inflicts an Attribute Anomaly on an enemy, the equipper generates 3.5 Energy. This effect can trigger once every 12s.",
  },
  {
    name: "magnetic-storm-bravo",
    baseAttack: 32,
    anomalyProficiency: 24,
    type: "anomaly",
    effect:
      "Accumulating Anomaly Buildup increases the equipper's Animaly Proficiency by 25 for 10s. This effect can trigger once every 20s.",
  },
  {
    name: "magnetic-storm-alpha",
    baseAttack: 32,
    attackPercentage: 0.08,
    type: "anomaly",
    effect:
      "Accumulating Anomaly Buildup increases the equipper's Anomaly Mastery by 25 for 10s. This effect can trigger once every 20s.",
  },
  {
    name: "lunar-pleniluna",
    baseAttack: 32,
    attackPercentage: 0.08 + 0.12, // 0.12 from when equipped with attack character
    type: "attack",
    effect:
      "Basic Attack, Dash Attack, and Dodge Counter DMG increases by 12%.",
  },
  {
    name: "lunar-noviluna",
    baseAttack: 32,
    critRate: 0.064,
    type: "attack",
    effect:
      "Launching an EX Special Attack generates 3 Energy for the equipper. This effect can trigger once every 12s.",
  },
  {
    name: "lunar-decrescent",
    baseAttack: 32,
    attackPercentage: 0.08 + 0.15, // only when chain or ultimate attack around 6s
    type: "attack",
    effect:
      "Launching a Chain Attack or Ultimate increases the equipper's DMG by 15% for 6s.",
  },
  {
    name: "identity-inflection",
    baseAttack: 32,
    defensePercentage: 0.128,
    type: "defense",
    effect: "When attacked, reduces the attacker's DMG by 6% for 12s.",
  },
  {
    name: "identity-base",
    baseAttack: 32,
    defensePercentage: 0.128,
    type: "defense",
    effect: "When attacked, the equipper's DEF increases by 20% for 8s.",
  },
];
