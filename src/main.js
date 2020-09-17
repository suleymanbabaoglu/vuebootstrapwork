import Vue from "vue";
import App from "./App.vue";
import Axios from "axios";
import VueAxios from "vue-axios";
import { store } from "./store/store";

import "jquery/src/jquery";
import "jquery-ui/ui/jquery-1-7";
import { router } from "./router";

import "../public/assets/bower_components/bootstrap/dist/js/bootstrap.min";
import "../public/assets/dist/js/adminlte.min";

import "../public/assets/bower_components/raphael/raphael.min";
import "../public/assets/bower_components/morris.js/morris.min";
import "../public/assets/bower_components/jquery-sparkline/dist/jquery.sparkline.min";
import "../public/assets/plugins/jvectormap/jquery-jvectormap-1.2.2.min";
import "../public/assets/plugins/jvectormap/jquery-jvectormap-world-mill-en";
import "../public/assets/bower_components/jquery-knob/dist/jquery.knob.min";
import "../public/assets/bower_components/jquery-slimscroll/jquery.slimscroll.min";

Vue.use(VueAxios, Axios);

router.beforeEach((to, from, next) => {
  store.dispatch("isSignedIn");
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters["getAuth"]) {
      next({
        path: "/login",
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
