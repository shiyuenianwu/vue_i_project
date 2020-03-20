/*
 * @Author: your name
 * @Date: 2020-02-25 17:37:06
 * @LastEditTime: 2020-03-17 19:37:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test_dev\vue_i_project\src\main.js
 */
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue'
import router from './router'

//注册组件
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
