<template>
  <div class="tabbar">
    <router-link to="/">
      <i class="iconfont iconshouye"></i>
      <p>首页</p>
    </router-link>
    <router-link to="/cart">
      <i class="iconfont icongouwuche"></i>
      <p>购物车</p>
    </router-link>
    <router-link to="/user">
      <i class="iconfont iconMy"></i>
      <p>我的</p>
    </router-link>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less">
  .tabbar{
    width: 100%;
    height: 1.4rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: white;
    overflow: hidden;
    a{
      display: inline-block;
      height: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: black;
      i{
        font-size: 0.6rem;
      }
      p{
        margin: 0;
      }
    }
    .router-link-active{
      color: orangered;
    }
  }
</style>