<template>
  <div class="login">
    <Header :title="title"></Header>
    <div class="ipt">
      <input type="text" v-model="username" placeholder="账号">
    </div>
    <div class="ipt">
      <input type="text" v-model="password" placeholder="密码">
    </div>
    <div style="margin: 16px;">
      <van-button round block type="info" @click="submit">提交</van-button>
    </div>
    <div class="toReg"><router-link to="/reg">立即注册</router-link></div>
  </div>
</template>
<script>
import { Notify } from 'vant';
import { post, get } from '@/utils/request'
import Header from '@/components/Header'
export default {
  name: "Login",
  data() {
    return {
      username: '',
      password: '',
      title:"登录"
    };
  },
  methods: {
    submit() {
      if (this.username==''||this.password=='') {
        Notify({ type: 'danger', message: "账号或密码不能为空", duration: 500 });
      }else{
        let payload={
          username:this.username,
          pwd:this.password
        }
        post("http://api.baxiaobu.com/index.php/home/v1/login",payload).then(res=>{
          if (res.status==200) {
            Notify({ type: 'success', duration: 500, message: '登陆成功' });
            sessionStorage.setItem('user',true)
            this.$router.push('/home')
          }else{
            Notify({ type: 'danger', message: res.message, duration: 500 });
          }
        })
      }
    },
  },
  components:{
    Header
  }
};
</script>
<style lang="less">
.login{
  width: 100%;
  height: 100%;
  .ipt{
    width: 100%;
    font-size: 0.3rem;
    padding: 0.2rem;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    input{
      width: 90%;
      padding: 0.2rem 0;
      border: 1PX solid #cccccc;
      border-radius: 0.1rem;
      padding-left: 0.2rem;
      margin: 0.2rem 0 0 0;
    }
  }
  .toReg{
    display: flex;
    justify-content: flex-end;
    padding-right: 0.6rem;
  }
}

</style>