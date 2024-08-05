import { Character, Enemy } from "./damage-calculator";
import { addWEngineToCharacter, bestEngines, calculateDamage } from "./util";

export function showCharacterWEngineResults(
  character: Character,
  enemy: Enemy
) {
  console.log(`${character.name} Stats:`);

  console.log(
    `Damage Without any W-Engine: ${calculateDamage(character, enemy)}`
  );

  bestEngines(character, enemy).forEach((engine) => {
    console.log(
      `Damage with ${engine.name}: ${calculateDamage(
        addWEngineToCharacter(engine, character),
        enemy
      )}`
    );
  });
}
