import Vue from "vue";
import VueRouter from "vue-router";
import HomeLayout from "./layouts/_Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/",
    component: HomeLayout,
    meta: { requiresAuth: true },
    children: [{ path: "/", component: Home }]
  },
  { path: "/login", component: Login, meta: { requiresAuth: false } },
  { path: "/register", component: Register, meta: { requiresAuth: false } },
  { path: "*", component: NotFound, meta: { requiresAuth: false } }
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
