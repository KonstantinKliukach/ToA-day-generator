<script setup lang="ts">
import useDaysOfadventureStore from "../stores/daysOfAdventure";
import usedDaysFiltersStore from "../stores/daysFilters";
import DaysFiltersPanel from "../components/Days-Filters-Panel.vue";
import DaysAddPanel from "../components/Days-Add-Panel.vue";
import DayCard from "../components/Day-Card.vue";

const filters = usedDaysFiltersStore();
const days = useDaysOfadventureStore();
days.getDays(filters.getFilters);
</script>
<template>
  <main class="layout-container">
    <aside class="control-panels">
      <DaysAddPanel />
      <DaysFiltersPanel />
    </aside>
    <main class="grid-container" v-if="!days.loading">
      <DayCard v-for="day in days.daysGetter" :day="day" :key="day._id" />
    </main>
    <div class="loading-container" v-else>
      <v-progress-circular
        indeterminate
        color="teal-lighten-1"
      ></v-progress-circular>
    </div>
  </main>
</template>

<style scoped>
.control-panels {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.grid-container {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, 275px);
}
.layout-container {
  margin-top: 16px;
  flex: 1;
  display: grid;
  gap: 32px;
  grid-template-columns: 275px 1fr;
}

.loading-container {
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
