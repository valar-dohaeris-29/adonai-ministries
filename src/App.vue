<script setup lang="ts">
import Navbar from "./views/navbar.vue";
</script>

<template>
  <v-card>
    <v-layout>
      <Navbar />

      <v-main>
        <RouterView />
      </v-main>
    </v-layout>
  </v-card>
</template>

<style scoped></style>
