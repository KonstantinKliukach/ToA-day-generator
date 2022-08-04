<script setup lang="ts">
defineProps<{
  onAdd: () => void;
}>();
</script>
<template>
  <button @click="onAdd">Добавить день</button>
</template>

<style scoped>
button {
  background-color: #009688;
  padding: 8px 16px;
  border: 0;
  border-radius: 5%;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #33ab9f;
}
</style>
