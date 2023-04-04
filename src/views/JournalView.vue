<script setup lang="ts">
import useDaysOfadventureStore from "../stores/daysOfAdventure";
import AddButton from "../components/Add-Button.vue";
import DayCard from "../components/Day-Card.vue";
const days = useDaysOfadventureStore();
days.getDays();
</script>
<template>
  <AddButton :onAdd="days.addDay" :disabled="days.loading" />
  <div class="grid-container">
    <DayCard v-for="day in days.daysGetter" :day="day" :key="day.id" />
  </div>
</template>

<style scoped>
.grid-container {
  margin-top: 16px;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, 275px);
}
</style>
