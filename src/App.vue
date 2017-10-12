<template>
  <div id="app">
    <mt-header fixed title="vue练习项目"></mt-header>
    <router-view/>
    <!-- mui 九宫格样式-->
    <nav class="mui-bar mui-bar-tab">
      <a class="mui-tab-item mui-active" href="#tabbar">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-chat">
        <span class="mui-icon mui-icon-email"></span>
        <span class="mui-tab-label">消息</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-contact">
        <span class="mui-icon mui-icon-contact"><span class="mui-badge">9</span></span>
        <span class="mui-tab-label">购物车</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-map">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">设置</span>
      </a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped lang="less">
  .mint-header{
    height: 2rem;
    font-size: 1rem
  }
  .mui-bar-tab{
    .mui-tab-item{
      line-height: 70%;
    }
  }
</style>
