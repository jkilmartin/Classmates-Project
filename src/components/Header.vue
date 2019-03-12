<template>
  <nav>
    <ul>
    <li><router-link v-bind:to="'/'"></router-link></li>
    </ul>
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

