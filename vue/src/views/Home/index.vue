<template>
  <div class="home">
    <Homehead :headName="headName"></Homehead>
    <div class="home_scroll" ref="home" @scroll="scrollFn">
      <Swiper :picData="picData"></Swiper>
      <div class="home_nav">
        <dl v-for="val in navData" :key="val.cid">
          <dt><img :src="val.image" alt=""></dt>
          <dd>{{val.title}}</dd>
        </dl>
      </div>
      <div class="recommendHead">
        <div class="leftLine"></div>
        <div style="display:flex;align-items: center;">
          <i class="iconfont iconaixin" style="color:orangered;font-size:0.4rem;padding-right:0.1rem;"></i>为您推荐
        </div>
        <div class="leftLine"></div>
      </div>
      <div class="home_recommend">
        <dl v-for="val in recommendData" :key="val.gid">
          <dt><img :src="val.image" alt=""></dt>
          <dd>{{val.title}}</dd>
          <dd style="color:orangered;padding:0.2rem;">{{val.price}}</dd>
        </dl>
      </div>
    </div>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import { post, get } from '@/utils/request'
import Homehead from '@/components/Homehead'
import Swiper from '@/components/Swiper'
import Tabbar from '@/components/Tabbar'
export default {
  name: 'Home',
  data() {
    return {
      headName:'',
      picData:[],
      navData:[],
      recommendData:[]
    }
  },
  components: {
    Homehead,
    Swiper,
    Tabbar
  },
  methods: {
    scrollFn(){
      if (this.$refs.home.scrollTop>80) {
        this.headName = 'comp_homeheadon'
      }else{
        this.headName = ''
      }
    }
  },
  created() {
    // 首页轮播图
    get("http://vueshop.glbuys.com/api/home/index/slide?token=1ec949a15fb709370f").then(res=>{
      if (res.code==200) {
        this.picData = res.data
      }
    }),
    // 首页导航
    get("http://vueshop.glbuys.com/api/home/index/nav?token=1ec949a15fb709370f").then(res=>{
      if (res.code==200) {
        this.navData = res.data
      }
    }),
    // 推荐的商品列表 
    get("http://vueshop.glbuys.com/api/home/index/recom?token=1ec949a15fb709370f").then(res=>{
      if (res.code==200) {
        this.recommendData = res.data
      }
    })
  }
}
</script>
<style lang="less">
  .home{
    width: 100%;
    height: 100%;
    background: #efefef;
    display: flex;
    flex-direction: column;
    .home_scroll{
      flex: 1;
      overflow-y: auto;
    }
    .home_nav{
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      overflow-x: hidden;
      background: white;
      margin: 0.1rem 0;
      dl{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        dt{
          width: 1rem;
          img{
            width: 100%;
          }
        }
        dd{
          width: 100%;
          color: #7b7f82;
        }
      }
    }
    .recommendHead{
      width: 100%;
      height: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .leftLine{
        width: 35%;
        height: 1px;
        background-color: #D4D4D4;
      }
    }
    .home_recommend{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      dl{
        width: 48%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 1%;
        background: white;
        dt{
          width: 4rem;height: 5rem;
          display: flex;
          overflow: hidden;
          justify-content: center;
          img{
            width: 100%;height: auto;
          }
        }
        dd{
          width: 100%;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp:2;
          overflow: hidden;
          -webkit-box-orient:vertical;
          padding: 0 0.15rem;
          box-sizing: border-box;
        }
      }
    }
  }
</style>