<template>
    <div class="tmpPadding">
        <h2>电影名称：<span>{{info.original_title}}</span></h2>
        <div class="score">
          <span>最高分: <span>{{info.rating.max}}</span></span>
          <span>星星数: <span>{{info.rating.stars}}</span></span>
          <span>平均分: <span>{{info.rating.average}}</span></span>
        </div>
        <div class="summary">
          简介：<br>
          <p>
            {{info.summary}}
          </p>
        </div>
    </div>
</template>

<script type="es6">
  import common from '../kits/common.js';
    export default {
      data(){
        return {
          id: 0,
          info: {}
        }
      },
      methods:{
        getMoviesInfo(){
          var url = common.apidomain + '/v2/movie/subject/' + this.id;
          this.$http.jsonp(url).then(res=>{
              var data = res.body;
              this.info = data;
            console.log(data);
          });
        }
      },
      created(){
        this.id = this.$route.params.id;
        this.getMoviesInfo()
      }
    }

</script>


<style scoped lang="less">
  .tmpPadding{
    >h2{
      color: #888;
      >span{
        font-size: 1.5rem;
        font-weight:900;
        color: red;
      }
    }
    div{
      margin: 0.75rem 0;
    }
    .score{
      >span{
        color: #888;
        >span{
          color: #000;
        }
      }
    }
    .summary{
      >p{
        text-indent: 2em;
        color: skyblue;
      }
    }
  }

</style>
