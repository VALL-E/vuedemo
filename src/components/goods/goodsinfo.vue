<template>
    <div class="tmpPadding">
      <!-- 轮播图 -->
      <div class="slider">
        <slider :imgs="imgs"></slider>
      </div>
      <!-- 商品购买区 -->
      <div class="buy">
        <h5 v-text="info.title"></h5>
        <p class="line"></p>
        <ul>
          <li>市场价<s>￥{{info.market_price}}</s> 销售价<span>￥{{info.sell_price}}</span></li>
          <li class="ballbox">购买数量：
            <!--<inputnumber v-on:countdata="getcount"></inputnumber>-->
            <!--<div v-if="isShow" class="ball"></div>-->
          </li>
          <li>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button @click="toshopcar" type="danger" size="small">加入购物车</mt-button>
          </li>
        </ul>
      </div>
      <!-- 商品参数 -->
      <div class="params">
        <h5>单品参数</h5>
        <p class="line"></p>
        <ul>
          <li>商品货号:{{info.goods_no}}</li>
          <li>库存情况:{{info.stock_quantity}}</li>
          <li>上架时间:{{info.add_time | format('l')}}</li>
        </ul>
      </div>
      <!-- 图文详情 -->
      <router-link v-bind="{to:'/goods/goodsdesc/' + id }">
        <mt-button type="primary" size="large">图文详情</mt-button>
      </router-link>
      <!-- 商品评论 -->
      <router-link v-bind="{to:'/goods/goodscomment/' + id}">
        <mt-button type="danger" size="large">商品评论</mt-button>
      </router-link>
    </div>
</template>

<script type="es6">
  import common from '../kits/common';
  import slider from '../subcom/slider.vue';
    export default {
      data(){
        return{
          id:0,
          imgs:[],
          info:{},
          isshow:true
        }
      },
      methods:{
          getimgs(){
            var url = common.apiclass + '/api/getthumimages/' + this.id;
            this.$axios.get(url).then(res=>{
                var data = res.data;
                if(data.status != 0){
                  common.Toast('数据请求失败');
                  return;
                }
                this.imgs = data.message;
            });
          },
        getinfo(){
          var url = common.apiclass + '/api/goods/getinfo/' + this.id ;
          this.$axios.get(url).then(res=>{
            var data = res.data;
            if(data.status != 0){
              common.Toast('数据请求失败');
              return;
            }
            this.info = data.message[0];
            console.log(this.info);
          });
        },
        toshopcar(){

        }
      },
      created(){
        this.id = this.$route.params.id;
        this.getimgs();
        this.getinfo();

      },
      components:{
        slider
      }
    }

</script>


<style scoped lang="less">
.slider{
  border: 1px solid rgba(0,0,0,.5);
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  margin: 5px;
  -webkit-box-shadow: 0 0 5px rgba(0,0,0,.4);
  -moz-box-shadow: 0 0 5px rgba(0,0,0,.4);
  box-shadow: 0 0 5px rgba(0,0,0,.4);
}
.buy,.params{
  padding: 5px;
  margin: 5px;
  border: 1px solid #ccc;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  >.line{
    height: 1px;
    border-bottom: 1px solid #ccc;
  }
  >h5{
    font-size: 18px;
    padding: 5px;
    color: deepskyblue;
  }
  >ul{
    padding-left: 5px;
    font-size: 16px;
    >li{
      line-height: 40px;
      >span{
        color: #f00;
      }
    }
  }
}
  a{
    >button{
      margin: 10px 0;
    }
  }

</style>
