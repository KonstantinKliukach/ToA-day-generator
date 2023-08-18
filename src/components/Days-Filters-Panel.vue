<script setup lang="ts">
import Button from "../components/Custom-Button.vue";
import useDaysOfadventureStore from "../stores/daysOfAdventure";
import usedDaysFiltersStore from "../stores/daysFilters";
import { ref } from "vue";

const days = useDaysOfadventureStore();
const filters = usedDaysFiltersStore();
const onlyWithNotes = ref(filters.getOnlyWithNotes || false);

const handleSubmit = () => {
  filters.setOnlyWithNotes(onlyWithNotes.value);
  days.getDays(filters.getFilters);
};

const handleClear = () => {
  filters.clearAll();
  onlyWithNotes.value = false;
  days.getDays();
};
</script>

<template>
  <form @submit.prevent="handleSubmit" class="card-container">
    <div>
      <v-checkbox
        label="Только с заметками"
        color="teal-lighten-1"
        v-model="onlyWithNotes"
      ></v-checkbox>
    </div>
    <div class="button-block">
      <Button type="submit" :disabled="days.loading">Применить</Button>
      <Button :onClick="handleClear" :disabled="days.loading">Сбросить</Button>
    </div>
  </form>
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
