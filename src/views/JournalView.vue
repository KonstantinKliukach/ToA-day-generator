<script setup lang="ts">
import WeatherGenerator from "../utils/WeatherGenerator";
new Array(20)
  .fill(0)
  .forEach(() => console.log(WeatherGenerator.generateWeather().weather));
</script>
<template>Here will be Journal</template>
