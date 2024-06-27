<script setup lang="ts"></script>

<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer expand-on-hover rail>
        <v-list>
          <v-list-item
            prepend-avatar="https://static.vecteezy.com/system/resources/thumbnails/000/379/447/small/2720.jpg"
            subtitle=""
            title="Adonai Ministries"
          ></v-list-item>
        </v-list>

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

      <v-main style="height: 250px">
        <RouterView />
      </v-main>
    </v-layout>
  </v-card>
</template>

<style scoped></style>
