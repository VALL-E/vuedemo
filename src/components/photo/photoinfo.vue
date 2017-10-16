<template>
  <div class="tmpPadding">
    <!-- 概述 -->
    <div class="desc">
      <h3>{{info.title}}</h3>
      <div>
        <span>发表时间：{{info.add_time | format('L')}}</span>
        <span>点击数：{{info.click}}</span>
      </div>
      <p></p>
    </div>
    <!-- 缩略图 -->
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li v-for="(item,index) in images" :key="index"  class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <img :src="item.src" class="preview-img" @click="$preview.open(index, images)">
        </li>
      </ul>
    </div>
    <!-- vue-images 组件 -->
    <!--<vueImages :imgs="images"
                :modalclose="modalclose"
                :keyinput="keyinput"
                :mousescroll="mousescroll"
                :showclosebutton="showclosebutton"
                :showcaption="showcaption"
                :imagecountseparator="imagecountseparator"
                :showimagecount="showimagecount"
                :showthumbnails="showthumbnails">
    </vueImages>-->

    <!-- 继承评论组件 -->
    <comment></comment>
  </div>
</template>

<script type="es6">
  import common from '../kits/common';
  import comment from '../subcom/commont.vue'
  // 导入 vueImages 图片预览组件
  import vueImages from 'vue-images';

  export default {
    data() {
      return {
        id: 0,
        info: {},
        images:[]
      }
    },
    methods: {
      getinfo() {
        var url = common.apiclass + '/api/getimageinfo/' + this.id;
        this.$axios.get(url).then(res => {
          var data = res.data;
          if (data.status != 0) {
            common.Toast('数据请求失败');
            return;
          }
          this.info = data.message[0];
        });
      },
      getImages(){
        var url = common.apiclass + '/api/getthumimages/' + this.id;
        this.$axios.get(url).then(res => {
          var data = res.data;
          if (data.status != 0) {
            common.Toast('数据请求失败');
            return;
          }
          // vue-preview 需要的数据格式包含 w和h 属性，需对返回数据进行包装
          data.message.forEach(function (item) {
            var img = new Image();
            img.src = item.src;
            item.w = img.width;
            item.h = img.height;
          });
          this.images = data.message;
        });
      }
    },
    created() {
      this.id = this.$route.params.id;
      this.getinfo();
      this.getImages();
    },
    components: {
      // 使用评论组件和vueImages组件
      comment,
      vueImages
    }
  }

</script>


<style scoped lang="less">
  .desc {
    > h3 {
      color: deepskyblue;
      font-size: 17px;
    }
    span {
      color: #666;
      font-size: 14px;
      padding-right: 5px;
    }
    p {
      width: 100%;
      height: 1px;
      border-bottom: 1px solid #000;
      margin: 10px 0;
    }
  }
  .mui-content{
    img{
      width: 100px;
      height: 100px;
    }
  }

</style>
