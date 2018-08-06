
<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <div v-for="item in [1,2,3,4]">
      <anchored-heading :level="item">
        cool guy
      </anchored-heading>
    </div> -->

    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>
<style>
  #app {
    /* font-family: "Avenir", Helvetica, Arial, sans-serif; */
    font-family: "SF Pro SC", "SF Pro Text", "SF Pro Icons", "PingFang SC",
      "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
