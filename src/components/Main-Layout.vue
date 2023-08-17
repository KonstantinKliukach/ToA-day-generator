<template>
  <main class="main">
    <Suspense>
      <slot></slot>
    </Suspense>
  </main>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  flex: 1;
}
</style>
