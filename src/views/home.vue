<script setup lang="ts"></script>

<template>
  <div class="full-screen-bg"></div>
  <h1 class="header">✟ Welcome to Adonai Ministries</h1>
  <div class="address">
    Visit us at: 33 Unity Ave, New Modder, Benoni, 1501
    <a href="https://maps.app.goo.gl/awvFbCgCQTZSE7f29" target="_blank"> </a>
  </div>
</template>

<style scoped>
.header {
  position: fixed;
  top: 7%;
  left: 10%;
  padding: 20px;
  font-size: 45pt;
  color: #110505;
}

.address {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 10;
  color: rgba(255, 255, 255, 0.9);
  background-color: #110505;
  padding: 10px;
}

.full-screen-bg {
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(".././assets/images/WelcomeHome.jpg");
  /* Adjust background properties as needed */
  background-size: cover;
  background-position: center;
  /* opacity: 0.5; */
}
</style>
