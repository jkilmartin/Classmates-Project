import Vue from "vue";
import VueRouter from "vue-router";
import Jeremy from "./components/jeremy/Jeremy.vue";
import App from "./App.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/jeremy", component: Jeremy },
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
