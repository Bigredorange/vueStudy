<template>
    <div class="sticky">
        <div class="web-wraper">
            <div class="web-wraper-text">
                <个人站点>
            </div>
        </div>
        <input type="checkbox" class="menustate">
        <div class="globalnav">
            <div class="headCon">
                <ul class="head-mobile">
                    <li class="menuicon">
                        <label class="menuicon-label" for="menustate">
                            <span class="menuicon-bread menuicon-bred-top">
                                <span class="menuicon-bread-crust menuicon-bread-crust-top"></span>
                            </span>

                            <span class="menuicon-bread menuicon-bred-bottom">
                                <span class="menuicon-bread-crust menuicon-bread-crust-bottom"></span>
                            </span>
                        </label>
                        <a href="#menustate" class="menuanchor">
                            <span class="menuanchor-label">打开菜单</span>
                        </a>
                        <a>
                            <span>关闭菜单</span>
                        </a>
                    </li>
                    <li></li>
                    <li></li>
                </ul>
                <div class="headBar headContent ">
                    <ul>
                        <li>
                            <a href="/main/home">
                                <span>首页</span>
                            </a>
                        </li>
                        <li>
                            <a href="/main/base">
                                <span>基础概念</span>
                            </a>
                        </li>
                        <li>
                            <a href="/main/frame">
                                <span>框架应用</span>
                            </a>
                        </li>
                        <li>
                            <a href="/main/open">
                                <span>开源站点</span>
                            </a>
                        </li>
                        <li>
                            <a href="/main/future">
                                <span>前沿技术</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/Bigredorange/vueStudy" target="_blank">
                                <span>fork me</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </div>

</template>
<script>
    export default {

    }
