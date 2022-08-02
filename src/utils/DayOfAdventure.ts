import EncounterGenerator from "./EncounterGenerator";
import WeatherGenerator, { Weather } from "./WeatherGenerator";

class DayOfAdventure {
  weather: { pm: Weather; am: Weather };
  encounters: {
    morning: number | null;
    day: number | null;
    evening: number | null;
  };
  constructor() {
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
