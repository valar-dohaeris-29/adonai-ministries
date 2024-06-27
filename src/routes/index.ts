import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("../views/home.vue");
const LiveStreaming = () => import("../views/live-streaming.vue");
const EventCalendar = () => import("../views/event-calendar.vue");
const SermonsArchive = () => import("../views/sermons-archive.vue");

const routes = [
  { path: "/", component: Home },
  { path: "/live-streaming", component: LiveStreaming },
  { path: "/event-calendar", component: EventCalendar },
  { path: "/sermons-archive", component: SermonsArchive },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
