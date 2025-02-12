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
  <v-navigation-drawer expand-on-hover rail :width="300" class="hide-on-small">
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

  <div class="nav-menu hide-on-large">
    <v-menu>
      <template v-slot:activator="{ props }">
        <button v-bind="props" class="menu-button">
          <b>MENU.</b>
          <div></div>
        </button>
      </template>
      <v-list density="compact" class="dropdown-list">
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

.v-menu .dropdown-list.v-list {
  background-color: #050315;
  color: #d1d1d1;
}

.nav-menu {
  .menu-button {
    width: 150px;
    display: flex;
    height: 52px;
    background: #050315;
    color: #fbfbfe;
    position: absolute;
    right: 30px;
    top: 20px;
    align-items: center;
    /* border: solid 1px #fbfbfe; */
    letter-spacing: 0.3em;
    padding-left: 25px;
    font-size: 12pt;
  }

  .menu-button:active > div {
    margin-left: 76px;
    transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .menu-button:active > b {
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
