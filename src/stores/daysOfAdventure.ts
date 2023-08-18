import { defineStore } from "pinia";
import type { DayOfAdventure } from "src/services/DaysClient";
import DaysClient from "../services/DaysClient";
import type { DaysFilters } from "./daysFilters";

const useDaysOfadventureStore = defineStore({
  id: "days",
  state: () => ({
    loading: true,
    days: [] as DayOfAdventure[],
    currentDay: 0,
  }),
  getters: {
    daysGetter: (state) => state.days,
    dayGetter: (state) => (id: string) =>
      state.days.find((day) => day._id === id),
    currentDayGetter: (state) => state.currentDay,
  },
  actions: {
    async addDay() {
      const nextDayNum = this.currentDay + 1;
      const data = await DaysClient.addDay(nextDayNum);
      this.days = [data, ...this.days];
      this.currentDay = nextDayNum;
    },
    async getDays(filters?: DaysFilters) {
      this.loading = true;
      const days = await DaysClient.getDays(filters);
      this.days = [...days];
      if (days.length) {
        this.currentDay = days[0].dayNum;
      }
      this.loading = false;
    },
  },
});

export default useDaysOfadventureStore;
