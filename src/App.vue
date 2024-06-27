<script setup lang="ts">
import { ref } from "vue";

const item = ref(0);
</script>

<template>
  <v-chip color="black" @click="item++">yes set{{ item }}</v-chip>
  <h1 @click="item++">Hello App!</h1>
  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/live-streaming">Go to About</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
