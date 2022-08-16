import EncounterGenerator from "./EncounterGenerator";
import WeatherGenerator, { Weather } from "./WeatherGenerator";

import { v4 } from "uuid";

class DayOfAdventure {
  id: string;
  weather: { pm: Weather; am: Weather };
  encounters: {
    morning: number | null;
    day: number | null;
    evening: number | null;
  };
  dayNum: number;
  constructor(dayNum: number) {
    this.id = v4();
    this.dayNum = dayNum;
    this.weather = {
      pm: WeatherGenerator.generateWeather(),
      am: WeatherGenerator.generateWeather(),
    };
    this.encounters = {
      morning: EncounterGenerator.checkRandomEncounter(),
      day: EncounterGenerator.checkRandomEncounter(),
      evening: EncounterGenerator.checkRandomEncounter(),
    };
  }
}

export default DayOfAdventure;
