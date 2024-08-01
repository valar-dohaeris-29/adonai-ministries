<script setup lang="ts">
import router from "./routes/index";

const navigateToHome = () => {
  router.push("/");
};
</script>
<template>
  <v-card>
    <v-layout class="navbar">
      <v-row
        ><v-col cols="1"></v-col>
        <v-col cols="3">
          <div @click="navigateToHome" class="navbar-logo">
            <img src="./assets/images/logo.png" />
            <!-- subtitle="admin@adonaiministries.co.za"
              title="Adonai Ministries" -->
          </div>
        </v-col>
      </v-row>
      <v-main class="viewing-page">
        <RouterView />
      </v-main>
    </v-layout>
  </v-card>
</template>

<style scoped>
.viewing-page {
  /* z-index: -1; */
}
.navbar {
  background: transparent;
}
</style>

<!-- <v-navigation-drawer expand-on-hover rail :width="300">


  <v-divider></v-divider>

  <v-list density="compact" nav>
    <v-list-item
      prepend-icon="mdi-home"
      title="Home"
      to="/"
    ></v-list-item>
    <v-list-item
      prepend-icon="mdi-video-box"
      title="Live Stream"
      to="/live-streaming"
    ></v-list-item>

    <v-list-item
      prepend-icon="mdi-calendar"
      title="Event Calendar"
      to="/event-calendar"
    ></v-list-item>

    <v-list-item
      prepend-icon="mdi-archive"
      title="Sermons Archive"
      to="/sermons-archive"
    ></v-list-item>
  </v-list>
</v-navigation-drawer>

<v-main> -->
