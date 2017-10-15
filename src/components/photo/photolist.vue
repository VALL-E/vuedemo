<template>
  <div class="tmpPadding">
    <!-- 分类列表 -->
    <div id="catelist">
      <ul v-bind="{style:'width:' + ulWidth + 'px'}">
        <li @click="getImg(0)">全部图片</li>
        <li @click="getImg(item.id)" v-for="(item,index) in catelist" :key="index">{{item.title}}</li>
      </ul>
    </div>
    <!-- 图片列表 -->
    <div id="photolist">

      <ul>
        <li v-for="(item,index) in imgList" :key="index">
          <img v-lazy="item.img_url">
          <div>
            <h3>{{item.title}}</h3>
            <p v-html="item.zhaiyao"></p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="es6">
  import common from '../kits/common.js';
  import {Toast} from 'mint-ui';

  export default {
    data() {
      return {
        catelist: [],
        ulWidth: 500,
        imgList: []
      }
    },
    methods: {
      getCatelist() {
        // 图片分类列表 api
        var url = common.apiclass + '/api/getimgcategory';
        this.$axios.get(url).then(res => {
          var data = res.data;
          if (data.status != 0) {
            Toast('数据加载失败');
            return;
          } else {
            this.catelist = data.message;
            var ul = 60; // 每个 li 的宽度
            var count = data.message.length + 1;
            this.ulWidth = count * ul;
          }

        });
      },
      getImg(cateId) {
        var cateId = cateId || 0;
        var url = common.apiclass + '/api/getimages/' + cateId;
        this.$axios.get(url).then(res => {
          var data = res.data;
          if (data.status != 0) {
            Toast('数据请求失败');
            return;
          }
          this.imgList = data.message;
        });
      }
    },
    created() {
      this.getCatelist();
      this.getImg(0);
    }
  }

</script>


<style scoped lang="less">
  #catelist {
    max-width: 500px;
    overflow: auto;
    > ul {
      > li {
        padding-left: 6px;
        font-size: 12px;
        color: deepskyblue;
        display: inline-block;
      }
    }
  }
  #photolist{
    >ul{
      >li{
        position: relative;
        margin-bottom: 10px;
        >div{
          position: absolute;
          bottom: 5px;
          left: 0;
          background-color: rgba(0,0,0,.2);
          >h3{
            color: skyblue;
            font-size: 16px;
          }
          >p{
            color: #fff;
            font-size: 12px;
          }
        }
        >img{
          width: 100%;
          height: 300px;
        }

      }
    }

  }
  image[lazy=loading] {
    width: 40px;
    height: 300px;
    margin: auto;
  }

</style>
