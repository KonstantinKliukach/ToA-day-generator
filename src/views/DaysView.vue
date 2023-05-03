<script setup lang="ts">
import useDaysOfadventureStore from "../stores/daysOfAdventure";
import Button from "../components/Custom-Button.vue";
import DayCard from "../components/Day-Card.vue";
const days = useDaysOfadventureStore();
days.getDays();
</script>
<template>
  <Button :onClick="days.addDay" :disabled="days.loading">Добавить день</Button>
  <div class="grid-container">
    <DayCard v-for="day in days.daysGetter" :day="day" :key="day._id" />
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
