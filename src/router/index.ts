import { createRouter, createWebHistory } from "vue-router";
import DaysView from "../views/DaysView.vue";
import DayEditView from "../views/DayEditView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      redirect: { name: "days" },
    },
    {
      path: "/days",
      name: "days",
      component: DaysView,
    },
    {
      name: "day-edit",
      path: "/days/:id",
      component: DayEditView,
    },
  ],
});

export default router;
