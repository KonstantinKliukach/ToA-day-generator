<script setup lang="ts">
import type { DayOfAdventure } from "../services/DaysClient";
import DaysClient from "../services/DaysClient";
import Button from "./Custom-Button.vue";

defineProps<{
  id: DayOfAdventure["_id"];
  notes?: string;
}>();
</script>

<script lang="ts">
export default {
  data() {
    return {
      text: this.notes || "",
      dayId: this.id,
    };
  },
  methods: {
    async submitForm() {
      await DaysClient.addNotesToDay(this.dayId, this.text);
      this.$router.push("/days");
    },
  },
};
</script>

<template>
  <form @submit.prevent="submitForm">
    <textarea v-model="text" rows="5" class="notes-edit" />
    <Button class="save-button" type="submit">Save</Button>
  </form>
</template>

<style scoped>
.save-button {
  width: 33%;
  margin: 0 auto;
  margin-top: 1.5em;
  display: block;
}

.notes-edit {
  resize: none;
  border-radius: 4px;
  padding: 1em;
  margin-top: 1em;
  min-width: 100%;
}

.notes-edit:focus {
  outline: none !important;
  border: 1px solid var(--main-green);
}
</style>
