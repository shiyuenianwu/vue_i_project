<!--
 * @Author: your name
 * @Date: 2020-02-25 17:37:06
 * @LastEditTime: 2020-04-16 23:19:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test_dev\vue_i_project\src\App.vue
 -->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { GetLoginUserInfo } from "./request/user";

export default {
  name: "App",
    created() {
        GetLoginUserInfo().then(data=>{
          console.log(data.data)
          if (data.data.success) {
            console.log("数据存在")
          }else{
            console.log("数据不存在")
            this.$router.push('/login') // vue特有的跳转路由的方式
          }
        })
      },
  data() {
    return{}
  },
  methods: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  overflow: auto;
}

html,body{
    height:100%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.element.style {
    height: 1000px;
    width: 10000px;
}
</style>
