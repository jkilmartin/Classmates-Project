<template>
  <nav>
    <ul>
      <nav>
        <router-link v-bind:to="'/'">Lyndon</router-link>
      
      </nav>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "MyHeader"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.router-link-exact-active {
  font-weight: bold;
}

ul li {
  list-style: none;
}
</style>
