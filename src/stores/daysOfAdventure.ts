import axios from "axios";
import { defineStore } from "pinia";
import { API } from "../utils/constants";

interface Weather {
  weather: string;
}

export interface DayOfAdventure {
  _id: string;
  weather: { pm: Weather; am: Weather };
  encounters: {
    morning: number | null;
    day: number | null;
    evening: number | null;
  };
  dayNum: number;
  notes?: string;
}

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
      const { data } = await axios.post<DayOfAdventure>(`${API}/days`, {
        dayNum: nextDayNum,
      });
      this.days = [data, ...this.days];
      this.currentDay = nextDayNum;
    },
    async getDays() {
      this.loading = true;
      const { data } = await axios.get<DayOfAdventure[]>(`${API}/days`);
      this.days = [...data];
      if (data.length) {
        this.currentDay = data[0].dayNum;
      }
      this.loading = false;
    },
  },
});

export default useDaysOfadventureStore;
