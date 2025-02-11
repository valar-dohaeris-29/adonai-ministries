<script setup lang="ts">
type NavItem = {
  icon: string;
  title: string;
  to: string;
};
const navItems: NavItem[] = [
  {
    icon: "mdi-home",
    title: "Home",
    to: "/",
  },
  {
    icon: "mdi-video",
    title: "Live Stream",
    to: "/live-streaming",
  },
  {
    icon: "mdi-calendar",
    title: "Event Calendar",
    to: "/event-calendar",
  },
  {
    icon: "mdi-archive",
    title: "Sermons Archive",
    to: "/sermons-archive",
  },
];
</script>

<template>
  <v-navigation-drawer expand-on-hover rail :width="400" class="hide-on-small">
    <v-list>
      <v-list-item
        prepend-avatar="https://static.vecteezy.com/system/resources/thumbnails/000/379/447/small/2720.jpg"
        subtitle="admin@adonaiministries.co.za"
        title="Adonai Ministries"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        v-for="(i, idx) in navItems"
        :key="idx"
        :prepend-icon="i.icon"
        :title="i.title"
        :to="i.to"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>

  <div class="nav-menu">
    <!-- <div class="nav-menu hide-on-large"> -->
    <button class="menu-button" id="menu-activator">
      <b>MENU.</b>
      <div></div>
    </button>
    <v-menu activator="#menu-activator">
      <v-list>
        <v-list-item
          v-for="(i, idx) in navItems"
          :value="idx"
          :key="idx"
          :prepend-icon="i.icon"
          :to="i.to"
        >
          <v-list-item-title>{{ i.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<style scoped style="scss">
/* .nav-menu ::v-deep(.v-list) {
  background-color: #050315;
  color: #d1d1d1;
} */

@media (max-width: 1279px) {
  .hide-on-small {
    display: none;
  }
}

@media (min-width: 1280px) {
  .hide-on-large {
    display: none;
  }
}

.nav-menu {
  .menu-button {
    width: 150px;
    display: flex;
    height: 52px;
    background: #050315;
    color: #fbfbfe;
    position: absolute;
    align-items: center;
    border: solid 1px #fbfbfe;
    letter-spacing: 0.3em;
    padding-left: 25px;
    font-size: 12pt;
  }

  .menu-button:hover > div {
    margin-left: 76px;
    transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .menu-button:hover > b {
    animation: letterroll cubic-bezier(0.4, 0, 0.2, 1) 0.5s;
  }

  b {
    animation: backroll cubic-bezier(0.4, 0, 0.2, 1) 0.5s;
  }

  div {
    width: 47px;
    height: 1px;
    background: #1dda65;
    margin-left: 93px;
    position: absolute;
    transition: 0.5s;
  }

  @keyframes letterroll {
    50% {
      transform: translateY(-75%);
      opacity: 0;
    }
    50.1% {
      transform: translateY(75%);
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }

  @keyframes backroll {
    50% {
      transform: translateY(75%);
    }
    50.1% {
      transform: translateY(-75%);
      opacity: 0;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }
}
.v-list-item--nav ::v-deep(.v-list-item-title) {
  font-size: 1rem;
}

nav.v-navigation-drawer {
  background-color: #050315;
  color: #d1d1d1;
}
</style>
