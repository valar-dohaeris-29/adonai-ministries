<script setup lang="ts"></script>

<template>
  <div class="full-screen-bg"></div>

  <!-- <h1>Event Calendar!</h1> -->
</template>

<style scoped>
.full-screen-bg {
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(".././assets/images/EventsImage.jpg");
  /* Adjust background properties as needed */
  background-size: cover;
  background-position: center;
  /* opacity: 0.5; */
}
</style>
