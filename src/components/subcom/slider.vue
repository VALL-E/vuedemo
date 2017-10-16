<template>
    <div>
      <mt-swipe :auto="3000">
        <mt-swipe-item v-for="(item,index) in imgs" :key="index">
          <img :src="item.img">
        </mt-swipe-item>
      </mt-swipe>

    </div>
</template>

<script type="es6">
    export default {
      props:['imgs']
    }

</script>


<style scoped lang="less">
  .mint-swipe {
    height: 250px;
    .mint-swipe-item {
      width: 100%;
      max-height: 250px;
      background-color: red;
      img{
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }

</style>
