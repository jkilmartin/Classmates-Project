<template>
  <div id="app">
    <MyHeader/>
    <router-view></router-view>
   
  </div>
</template>

<script>
import MyHeader from "./components/Header.vue";

export default {
  name: "App",
  components: {
    MyHeader,

  }
};
</script>

<style scoped>
</style>
