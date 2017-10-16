<template>
    <div class="tmpPadding">

{{id}}
    </div>
</template>

<script type="es6">
    export default {
      data(){
        return{
          id:0
        }
      },
      created(){
        this.id = this.$route.params.id;
      }
    }

</script>


<style scoped lang="less">


</style>
