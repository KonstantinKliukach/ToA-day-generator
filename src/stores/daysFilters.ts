import { defineStore } from "pinia";

const useDaysFiltersStore = defineStore({
  id: "filters",
  state: () => ({
    filters: {
      onlyWithNotes: false,
    },
  }),
  getters: {
    getFilters: (state) => state.filters,
  },
  actions: {
    setOnlyWithNotesFolter(newState: boolean) {
      this.filters = { ...this.filters, onlyWithNotes: newState };
    },
  },
});

export default useDaysFiltersStore;
