<script setup lang="ts">
import { useRoute } from "vue-router";
import DayCard from "../components/Day-Card.vue";
import DaysClient from "../services/DaysClient";

const route = useRoute();
const id = route.params.id; // read parameter id (it is reactive)
let isLoading = true;

const day = await DaysClient.getDay(id as string);

isLoading = false;
</script>

<template>
  <p v-if="isLoading">Loading</p>
  <DayCard is-edit :day="day" v-else />
</template>

<style scoped></style>
