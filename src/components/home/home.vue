<template>
  <div class="tmpPadding">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in list" :key="index">
        <img :src="item.images.large">
      </mt-swipe-item>
    </mt-swipe>
    <!-- 导航栏 -->
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/movies/movieslist">
          <span class="mui-icon mui-icon-home"></span>
          <div class="mui-media-body">电影资讯</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/photo/photolist">
          <span class="mui-icon mui-icon-email"></span>
          <div class="mui-media-body">图片分享</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/goods/goodslist">
          <span class="mui-icon mui-icon-chatbubble"></span>
          <div class="mui-media-body">商品购买</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/feedback/feedback">
          <span class="mui-icon mui-icon-location"></span>
          <div class="mui-media-body">留言反馈</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/video/videolist">
          <span class="mui-icon mui-icon-search"></span>
          <div class="mui-media-body">视频专区</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/callme/callme">
          <span class="mui-icon mui-icon-phone"></span>
          <div class="mui-media-body">联系我们</div></router-link></li>
      </ul>
    </div>
  </div>
</template>

<script type="es6">
  export default {
    data() {
      return {
        list: []
      }
    },
    methods:{
      getImgs(){
        var url = 'https://api.douban.com/v2/movie/in_theaters';
        this.$http.jsonp(url).then(res=>{
            var data = res.body;
            this.list = data.subjects;
          //console.log(data);
        });
      }
    },
    created(){
      this.getImgs();
    }
  }

</script>


<style scoped lang="less">
  .mint-swipe {
    height: 250px;
    .mint-swipe-item {
      width: 100%;
      max-height: 250px;
      background-color: red;
      img{
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
  .mui-content{
    background-color: #fff;
    >.mui-grid-view.mui-grid-9{
      background-color: #fff;
      border:none;
      >.mui-table-view-cell{
        border:none;
      }
      .mui-media .mui-icon{
        font-size: 10px;
        height: 66px;
        width: 66px;
      }
    }
  }
  .mui-icon-home:before,
  .mui-icon-email:before,
  .mui-icon-chatbubble:before,
  .mui-icon-location:before,
  .mui-icon-search:before,
  .mui-icon-phone:before{
    content: '';
    display: inline-block;
    width: 66px;
    height: 66px;
    background-repeat: round;
  }
  .mui-icon-home:before{
    background: url(../../../static/images/1.png) center /cover;
  }
  .mui-icon-email{
    background: url(../../../static/images/2.png) center /cover;
  }
  .mui-icon-chatbubble{
    background: url(../../../static/images/3.png) center /cover;
  }
  .mui-icon-location{
    background: url(../../../static/images/4.png) center /cover;
  }
  .mui-icon-search{
    background: url(../../../static/images/5.png) center /cover;
  }
  .mui-icon-phone{
    background: url(../../../static/images/6.png) center /cover;
  }
</style>
