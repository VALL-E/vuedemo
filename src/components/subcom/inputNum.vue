<template>
<span>
        <input @click="substrict" type="button" value="-">
        <input type="text" v-model="count">
        <input @click="add" type="button" value="+">
    </span>
</template>

<script type="es6">
    export default {
      data(){
        return{
          count:1
        }
      },
      methods:{
        add(){
          this.count++;
          this.sendCount();
        },
        substrict(){
          this.count--;
          if(this.count < 1){
            this.count = 1;
          }
          this.sendCount();
        },
        sendCount(){
          this.$emit('dataObj',this.count);
        }
      }
    }

</script>


<style scoped lang="less">
  span{
    line-height: 30px;
  }
  input {
    width: 40px;
    height: 30px;
    text-align: center;
    padding: 0;
    margin: 0;
    outline:none;
    vertical-align: middle;
  }

</style>
