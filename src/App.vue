<!--
 * @Author: your name
 * @Date: 2020-02-25 17:37:06
 * @LastEditTime: 2020-03-17 19:38:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test_dev\vue_i_project\src\App.vue
 -->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

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
