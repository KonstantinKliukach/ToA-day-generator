<script setup lang="ts">
import type { DayOfAdventure } from "../services/DaysClient";
import Button from "../components/Custom-Button.vue";
import useDaysOfadventureStore from "../stores/daysOfAdventure";
import usedDaysFiltersStore from "../stores/daysFilters";

const days = useDaysOfadventureStore();
const filters = usedDaysFiltersStore();
</script>

<template>
  <div class="card-container">
    <div class="button-block">
      <Button :onClick="days.getDays" :disabled="days.loading"
        >Применить</Button
      >
      <Button :onClick="days.getDays" :disabled="days.loading">Сбросить</Button>
    </div>
  </div>
</template>

<style scoped>
.button-block {
  display: grid;
  grid-template-columns: 120px 120px;
  column-gap: 8px;
}
.card-container {
  padding: 16px;
  border-radius: 4px;
  box-shadow: var(--block-shadow);
  overflow: hidden;
}
</style>
