<script setup lang="ts">
import { useRoute } from "vue-router";
import axios from "axios";
import { API } from "../utils/constants";
import type { DayOfAdventure } from "src/stores/daysOfAdventure";
import DayCard from "../components/Day-Card.vue";

const route = useRoute();
const id = route.params.id; // read parameter id (it is reactive)
let isLoading = true;

const { data } = await axios.get<DayOfAdventure>(`${API}/days/${id}`);

isLoading = false;
</script>

<template>
  <p v-if="isLoading">Loading</p>
  <div v-else class="card-container">
    <DayCard is-edit :day="data" />
  </div>
</template>

<style scoped>
.card-container {
  margin: 0 auto;
  max-width: 675px;
}
</style>
