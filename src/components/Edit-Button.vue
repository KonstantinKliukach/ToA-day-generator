<script setup lang="ts">
import type { DayOfAdventure } from "../services/DaysClient";
import CustomLink from "./Custom-Link.vue";

defineProps<{
  id: DayOfAdventure["_id"];
}>();
</script>

<script lang="ts">
export default {
  data() {
    return {
      link: `/days/${this.id}`,
    };
  },
  components: { CustomLink },
};
</script>

<template>
  <custom-link :link="link">edit</custom-link>
</template>
