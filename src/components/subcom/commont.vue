<template>
  <div class="tmpPadding">
    <div class="postCommont">
      <h3>提交评论</h3>
      <hr>
      <textarea placeholder="请输入评论内容" v-model="msg"></textarea>
      <mt-button type="primary" size="large" @click="postComment()">发表评论</mt-button>
    </div>
    <div class="getCommont">
      <h3>评论列表</h3>
      <hr>
      <div v-if="isshow">暂无评论</div>
      <div class="list" v-for="(item,index) in data" :key="index">
        <div class="title">
          <span>第{{index + 1}}楼</span>
          <span>匿名用户</span>
          <span>{{time | format('l')}}</span>
        </div>
        <ul class="mui-table-view">
          <li class="mui-table-view-cell">{{item.key}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="es6">
  import {Toast} from 'mint-ui';
  export default {
    data() {
      return {
        msg: '',
        data: [],
        time: new Date(),
        isshow:false
      }
    },
    // 子组件传值
    props: ['id'],
    methods: {
      // 加载评论
      getComment() {
        if (localStorage.getItem('评论信息')) {
          this.isshow = false;
          this.data = JSON.parse(localStorage.getItem('评论信息'));
        } else {
          this.isshow = true;
        }
      },
      postComment() {
        // 判断输入的数据是否为空
        if (this.msg.trim().length <= 0) {
          Toast('请输入内容');
          return;
        }
        // 输入的数据以[{},{}]形式存储在localStorage中
        var obj = {}; // 每点击一次就会重新声明一次obj，就不用将obj重置为空对象（每次存储一个对象在数组中）
        var data = this.data;
        if (localStorage.getItem('评论信息')) {
          // getItem 的返回值是字符串
          data = JSON.parse(localStorage.getItem('评论信息'));
        }
        obj.key = this.msg;
        // console.log(obj.key);
        data.push(obj);
        // setItem 的两个参数只能是字符串
        localStorage.setItem('评论信息', JSON.stringify(data));
        this.msg = '';
        this.getComment();
      }
    },
    created() {
      this.getComment();
    }
  }

</script>


<style scoped lang="less">
  .tmpPadding {
    padding: 5px;
  }

  .title {
    margin: 20px 15px 7px;
    color: #6d6d72;
    font-size: 15px;
  }
  .box{
    border: 1px solid #000;
  }

</style>
