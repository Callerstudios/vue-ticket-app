import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../view/HomeView.vue";
import Login from "@/view/Login.vue";
import SignUp from "@/view/SignUp.vue";
import Dashboard from "@/view/Dashboard.vue";
import Tickets from "@/view/Tickets.vue";
import { getSession } from "@/utils/helper";

const router = createRouter({
  history: createWebHistory(""),
  routes: [{
    path: "/",
    name: "home",
    component: () => HomeView,
  }, {
    path: "/login",
    name: "login",
    component: () => Login,
  },{
    path: "/signup",
    name: "signup",
    component: () => SignUp,
  }, {
    path: "/dashboard",
    name: "dashboard",
    component: () => Dashboard,
    meta: { requiresAuth: true },
  }, {
    path: "/tickets",
    name: "tickets",
    component: () => Tickets,
    meta: { requiresAuth: true },
  }],
});
router.beforeEach((to, from, next) => {
  const session = getSession();

  if (to.meta.requiresAuth && !session) {
    next("/login");
  } else if ((to.name === "login" || to.name === "signup") && session) {
    next("/dashboard");
  } else {
    next();
  }
});



export default router;
