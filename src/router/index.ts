import { createRouter, createWebHistory } from "vue-router";
import JournalView from "../views/JournalView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: JournalView,
    },
  ],
});

export default router;
