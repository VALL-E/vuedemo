<template>
  <div id="app">
    <mt-header fixed title="vue练习项目"></mt-header>
    <router-view/>
    <!-- mui 九宫格样式-->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/user">
        <span class="mui-icon mui-icon-email"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopCar">
        <span class="mui-icon mui-icon-contact"><span class="mui-badge">9</span></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/setting">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">设置</span>
      </router-link>
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
