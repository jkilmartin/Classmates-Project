import Vue from "vue";
import VueRouter from "vue-router";

import App from "./App.vue";

import Jeremy from "./components/jeremy/Jeremy.vue";
import Lyndon from "./components/lyndon/Lyndon";
import Ashleigh from "./components/ashleigh/Ashleigh";

const routes = [
  { path: "/jeremy", component: Jeremy },
  { path: "/ashleigh", component: Ashleigh },
  { path: "/lyndon", component: Lyndon }
];

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history"
})

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
