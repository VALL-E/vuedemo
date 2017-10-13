<template>
  <div class="tmpPadding">
    <ul class="mui-table-view" v-for="(item,index) in list" :key="index">
      <li class="mui-table-view-cell mui-media">
        <router-link to="/news/newsinfo">
          <h3>
            {{item.title}}
            <span class="movie_year">({{item.year}})</span>
          </h3>
          <img class="mui-media-object mui-pull-left" :src="item.images.small">
          <div class="mui-media-body">
            <div class="directors">
              <span>导演:</span>
              <span v-for="(item2,index2) in item.directors" :key="index2">
                 {{item2.name}} /
              </span>
            </div>
            <div class="movie_actor">
              <span>主演:</span>
              <span v-for="(item3,index3) in item.casts" :key="index3">
                {{item3.name}} /
              </span>
            </div>
            <div class="genres">
              <span>类型:</span>
              <span v-for="(item4,index4) in item.genres" :key="index4">
                {{item4}} /
              </span>
            </div>
            <div class="average">
              <span>评分:</span>
              <span>{{item.rating.average}}</span>
            </div>
            <div class="collect_count">
              <span>收藏:</span>
              <span>{{item.collect_count}}</span>
            </div>
          </div>
        </router-link>
      </li>
    </ul>

  </div>
</template>

<script type="es6">
  export default {
    data() {
      return {
        list: [],
        date: new Date()
      }
    },
    methods: {
      getMoviesList() {
        var url = 'https://api.douban.com/v2/movie/in_theaters';
        this.$http.jsonp(url).then(res => {
          var data = res.body;
          this.list = data.subjects;
//          console.log(data);
        });
      }
    },
    created() {
      this.getMoviesList();
    }
  }

</script>


<style scoped lang="less">
  .mui-table-view {
    > .mui-table-view-cell {
      > a {
        > h3 {
          font-size: 25px;
          span {
            color: #88888F;
          }
        }
        > .mui-media-object {
          width: 100px;
          max-width: 100px;
          height: 150px;
        }
        > .mui-media-body {
          > div {
            font-size: 16px;
            margin: 6px 0;
            > span:nth-child(1) {
              color: #88888f;
              padding-right: 5px;
            }
            > span:nth-child(n+2) {
              max-width: 205px;
              overflow: hidden;
              -ms-text-overflow: ellipsis;
              text-overflow: ellipsis;
              white-space:nowrap;
              color: #6EBCE9;
            }
          }
        }

      }
    }

  }


</style>
