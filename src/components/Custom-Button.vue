<script setup lang="ts">
defineProps<{
  onClick: () => void;
  disabled?: boolean;
}>();
</script>
<template>
  <button @click="onClick" v-bind:disabled="disabled">
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  background-color: var(--main-green);
  padding: 8px 16px;
  border: 0;
  border-radius: 5%;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: var(--secondary-green);
}

button:disabled {
  background-color: var(--pale-green);
}
</style>
