<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(val,index) in picData" :key="index">
        <img :src="val.image" alt="" style="width:100%;">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import { Swipe, SwipeItem } from 'vant';
export default {
  data() {
    return {
      
    }
  },
  props:['picData']
}
</script>
<style lang="less">
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    // line-height: 6rem;
    text-align: center;
  }
</style>