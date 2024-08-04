import { Character, Enemy, WEngine } from "../interfaces/gameInterfaces";
import { enginesTypeA } from "./w-engines-type-a";
import { enginesTypeB } from "./w-engines-type-b";
import { enginesTypeS } from "./w-engines-type-s";

export function calculateDamage(character: Character, enemy: Enemy) {
  let outgoingDamage = 0;

  /* Scaling Stat - For now just for attack characters */
  const scalingStat = character.attack;

  /* Skill Motion Value - For now will have 100% of base attack */
  const skillMotionValue = 1;

  /* Base Damage */
  const baseDamage = scalingStat * skillMotionValue;

  /* Only for Zhu Yuan - When enemy enters on corruption */
  const corruptionDamage = 62.5 / 100; //62.5% of attack

  /* Damage Percentage Bonus */
  const damagePercentageBonus = 1 + corruptionDamage; //1 + Sum Damage Percentage Bonus

  /* Damage Reduction Multiplier */
  const damageReductionMultiplier = 1 - 0 + 0; //1 - Sum Damage Reduction + Sum Damage Taken

  /* Level coefficient */
  const levelCoefficient = 50 + (character.level - 1) * 4;

  /* Effective Defense */
  const effectiveDefense =
    enemy.defense * (1 - character.penRatio) - character.pen;

  /* Defense Multiplier */
  const defenseMultiplier =
    levelCoefficient / (levelCoefficient + effectiveDefense);

  /* Resistance Multiplier */
  const resistanceMultiplier = 1;

  /* Stun Multiplier */
  const stunMultiplier = 1 + 0; //1 + Stun Bonus

  /* Attack */
  const attack = character.attack;

  /* Damage */
  outgoingDamage =
    baseDamage *
    damagePercentageBonus *
    damageReductionMultiplier *
    defenseMultiplier *
    resistanceMultiplier *
    stunMultiplier *
    (1 + character.critRate * character.critDamage);

  // Fixed to 2 decimal places
  return Math.round(outgoingDamage * 100) / 100;
}

export function addWEngineToCharacter(
  wEngine: WEngine,
  character: Character,
): Character {
  const newCharacter = { ...character };

  newCharacter.attack += wEngine.baseAttack;
  newCharacter.penRatio += wEngine.penRatio ?? 0;

  //   newCharacter.pen += wEngine.anomalyProficiency ?? 0; NEEDS RESEARCHING
  newCharacter.critRate += wEngine.critRate ?? 0;
  newCharacter.attack += newCharacter.attack * (wEngine.attackPercentage ?? 0);

  return newCharacter;
}

export const bestEngines = (character: Character, enemy: Enemy) => {
  const allEngines = enginesTypeB.concat(enginesTypeA.concat(enginesTypeS));

  return allEngines.sort((a, b) => {
    return (
      calculateDamage(addWEngineToCharacter(b, character), enemy) -
      calculateDamage(addWEngineToCharacter(a, character), enemy)
    );
  });
};

export const sum = (a: number, b: number) => {
  return a + b;
};
