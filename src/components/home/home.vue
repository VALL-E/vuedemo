<template>
  <div class="tmpPadding">
    <!--<mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in list" :key="index">
        <img :src="item.images.large">
      </mt-swipe-item>
    </mt-swipe>-->
    <slider :imgs="list"></slider>
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
  import common from '../kits/common.js';
  // 轮播图公共子组件
  import slider from '../subcom/slider.vue';
  export default {
    data() {
      return {
        list: []
      }
    },
    methods:{
      getImgs(){
        var url = common.apidomain +  '/v2/movie/in_theaters';
        this.$http.jsonp(url).then(res=>{
            var data = res.body;
            this.list = data.subjects;
            // 包装豆瓣 api 的数据和 apiclass中的数据结构一致，方便封装轮播子组件
            this.list = this.list.map(function(item){
            var obj = {};
            obj.img = item.images.large;
            return obj;
          });
          //console.log(this.list);
        });
      }
    },
    created(){
      this.getImgs();
    },
    components:{
      slider
    }
  }

</script>


<style scoped lang="less">

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
