import { WEngine } from "../interfaces/gameInterfaces";

export const enginesTypeS: WEngine[] = [
  {
    name: "Weeping Cradle",
    baseAttack: 46,
    penRatio: 0.096,
    type: "support",
    effect:
      "While off-field, Energy Regen increases by 0.6/s. Attacks from the equipper enhance the squad's DMG against a struck target by 10% for 3 seconds. During this period, this effect is further increased by 1.7% every 0.5s, up to a maximum additional increase of 10.2%. Repeated triggers only refresh its duration without refreshing the DMG increase effect. Passive effects of the same name do not stack.",
  },
  {
    name: "The Restrained",
    baseAttack: 46,
    impactPercentage: 0.072,
    type: "stun",
    effect:
      "When an attack hits an enemy, DMG and Daze from Basic Attacks increase by 6% for 8s, stacking up to 5 times. This effect can trigger at most once during each skill. The duration of each stack is calculated separately.",
  },
  {
    name: "The Brimstone",
    baseAttack: 46,
    attackPercentage: 0.12,
    type: "attack",
    effect:
      "Upon hitting an enemy with a Basic Attack, Dash Attack, or Dodge Counter, the equipper's ATK increases by 3.5% for 8s, stacking up to 8 times. This effect can trigger once every 0.5s. The duration of each stack is calculated separately.",
  },
  {
    name: "Steel Cushion",
    baseAttack: 46,
    critRate: 0.096,
    type: "attack",
    effect:
      "Increases Physical DMG by 20%. The equipper's DMG increases by 25% when attacking the enemy from behind.",
  },
  {
    name: "Riot Suppressor Mark VI",
    baseAttack: 48,
    critDamagePercentage: 0.19,
    type: "attack",
    effect:
      "Increases CRIT Rate by 15%. Launching an EX Special Attack grants the equipper 8 Charge stacks, up to a maximum of 8 stacks. Whenever the equipper's Basic Attack deals Ether DMG, consumes a Charge stack and increases the skill's DMG by 35%.",
  },
  {
    name: "Hellfire Gears",
    baseAttack: 46,
    impactPercentage: 0.072,
    type: "stun",
    effect:
      "While off-field, the equipper's Energy Regen increases by 0.6/s. When using an EX Special Attack, the equipper's Impact is increased 10% for 10s, stacking up to 2 times. The duration of each stack is calculated separately.",
  },
  {
    name: "Fusion Compiler",
    baseAttack: 46,
    penRatio: 0.096,
    type: "anomaly",
    effect:
      "Increases ATK by 12%. When using a Special Attack or an EX Special Attack, the equipper's Anomaly Proficiency is increased by 25 for 8s, stacking up to 3 times. The duration of each stack is calculated separately.",
  },
  {
    name: "Deep Sea Visitor",
    baseAttack: 48,
    critRate: 0.096,
    type: "attack",
    effect:
      "Increases Ice DMG by 25%. Upon hitting an enemy with a Basic Attack, the equipper's CRIT Rate increases by 10% for 8s. When dealing Ice DMG with a Dash Attack, the equipper's CRIT Rate increases by an additional 10% for 15s. The duration of each effect is calculated separately.",
  },
];
