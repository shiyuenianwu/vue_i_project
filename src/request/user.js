/*
 * @Author: your name
 * @Date: 2020-03-18 11:59:55
 * @LastEditTime: 2020-03-28 22:26:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test_dev\vue_i_project\src\request\user.js
 */

import { getRequest, postRequest,deleteRequest } from "./common";

// 注册
export const Login = function (username, password) {
    return postRequest('user/login/', {
        "username": username,
        "password": password
    })
};

// 登录
export const Register = function (username, password) {
    return postRequest('user/register/',{
        "username": username,
        "password": password
    })
};

// 退出
export const Logout = function () {
    return deleteRequest('user/logout/')
};

// 获取已用户信息
export const GetLoginUserInfo = function () {
    return getRequest('user/info/')
};