/*
 * @Author: your name
 * @Date: 2020-03-18 11:59:55
 * @LastEditTime: 2020-03-18 12:28:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test_dev\vue_i_project\src\request\user.js
 */

import { getRequest, postRequest } from "./common";

// 注册
export const Register = function (username, password) {
    return postRequest()
};

// 登录
export const Register = function (username, password) {
    return postRequest()
};

// 退出
export const logout = function () {
    return getRequest()
};

// 获取已用户信息
export const getLoginUserInfo = function () {
    return getRequest()
};