</script >
<style lang="scss" scoped>
    .menustate {
      display: none;
    }
    .web-wraper {
      position: absolute;
      background: #444;
      top: -40px;
      width: 100%;
      right: 0;
      height: 40px;
      z-index: 9999;
      line-height: 1;
      & .web-wraper-text {
        color: #a8a8aa;
        font-size: 12px;
        font-family: "SF Pro SC", "HanHei SC", "SF Pro Text", "Myriad Set Pro",
          "PingFang SC", "Helvetica Neue", Helvetica, Arial, sans-serif;
        display: block;
        overflow: hidden;
        text-decoration: none;
        text-overflow: ellipsis;
        text-align: right;
        max-width: 976px;
        margin: 0 auto;
        line-height: 40px;
      }
    }
    @media only screen and (max-width: 767px) {
      .web-wraper {
        top: -44px;
        height: 44px;
        & .web-wraper-text {
          line-height: 44px;
          margin-left: auto;
          width: auto;
          padding: 0 16px;
          position: relative;
          left: 0;
        }
      }
    }
    @media only screen and (max-width: 1000px) {
      .web-wraper {
        min-width: 20%;
        & .web-wraper-text {
          margin-left: auto;
          width: auto;
          padding: 0 22px;
          position: relative;
          left: 0;
        }
      }
    }
    .globalnav {
      //   position: -webkit-sticky;
      //   position: sticky;
      //   top: 0px;
      right: 0;
      left: 0;
      z-index: 9999;
      display: block;
      margin: 0;
      width: 100%;
      height: 48px;
      max-height: 44px;
      min-width: 1024px;
      font-size: 17px;
      user-select: none;
      //   background: rgba(0, 0, 0, 0.8);
      background: #333;
      & .headCon {
        margin: 0 auto;
        // max-width: 980px;
        max-width: 1024px;
        padding: 0 22px;
        position: relative;
        z-index: 2;
      }
      & .menuicon-label {
        display: block;
        position: absolute;
        z-index: 3;
        top: 0;
        width: 48px;
        height: 48px;
        cursor: pointer;
        -webkit-transition: opacity 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
        transition: opacity 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
        -webkit-tap-highlight-color: transparent;
        &:hover {
          opacity: 0.65;
        }
      }
      & .menuicon-bread-top {
        -webkit-transition: -webkit-transform 0.1806s
          cubic-bezier(0.04, 0.04, 0.12, 0.96);
        transition: -webkit-transform 0.1806s cubic-bezier(0.04, 0.04, 0.12, 0.96);
        transition: transform 0.1806s cubic-bezier(0.04, 0.04, 0.12, 0.96);
        transition: transform 0.1806s cubic-bezier(0.04, 0.04, 0.12, 0.96),
          -webkit-transform 0.1806s cubic-bezier(0.04, 0.04, 0.12, 0.96);
        -webkit-transform: none;
        transform: none;
        z-index: 4;
      }
      & .menuicon-bread {
        position: absolute;
        z-index: 3;
        top: 9px;
        left: 9px;
        width: 30px;
        height: 30px;
        -webkit-transition: opacity 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
        transition: opacity 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      }
      & .menuicon-bread-crust-top {
        top: 14px;
        -webkit-transform: translateY(-3px);
        transform: translateY(-3px);
        -webkit-transition: -webkit-transform 0.1596s
          cubic-bezier(0.52, 0.16, 0.52, 0.84) 0.1008s;
        transition: -webkit-transform 0.1596s cubic-bezier(0.52, 0.16, 0.52, 0.84)
          0.1008s;
        transition: transform 0.1596s cubic-bezier(0.52, 0.16, 0.52, 0.84) 0.1008s;
        transition: transform 0.1596s cubic-bezier(0.52, 0.16, 0.52, 0.84) 0.1008s,
          -webkit-transform 0.1596s cubic-bezier(0.52, 0.16, 0.52, 0.84) 0.1008s;
      }
      & .menuicon-bread-crust {
        display: block;
        width: 17px;
        height: 1px;
        background: #fff;
        position: absolute;
        left: 7px;
        z-index: 1;
      }
      & .menuicon-bread-bottom {
        -webkit-transition: -webkit-transform 0.1806s
          cubic-bezier(0.04, 0.04, 0.12, 0.96);
        transition: -webkit-transform 0.1806s cubic-bezier(0.04, 0.04, 0.12, 0.96);
        transition: transform 0.1806s cubic-bezier(0.04, 0.04, 0.12, 0.96);
        transition: transform 0.1806s cubic-bezier(0.04, 0.04, 0.12, 0.96),
          -webkit-transform 0.1806s cubic-bezier(0.04, 0.04, 0.12, 0.96);
        -webkit-transform: none;
        transform: none;
      }
      & .menuicon-bread-crust-bottom {
        bottom: 14px;
        -webkit-transform: translateY(3px);
        transform: translateY(3px);
        -webkit-transition: -webkit-transform 0.1596s
          cubic-bezier(0.52, 0.16, 0.52, 0.84) 0.1008s;
        transition: -webkit-transform 0.1596s cubic-bezier(0.52, 0.16, 0.52, 0.84)
          0.1008s;
        transition: transform 0.1596s cubic-bezier(0.52, 0.16, 0.52, 0.84) 0.1008s;
        transition: transform 0.1596s cubic-bezier(0.52, 0.16, 0.52, 0.84) 0.1008s,
          -webkit-transform 0.1596s cubic-bezier(0.52, 0.16, 0.52, 0.84) 0.1008s;
      }
      & .menuanchor {
        left: 0;
        color: #fff;
        position: absolute;
        top: 0;
        width: 1px;
        height: 1px;
        z-index: 10;
      }
      & .menuanchor-label {
        position: absolute;
        clip: rect(1px 1px 1px 1px);
        clip: rect(1px, 1px, 1px, 1px);
        -webkit-clip-path: inset(0px 0px 99.9% 99.9%);
        clip-path: inset(0px 0px 99.9% 99.9%);
        overflow: hidden;
        height: 1px;
        width: 1px;
        padding: 0;
        border: 0;
      }
    }

    .headContent {
      //   max-width: 1000px;
      //   width: auto;
      //   margin: 0 auto;
      ul {
        cursor: default;
        margin: 0 -10px;
        width: auto;
        height: 44px;
        display: flex;
        justify-content: space-between;
        -webkit-box-pack: justify;
      }
      li {
        display: inline-block;
        width: 70px;
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
    @media only screen and(max-width: 767px) {
      .headContent {
        display: none;
      }
    }
    .head-mobile {
      display: none;
      position: absolute;
      z-index: 5;
      top: 0;
      left: 0;
      width: 100%;
      height: 48px;
      overflow: hidden;
      background: #333;
      & .menuicon {
        left: 0;
        position: absolute;
        z-index: 2;
        top: 0;
        width: 48px;
        border-bottom: none;
      }
    }
    @media only screen and(max-width: 767px) {
      .head-mobile {
        display: block;
      }
    }
    @media only screen and(min-width: 767px) {
      .head-mobile {
        display: none;
      }
    }
    @media only screen and(max-width: 1044px) {
      .globalnav {
        min-width: 320px;
      }
    }
</style>
