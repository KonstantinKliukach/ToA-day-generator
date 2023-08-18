import { defineStore } from "pinia";

export interface DaysFilters {
  onlyWithNotes?: boolean;
}

const initialState: DaysFilters = {
  onlyWithNotes: false,
};

const useDaysFiltersStore = defineStore({
  id: "filters",
  state: () => ({
    filters: {
      ...initialState,
    },
  }),
  getters: {
    getFilters: (state) => state.filters,
    getOnlyWithNotes: (state) => state.filters.onlyWithNotes,
  },
  actions: {
    setOnlyWithNotes(newValue: boolean) {
      this.filters.onlyWithNotes = newValue;
    },
    clearAll() {
      this.filters = { ...initialState };
    },
  },
});

export default useDaysFiltersStore;
