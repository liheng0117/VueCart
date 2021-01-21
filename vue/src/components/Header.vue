<template>
  <div class="header">
    <p @click="back" class="iconfont iconxiangzuojiantou" style="width:1rem;font-size:0.5rem;"></p>
    <p style="flex:1;padding-right:1rem;">{{title}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    }
  },
  props:['title'],
  methods: {
    back(){
      this.$router.go(-1)
    }
  },
}
</script>
<style lang="less">
  .header{
    width: 100%;
    height: 1rem;
    display: flex;
    align-items: center;
    border-bottom: 1PX solid #f0f0f0;
    font-size: 0.4rem;
    p{
      text-align: center;
    }
  }
</style>