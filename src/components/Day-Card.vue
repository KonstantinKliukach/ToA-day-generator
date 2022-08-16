<script setup lang="ts">
import type DayOfAdventure from "../utils/DayOfAdventure";
defineProps<{
  day: DayOfAdventure;
}>();
</script>

<template>
  <div class="card-container">
    <p class="card-title">День прилючения №{{ day.dayNum }}</p>
    <p class="card-subtitle">Погода</p>
    <p class="card-text">Утром: {{ day.weather.am.weather }}</p>
    <p class="card-text">Вечером: {{ day.weather.pm.weather }}</p>
    <p class="card-subtitle">Случайка</p>
    <p class="card-text">Утром: {{ day.encounters.morning || "Нет" }}</p>
    <p class="card-text">Вечером: {{ day.encounters.evening || "Нет" }}</p>
  </div>
</template>

<style scoped>
.card-container {
  padding: 16px;
  border-radius: 4px;
  box-shadow: var(--block-shadow);
  overflow: hidden;
  min-width: 275px;
}
.card-title {
  margin: 0;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: 0.00938em;
  margin-bottom: 0.35em;
  color: rgba(0, 0, 0, 0.6);
  font-size: 14px;
}

.card-subtitle {
  margin: 0;
  margin-top: 16px;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.334;
  letter-spacing: 0em;
}
</style>
