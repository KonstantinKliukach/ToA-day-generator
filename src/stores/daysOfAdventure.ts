import { defineStore } from "pinia";
import DayOfAdventure from "../utils/DayOfAdventure";

const STORAGE_KEY = "TOA-DAY";

const useDaysOfadventureStore = defineStore({
  id: "days",
  state: () => ({
    days: [] as DayOfAdventure[],
    currentDay: Number(localStorage.getItem(STORAGE_KEY)) || 0,
  }),
  getters: {
    daysGetter: (state) => state.days,
    currentDayGetter: (state) => state.currentDay,
  },
  actions: {
    addDay() {
      const newDay = this.currentDay + 1;
      this.currentDay = newDay;
      localStorage.setItem(STORAGE_KEY, newDay.toString());
      this.days.push(new DayOfAdventure(newDay));
    },
  },
});

export default useDaysOfadventureStore;
