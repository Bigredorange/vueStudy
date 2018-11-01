<template>
    <div class="bg-404">
        <!-- <p class="padding-tp-6p">Oooops! Page not found!</p> -->
        <p class="padding-tp-6p">访问页面不存在，也可能还在开发中！</p>
        <!-- <img class="margin-tp-bt-20" src="../../assets/common/404Icon.png" /> -->
        <p class="font-404">404</p>
        <!-- <p class="margin-bt-20">
            You may have mistyped the URL. Or the page has been removed.
        </p> -->
        <!-- <router-link class="txt-blue" to="/main/home">
            RETURN TO HOMEPAGE
        </router-link> -->
        <router-link class="txt-blue" to="/main/home">
            返回首页
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
      height: 1200px;
      /* background: #fee382; */
      background-image: -webkit-radial-gradient(45% center, circle, rgba(39, 52, 99,0.9) 40%, rgba(139,66,86,0.9));
    }
    .txt-blue {
      color: #28abe3;
    }
    .padding-tp-6p {
      padding-top: 6%;
    }
    .font-404 {
      font-size: 300px;
    }
</style>
