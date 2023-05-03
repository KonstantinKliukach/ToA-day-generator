<script setup lang="ts">
defineProps<{
  link: string;
}>();
</script>

<template>
  <router-link class="link" :to="link" append><slot></slot></router-link>
</template>

<style scoped>
.link:hover {
  background-color: transparent;
  color: var(--pale-green);
}

.link {
  color: var(--main-green);
}
</style>
