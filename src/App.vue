<script setup lang="ts">
import { RouterView } from "vue-router";
import MainLayout from "./components/Main-Layout.vue";
</script>

<template>
  <main-layout>
    <RouterView />
  </main-layout>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
