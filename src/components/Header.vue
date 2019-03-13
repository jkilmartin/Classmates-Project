<template>
  <nav>
      <router-link v-bind:to="'/ashleigh'">Ashleigh</router-link>
  </nav>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>

.router-link-active {
  font-weight: bold;
}

</style>

