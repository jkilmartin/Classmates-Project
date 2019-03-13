import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";

import Ashleigh from "./components/ashleigh/Ashleigh";

Vue.use(VueRouter);

const routes = [
  { path: "/ashleigh", component: Ashleigh }
];

const router = new VueRouter({
  routes,
  mode: "history"
})

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
