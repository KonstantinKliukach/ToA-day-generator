import { defineStore } from "pinia";
import DayOfAdventure from "../utils/DayOfAdventure";

const useDaysOfadventureStore = defineStore({
  id: "days",
  state: () => ({
    days: [] as DayOfAdventure[],
    currentDay: 0,
  }),
  getters: {
    daysGetter: (state) => state.days,
  },
  actions: {
    addDay() {
      this.currentDay += 1;
      this.days.push(new DayOfAdventure());
    },
  },
});

export default useDaysOfadventureStore;
