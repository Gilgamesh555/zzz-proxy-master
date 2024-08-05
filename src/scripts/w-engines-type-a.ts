import { WEngine } from "../interfaces/gameInterfaces";

export const enginesTypeA: WEngine[] = [
  {
    name: "Weeping Gemini",
    baseAttack: 40,
    attackPercentage: 0.1,
    type: "anomaly",
    effect:
      "Whenever a squad member inflicts an Attribute Anomaly on an enemy, the equipper gains a buff that increases Anomaly Proficiency by 30, stacking up to 4 times. This effect expires when the target recovers from Stun or is defeated. The duration of each stack is calculated separately.",
  },
  {
    name: "Unfettered Game Ball",
    baseAttack: 40,
    energyRegenPercentage: 0.2,
    type: "support",
    effect:
      "Whenever the equipper's attack triggers an Attribute Counter effect, all squad members' CRIT Rate against the struck enemy increases by 12% for 12s. Passive effects of the same name do not stack.",
  },
  {
    name: "The Vault",
    baseAttack: 42,
    energyRegenPercentage: 0.2,
    type: "support",
    effect:
      "Dealing Ether DMG using an EX Special Attack, Chain Attack, or Ultimate increases all squad members' DMG against the target by 15% and increases the equipper's Energy Regen by 0.5/s for 2s. Passive effects of the same name do not stack.",
  },
  {
    name: "Street Superstar",
    baseAttack: 40,
    attackPercentage: 0.1,
    type: "attack",
    effect:
      "Whenever a squad member launches a Chain Attack, the equipper gains a Charge stack, stacking up to 3 times. Upon activating their own Ultimate, the equipper consumes all Charge stacks, and each stack increases the skill's DMG by 15%.",
  },
  {
    name: "Steam Oven",
    baseAttack: 40,
    energyRegenPercentage: 0.2,
    type: "stun",
    effect:
      "For every 10 Energy accumulated, the equipper's Impact increases by 2%, stacking up to 8 times. After Energy is consumed, this bonus remains for 8 more seconds. The duration of each stack is calculated separately.",
  },
  {
    name: "Starlight Engine Replica",
    baseAttack: 42,
    attackPercentage: 0.1,
    type: "attack",
    effect:
      "Increases the equipper's Physical DMG against the target by 36% for 8s upon hitting an enemy at least 6 meters away with a Basic Attack or Dash Attack.",
  },
  {
    name: "Starlight Engine",
    baseAttack: 40,
    attackPercentage: 0.1,
    type: "attack",
    effect:
      "Launching a Dodge Counter or Quick Assist increases the equipper's ATK by 12% for 12s.",
  },
  {
    name: "Spring Embrace",
    baseAttack: 40,
    attackPercentage: 0.1,
    type: "defense",
    effect:
      "Reduces DMG taken by 7.5%. When attacked, the equipper's Energy Generation Rate increases by 10% for 12s. When the equipper switches off-field, this buff will be transferred to the new on-field character with its duration refreshed. Passive effects of the same name do not stack.",
  },
  {
    name: "Slice of Time",
    baseAttack: 40,
    penRatio: 0.08,
    type: "anomaly",
    effect:
      "Any squad members' Dodge Counter, EX Special Attack, Assist Attack, or Chain Attack respectively generates 20/25/30/35 more Decibels and generates 0.7 Energy for the equipper. This effect can trigger once every 12s. The cooldown for each type of attack is independent of others. Passive effects of the same name do not stack.",
  },
  {
    name: "Six Shooter",
    baseAttack: 40,
    impactPercentage: 0.06,
    type: "stun",
    effect:
      "The equipper gains 1 Charge stack every 3s, stacking up to 6 times. When launching an EX Special Attack, consumes all Charge stacks and each stack consumed increases the skill's Daze inflicted by 4%",
  },
  {
    name: "Roaring Ride",
    baseAttack: 42,
    attackPercentage: 0.1,
    type: "stun",
    effect:
      "When EX Special Attack hits an enemy, one of three possible effects is randomly triggered for 5 seconds. This effect can trigger once every 0.3s. The same types of effects cannot stack. Repeated triggers reset the duration, allowing several effects to be active at once: increases the equipper's ATK by 8%, increases the equipper's Anomaly Proficiency by 40, or increases the equipper's Anomaly Buildup Rate by 25%.",
  },
  {
    name: "Rainforest Gourmet",
    baseAttack: 40,
    anomalyProficiency: 30,
    type: "anomaly",
    effect:
      "For every 10 energy consumed, the equipper gains a buff that increases ATK by 2.5% for 10s, stacking up to 10 times. The duration of each stack is calculated separately.",
  },
  {
    name: "Precious Fossilized Core",
    baseAttack: 40,
    impactPercentage: 0.06,
    type: "stun",
    effect:
      "When the target's HP is no lower than 50%, the equipper inflicts 10% more Daze to the target. When the target's HP is no lower than 75%, this bonus is further enhanced by 10%.",
  },
  {
    name: "Original Transmorpher",
    baseAttack: 40,
    hpPercentage: 0.1,
    type: "defense",
    effect:
      "Increases Max HP by 8%. When attacked, the equipper's Impact is increased by 10% for 12s.",
  },
  {
    name: "Kaboom the Cannon",
    baseAttack: 42,
    energyRegenPercentage: 0.2,
    type: "support",
    effect:
      "When any friendly unit in the squad attacks and hits an enemy, all friendly units' ATK increases by 2.5% for 8s. stacking up to 4 times. The duration of each stack is calculated separately, and each friendly unit can provide 1 stack of the buff. Passive effects of the same name do not stack.",
  },
  {
    name: "Housekeeper",
    baseAttack: 42,
    attackPercentage: 0.1,
    type: "attack",
    effect:
      "While off-field, Energy Regen increases by 0.45/s. When an EX Special Attack hits an enemy, the equipper's Physical DMG increases by 3%, stacking up to 15 times and lasting 1s. Repeated triggers reset the duration.",
  },
  {
    name: "Electro-Lip Gloss",
    baseAttack: 40,
    anomalyProficiency: 30,
    type: "anomaly",
    effect:
      "When there are enemies inflicted with Attribute Anomaly on the field, the equipper's ATK increases by 10% and they deal an additional 15% more DMG to the target.",
  },
  {
    name: "Drill Rig - Red Axis",
    baseAttack: 42,
    energyRegenPercentage: 0.2,
    type: "attack",
    effect:
      "When launching an EX Special Attack, Electric DMG from Basic Attacks and Dash Attacks increases by 50% for 10s. This effect can trigger once every 15s.",
  },
  {
    name: "Demara Battery Mark II",
    baseAttack: 42,
    impactPercentage: 0.06,
    type: "stun",
    effect:
      "Increases Electric DMG by 15%. When the equipper hits an enemy with Dodge Counter or Assist Attack, their Energy Generation Rate increases by 18% for 8s.",
  },
  {
    name: "Cannon Rotor",
    baseAttack: 40,
    critRate: 0.08,
    type: "attack",
    effect:
      "Increases ATK by 7.5%. Landing a critical hit on an enemy will inflict an additional 200% of ATK as DMG. This effect can trigger once every 8s.",
  },
  {
    name: "Bunny Band",
    baseAttack: 40,
    defensePercentage: 0.16,
    type: "defense",
    effect:
      "Increases Max HP by 8%. Increases the equipper's ATK by 10% when they are shielded.",
  },
  {
    name: "Big Cylinder",
    baseAttack: 42,
    defensePercentage: 0.16,
    type: "defense",
    effect:
      "Reduces DMG taken by 7.5%. After being attacked, the next attack to hit an enemy will trigger a critical hit and deal 600% of the equipper's DEF as additional DMG. This effect can be triggered once every 7.5s.",
  },
  {
    name: "Bashful Demon",
    baseAttack: 42,
    attackPercentage: 0.1,
    type: "support",
    effect:
      "Increases Ice DMG by 15%. When launching an EX Special Attack, all squad members' ATK increases by 2% for 12s, stacking up to 4 times. Repeated triggers refresh the duration. Passive effects of the same name do not stack.",
  },
];
