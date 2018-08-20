<template>
    <div class="bg-404">
        <p class="padding-tp-6p">Oooops! Page not found!</p>
        <img class="margin-tp-bt-20" src="../../assets/common/404Icon.png" />
        <p class="margin-bt-20">
            You may have mistyped the URL. Or the page has been removed.
        </p>
        <router-link class="txt-blue" to="/main/home">
            RETURN TO HOMEPAGE
        </router-link>
    </div>
</template>
<script>
    export default {

    }
</script>
<style>
    .bg-404 {
      /* background-color: #2c3035; */
      /* color: #fff; */
      text-align: center;
      /* height: 500px; */
    }
    .txt-blue {
      color: #28abe3;
    }
    .padding-tp-6p {
      padding-top: 6%;
    }
</style>
