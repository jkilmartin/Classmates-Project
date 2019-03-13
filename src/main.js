import Vue from "vue";
import VueRouter from "vue-router";

import App from "./App.vue";

<<<<<<< HEAD
import Lyndon from "./components/lyndon/Lyndon";


Vue.use(VueRouter);

const routes = [
  { path: "/", component: Lyndon }
 
=======
Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
>>>>>>> b15426fa9bacd88a4be9a6d751513672f5012119
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
