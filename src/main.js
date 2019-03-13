import Vue from "vue";
import VueRouter from "vue-router";

import App from "./App.vue";

import Lyndon from "./components/lyndon/Lyndon";


Vue.use(VueRouter);

const routes = [
  { path: "/", component: Lyndon }
 
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
