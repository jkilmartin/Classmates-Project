<template>
  <nav>
    <ul>
    <li><router-link v-bind:to="'/'">Home</router-link></li>
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

.router-link-active {
  font-weight: bold;
}

ul li {
  list-style: none;
}

</style>
