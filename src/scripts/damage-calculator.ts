import { showCharacterWEngineResults } from "./results";

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

const character2: Character = {
  name: "Ellen Joe",
  attack: 135,
  defense: 49,
  level: 1,
  penRatio: 0,
  pen: 0,
  critRate: 0.05,
  critDamage: 0.5,
  outgoingDamage: 0,
};

const character3: Character = {
  name: "Soldier 11",
  attack: 128,
  defense: 49,
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

/* Log Damage */

showCharacterWEngineResults(character, enemy);
showCharacterWEngineResults(character2, enemy);
showCharacterWEngineResults(character3, enemy);
