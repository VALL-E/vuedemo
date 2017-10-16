<template>
  <div class="tmpPadding">

    <div class="desc">
      <h3 v-text="desc.title"></h3>
      <p class="line"></p>
      <div v-html="desc.content"></div>
    </div>

  </div>
</template>

<script type="es6">
  import common from '../kits/common';
  export default {
    data(){
      return {
        id:0,
        desc:{}
      }
    },
    methods:{
      getdesc(){
        var url = common.apiclass + '/api/goods/getdesc/' + this.id ;
        this.$http.get(url).then(res=>{
          var data = res.body;
          if(data.status != 0){
            common.Toast('数据请求失败');
            return;
          }
          this.desc = data.message[0];
        });
      }
    },
    created(){
      this.id = this.$route.params.id;
      this.getdesc();
    }
  }

</script>


<style scoped>
  .desc{
    padding: 6px;
  }
  .line{
    height: 1px;
    border: 1px solid #ccc;
  }
  img{
    width:100%;
  }

</style>
