<script setup lang="ts">
import type { DayOfAdventure } from "../services/DaysClient";
import EditButton from "./Edit-Button.vue";
import CustomLink from "./Custom-Link.vue";
import NotesEditForm from "./Notes-Edit-Form.vue";

defineProps<{
  day: DayOfAdventure;
  isEdit?: boolean;
}>();
</script>

<template>
  <div class="card-container">
    <div class="card-header">
      <p class="card-title">День прилючения №{{ day.dayNum }}</p>
      <EditButton v-if="!isEdit" :id="day._id" />
      <CustomLink v-else link="/days">back</CustomLink>
    </div>
    <p class="card-subtitle">Погода</p>
    <p class="card-text">Утром: {{ day.weather.am.weather }}</p>
    <p class="card-text">Вечером: {{ day.weather.pm.weather }}</p>
    <p class="card-subtitle">Случайка</p>
    <p class="card-text">Утром: {{ day.encounters.morning || "Нет" }}</p>
    <p class="card-text">Днём: {{ day.encounters.day || "Нет" }}</p>
    <p class="card-text">Вечером: {{ day.encounters.evening || "Нет" }}</p>
    <p v-if="day.notes || isEdit" class="card-subtitle">Заметки</p>
    <p v-if="day.notes && !isEdit" class="card-text">{{ day.notes }}</p>
    <NotesEditForm
      v-if="isEdit"
      :id="day._id"
      :notes="day.notes"
    ></NotesEditForm>
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

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.35em;
}

.card-block {
  margin-bottom: 0.35em;
}
.card-title {
  margin: 0;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: 0.00938em;
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

.notes-edit:focus {
  outline: none !important;
  border: 1px solid var(--main-green);
}
</style>
