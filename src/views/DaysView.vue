<script setup lang="ts">
import useDaysOfadventureStore from "../stores/daysOfAdventure";
import Button from "../components/Custom-Button.vue";
import DaysFiltersPanel from "../components/Days-Filters-Panel.vue";
import DayCard from "../components/Day-Card.vue";
const days = useDaysOfadventureStore();
days.getDays();
</script>
<template>
  <Button :onClick="days.addDay" :disabled="days.loading">Добавить день</Button>
  <div class="layout-container" v-if="!days.loading">
    <aside><DaysFiltersPanel /></aside>
    <div class="grid-container">
      <DayCard v-for="day in days.daysGetter" :day="day" :key="day._id" />
    </div>
  </div>
  <div class="loading-container" v-else>
    <v-progress-circular indeterminate color="green"></v-progress-circular>
  </div>
</template>

<style scoped>
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
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
