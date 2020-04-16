<!--
 * @Author: your name
 * @Date: 2020-02-25 17:37:06
 * @LastEditTime: 2020-04-17 00:45:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test_dev\vue_i_project\src\views\Home.vue
 -->
<template>
  <div class="home">
    <div class="left-menu">
      <el-menu
        style="height:100%; text-align:left"
        default-active="1"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">
          <i class="el-icon-location"></i>
          <span>服务</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">接口</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">任务</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">占位</span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-switch-button"></i>
          <span slot="title">退出登录</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="right-context">右侧面板内容</div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
.home {
  display: flex;
  height: 100%;
}
.left-menu {
  width: 15%;
}
.right-context {
  width: 85%;
}
</style>
