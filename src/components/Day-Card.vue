<script setup lang="ts">
import type DayOfAdventure from "../utils/DayOfAdventure";
defineProps<{
  day: DayOfAdventure;
}>();
</script>

<template>
  <div class="card-container">
    <p class="card-title">День кприлючения №</p>
    <p class="card-subtitle">Погода</p>
  </div>
</template>

<style scoped>
.card-container {
  padding: 16px;
  border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
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
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.334;
  letter-spacing: 0em;
}
</style>
