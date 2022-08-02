import { defineStore } from "pinia";
import DayOfAdventure from "../utils/DayOfAdventure";

export const useDaysOfadventureStore = defineStore({
  id: "days",
  state: () => ({
    days: [] as DayOfAdventure[],
  }),
  actions: {
    addDay() {
      this.days.push(new DayOfAdventure());
    },
  },
});
