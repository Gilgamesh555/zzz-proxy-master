import { addWEngineToCharacter, calculateDamage } from "./util";
import { enginesTypeB } from "./w-engines";

/* Example Character Zhu Yuan */
const character: Character = {
  name: "Zhu Yuan",
  attack: 132,
  defense: 48,
  level: 1,
  penRatio: 0,
  pen: 0,
  critRate: 0.05,
  critDamage: 0.5,
  outgoingDamage: 0,
};

/* Dummy Enemy */
const enemy: Enemy = {
  name: "Dummy",
  attack: 100,
  defense: 50,
};

export interface Enemy {
  name: string;
  attack: number;
  defense: number;
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

console.log(
  `Damage Without any W-Engine: ${calculateDamage(character, enemy)}`
);

/* Log Damage */

const bestEngines = enginesTypeB.sort((a, b) => {
  return (
    calculateDamage(addWEngineToCharacter(b, character), enemy) -
    calculateDamage(addWEngineToCharacter(a, character), enemy)
  );
});

bestEngines.forEach((engine) => {
  console.log(
    `Damage with ${engine.name}: ${calculateDamage(
      addWEngineToCharacter(engine, character),
      enemy
    )}`
  );
});
