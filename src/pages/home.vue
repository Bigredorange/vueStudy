<template>
    <div class="wraper">
        <!-- <div class="sectionWraper">
            <div class="section-item-wraper">
                <div class="section-item" v-for="(item,index) in [1,2,3]" :key="index" style="height:580px;background: #fafafa;border-bottom: 12px solid #fff;text-align:center;">
                    <div class="section-title">cool</div>
                    <div>img</div>
                </div>
            </div>
        </div> -->
    </div>
</template>
<script>
    export default {
    }
</script>
<style lang="scss" scoped>
    .wraper {
      //   max-width: 1200px;
      margin: 0 auto;
      &.sectionWraper .section-item-wraper {
        display: block;
        width: 100%;
        background: #fafafa;
        border-bottom: 12px solid #fff;
        text-align: center;
        &.section-item {
          overflow: hidden;
          height: 580px !important;
        }
      }
      background: url("../assets/common/bg.jpg");
      height: 1200px;
      background-size: 100%;
      background-repeat: no-repeat;
    }
</style>
