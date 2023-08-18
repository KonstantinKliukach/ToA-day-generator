<script setup lang="ts">
import Button from "../components/Custom-Button.vue";
import useDaysOfadventureStore from "../stores/daysOfAdventure";

const days = useDaysOfadventureStore();

const handleSubmit = () => {
  days.addDay();
};
</script>

<template>
  <form @submit.prevent="handleSubmit" class="card-container">
    <div class="button-block">
      <Button type="submit" :disabled="days.loading">Добавить день</Button>
    </div>
  </form>
</template>

<style scoped>
.button-block {
  display: flex;
  flex-direction: column;
}
.card-container {
  padding: 16px;
  border-radius: 4px;
  box-shadow: var(--block-shadow);
  overflow: hidden;
}
</style>
