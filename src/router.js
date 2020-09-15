import Vue from "vue";
import VueRouter from "vue-router";
import HomeLayout from "./layouts/_Layout";
import Home from "./pages/Home";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/",
    component: HomeLayout,
    children: [{ path: "/", component: Home }]
  }
];

export const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});
