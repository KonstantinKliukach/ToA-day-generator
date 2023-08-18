<template>
  <v-layout>
    <div class="app-content">
      <Suspense>
        <slot></slot>
      </Suspense>
    </div>
  </v-layout>
</template>

<style scoped>
.app-content {
  display: flex;
  flex-direction: column;
  flex: 1;
}
</style>
