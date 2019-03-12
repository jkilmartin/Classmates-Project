import Vue from "vue";
import VueRouter from "vue-router";

import App from "./App.vue";
import Home from "./components/Home.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/", component: T }
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
