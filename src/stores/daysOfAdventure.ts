import { defineStore } from "pinia";
import DayOfAdventure from "../utils/DayOfAdventure";

const useDaysOfadventureStore = defineStore({
  id: "days",
  state: () => ({
    days: [] as DayOfAdventure[],
  }),
  getters: {
    daysGetter: (state) => state.days,
  },
  actions: {
    addDay() {
      this.days.push(new DayOfAdventure());
    },
  },
});

export default useDaysOfadventureStore;
