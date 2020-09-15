import Vue from "vue";
import App from "./App.vue";

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

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
