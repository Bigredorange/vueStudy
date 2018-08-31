<template>
    <div class="bg-footer txt-center">
        <router-link to="/" href="http://www.miitbeian.gov.cn" target="_blank">
            粤ICP备18100312号
        </router-link>
    </div>
</template>
<script>
    export default {
        name: 'footerBar'
    }
</script>
<style lang="scss" scoped>
    .bg-footer {
      background-color: #f2f2f2;
      //   position: absolute;
      color: #999;
      //   bottom: 0;
      width: 100%;
      padding: 10px 0;
      a:hover {
        text-decoration: underline !important;
      }
    }
</style>
