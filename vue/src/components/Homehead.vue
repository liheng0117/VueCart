<template>
  <div class="home_head" :class="headName">
    <p><i class="iconfont iconicon-test9" style="font-size:0.5rem;"></i></p>
    <div style="position:relative"><input type="text" placeholder="请输入喜欢的宝贝名称"><i style="position: absolute;left: 0.1rem;bottom: 0.07rem;font-size: 0.5rem;" class="iconfont iconsearch"></i></div>
    <p>登录</p>
  </div>
</template>
<script>
export default {
  props:['headName']
}
</script>
<style lang="less">
  .home_head{
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 999;
    position: fixed;
    left: 0;
    top: 0;
    color: white;
    p{
      width: 1.4rem;
      text-align: center;
    }
    div{
      flex: 1;
      input{
        width: 95%;
        background: #c1c1;
        box-sizing: border-box;
        padding: 0.1rem 0;
        text-indent: 0.8rem;
        border-radius: 0.12rem;
        border: 1PX solid #ffffff;
      }
      input::-webkit-input-placeholder{
        color: #fff;
        font-size: 0.4rem;
        font-weight: bold;
      } 
    }
  }
  .comp_homeheadon{
    background: linear-gradient(to bottom, red, white);
  }
</style>