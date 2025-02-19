<script setup lang="ts">
import { ref, onUnmounted, onMounted } from "vue";

const zoomLink = "https://zoom.us/example"; // Replace with your Zoom link
const zoomLinkAvailable = ref(true); // TODO Replace with your logic to determine link availability

const countdown = ref("");

const updateCountdown = () => {
  const now = new Date();
  const nextSunday = new Date(now);
  nextSunday.setDate(now.getDate() + ((7 - now.getDay()) % 7)); // Find next Sunday
  nextSunday.setHours(9, 0, 0, 0); // Set time to 9am

  const timeDiff = nextSunday.getTime() - now.getTime();
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  countdown.value = `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

let interval: NodeJS.Timeout;

onMounted(() => {
  updateCountdown();
  interval = setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<template>
  <div class="full-screen-bg"></div>

  <div class="sermon-page">
    <div v-if="zoomLinkAvailable" class="zoom-container">
      <h1>Welcome to Our Sermon!</h1>
      <!-- <img
        src="https://img.icons8.com/ios-filled/50/000000/zoom.png"
        alt="Zoom Icon"
        /> -->
      <a :href="zoomLink" target="_blank" class="watch-button">
        <span>WATCH</span>
      </a>
    </div>
    <div v-else class="countdown-container">
      <h1>Our Next Sermon</h1>
      <p>Join us next Sunday at 9am!</p>
      <div class="countdown">
        <p>{{ countdown }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sermon-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
  flex-direction: column;
  padding: 20px;
}

.zoom-container,
.countdown-container {
  text-align: center;
}

.watch-button {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 150px; /* Adjust Circle size */
  height: 150px;
  border: 2px solid #050315; /* Circle border */
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
  overflow: hidden;
}

.watch-button span {
  position: absolute;
  font-size: 16px;
  font-weight: bold;
  color: #050315;
  text-transform: uppercase;
  transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
}

.watch-button:hover span {
  opacity: 0;
  transform: translateY(-10px);
}

.watch-button::before {
  content: "WATCH";
  position: absolute;
  font-size: 16px;
  font-weight: bold;
  color: #050315;
  text-transform: uppercase;
  opacity: 1;
  transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
}

.watch-button:hover::before {
  opacity: 0;
  transform: translateY(-10px);
}

.watch-button::after {
  content: "WATCH";
  position: absolute;
  font-size: 16px;
  font-weight: bold;
  color: #050315;
  text-transform: uppercase;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
}

.watch-button:hover::after {
  opacity: 1;
  transform: translateY(0);
}

.countdown {
  font-size: 24px;
  margin-top: 20px;
}

.countdown-container p {
  font-size: 18px;
}

.full-screen-bg {
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(".././assets/images/GrabADrink.jpg");
  /* Adjust background properties as needed */
  background-size: cover;
  background-position: center;
  opacity: 0.5;
}
</style>
