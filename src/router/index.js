import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../view/HomeView.vue";
import Login from "@/view/Login.vue";
import SignUp from "@/view/SignUp.vue";
import Dashboard from "@/view/Dashboard.vue";
import Tickets from "@/view/Tickets.vue";

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
  }, {
    path: "/tickets",
    name: "tickets",
    component: () => Tickets,
  }],
});

export default router;
