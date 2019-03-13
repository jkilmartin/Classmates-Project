<template>
  <nav>
    <ul>
    <li><router-link v-bind:to="'/'">Home</router-link></li>
    <li><router-link v-bind:to="'/'">Jeremy</router-link></li>
    </li><router-link v-bind:to="'/ashleigh'">Ashleigh</router-link></li>
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

