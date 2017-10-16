<template>
    <div class="tmpPadding">
      <div class="slider">
        <slider :imgs="imgs"></slider>
      </div>
    </div>
</template>

<script type="es6">
  import common from '../kits/common';
  import slider from '../subcom/slider.vue';
    export default {
      data(){
        return{
          id:0,
          imgs:[]
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
          }
      },
      created(){
        this.id = this.$route.params.id;
        this.getimgs();

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

</style>
