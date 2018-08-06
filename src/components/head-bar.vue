<template>
    <div class="sticky headBar">
        <div class="headContent">
            <ul>
                <li>
                    <span>首页</span>
                </li>
                <li>
                    <span>基础概念</span>
                </li>
                <li>
                    <span>框架应用</span>
                </li>
                <li>
                    <span>开源站点</span>
                </li>
                <li>
                    <span>前沿技术</span>
                </li>
                <li>
                    <a href="https://github.com/Bigredorange" target="_blank">
                        <span>fork me</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {

    }
</script >
<style lang="scss" scoped>
    .sticky {
      position: -webkit-sticky;
      position: sticky;
      top: 0px;
    }
    .headBar {
      background: rgba(0, 0, 0, 0.8);
      height: 44px;
      min-width: 1024px;
      font-size: 17px;
    }
    .headContent {
      max-width: 980px;
      margin: 0 auto;
      ul {
        display: flex;
        justify-content: space-between;
      }
      li {
        display: inline-block;
        width: 100%;
        position: relative;
        color: #fff;
        height: 44px;
        padding: 0 10px;
        font-size: 14px;
        span {
          cursor: pointer;
          position: absolute;
          top: 25%;
        }
        span:hover {
          opacity: 0.65;
        }
      }
    }
</style>
