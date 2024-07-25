let outgoingDamage = 0;

/* Example Character Zhu Yuan */
let character = {
  name: "Zhu Yuan",
  attack: 132,
  defense: 48,
  level: 1,
  penRatio: 0,
  pen: 0,
  critRate: 0.05,
  critDamage: 0.5,
};

/* Dummy Enemy */
let enemy = {
  name: "Dummy",
  attack: 100,
  defense: 150,
};

/* Scaling Stat - For now just for attack characters */
let scalingStat = character.attack;

/* Skill Motion Value - For now will have 100% of base attack */
let skillMotionValue = 1;

/* Base Damage */
let baseDamage = scalingStat * skillMotionValue;

/* Only for Zhu Yuan - When enemy enters on corruption */
let corruptionDamage = 62.5 / 100; //62.5% of attack

/* Damage Percentage Bonus */
let damagePercentageBonus = 1 + corruptionDamage; //1 + Sum Damage Percentage Bonus

/* Damage Reduction Multiplier */
let damageReductionMultiplier = 1 - 0 + 0; //1 - Sum Damage Reduction + Sum Damage Taken

/* Level coefficient */
let levelCoefficient = 50 + (character.level - 1) * 4;

/* Effective Defense */
let effectiveDefense = enemy.defense * (1 - character.penRatio) - character.pen;

/* Defense Multiplier */
let defenseMultiplier =
  levelCoefficient / (levelCoefficient + effectiveDefense);

/* Resistance Multiplier */
let resistanceMultiplier = 1;

/* Stun Multiplier */
let stunMultiplier = 1 + 0; //1 + Stun Bonus

/* Attack */
let attack = character.attack;

/* Damage */
outgoingDamage =
  baseDamage *
  damagePercentageBonus *
  damageReductionMultiplier *
  defenseMultiplier *
  resistanceMultiplier *
  stunMultiplier *
  (1 + character.critRate * character.critDamage);

console.log(outgoingDamage);
