import ENCOUNTER_CHANSE from "src/utils/constants";
import DiceRoller from "./DiceRoller";

class EncounterGenerator {
  chance: number;
  constructor(chance: number) {
    this.chance = chance;
  }
  private rollEncounter() {
    return DiceRoller.rollD20();
  }
  private generateEncounter() {
    return DiceRoller.rollD100();
  }
  checkRandomEncounter(): number | null {
    if (this.rollEncounter() >= this.chance) {
      return this.generateEncounter();
    } else {
      return null;
    }
  }
}

export default new EncounterGenerator(Number(ENCOUNTER_CHANSE));
