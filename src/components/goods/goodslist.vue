<template>
    <div class="tmpPadding">
      <div class="mui-content" style="background-color:#fff">
        <ul class="mui-table-view mui-grid-view">
          <li v-for="(item,index) in list" :key="index" class="mui-table-view-cell mui-media mui-col-xs-6">
            <router-link v-bind="{to:'/goods/goodsinfo/' + item.id}">
              <img class="mui-media-object" :src="item.img_url">
              <div class="mui-media-body">{{item.title}}</div>
              <div class="desc">
                <p>
                  <span>￥{{item.sell_price}}</span>
                  <s>￥{{item.market_price}}</s>
                </p>
                <p class="left">热卖中</p>
                <p class="right">库存{{item.stock_quantity}}件</p>
              </div>
            </router-link>
          </li>

        </ul>
      </div>
    </div>
</template>

<script type="es6">
  import common from '../kits/common';
    export default {
      data(){
        return {
          list:[],
          pageIndex:1
        }
      },
      methods:{
        getlist(){
          var url = common.apiclass + '/api/getgoods?pageindex=' + this.pageIndex;
          this.$axios.get(url).then(res=>{
              var data = res.data;
              if(data.status != 0){
                common.Toast('数据加载失败');
                return;
              }
              this.list = data.message;
            // console.log(this.list);

          });
        }
      },
      created(){
      this.getlist();
      }
    }

</script>

<style scoped lang="less">
.mui-content{
  .mui-table-view{
    padding: 0;
    .mui-table-view-cell{
      border: 1px solid #ccc;
      padding: 0;
      margin-right: 0;
      box-shadow: 0 0 4px #000;
      a{
        padding: 0;
        margin: 0;
      }
      .mui-media-object{
        width: 98%;
      }
      .mui-media-body{
        color: deepskyblue;
      }
      .desc{
        font-size: 14px;
        height: 50px;
        background-color: rgba(0,0,0,.1);
        position: relative;
        text-align: left;
        margin-top: 10px;
        span{
          margin:0 40px 0 15px;
          color: red;
        }
        .left{
          position: absolute;
          bottom: 5px;
          left: 15px;
        }
        .right{
          position: absolute;
          bottom: 5px;
          right: 15px;
        }
      }
    }
  }
}

</style>
