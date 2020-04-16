/*
 * @Author: your name
 * @Date: 2020-03-18 11:33:49
 * @LastEditTime: 2020-04-16 23:14:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test_dev\vue_i_project\src\request\common.js
 */
import axios from 'axios'

axios.defaults.withCredentials=true //表示每次请求都把cookie带上

//设置后端域名
const backendHost = "http://localhost/api/";

export const postRequest = function(path, data={} ){
    return axios.post(backendHost + path, data)
};

export const putRequest = function(path, data={} ){
    return axios.put(backendHost + path, data)
};

export const deleteRequest = function(path, data={} ){
    return axios.delete(backendHost + path, data)
};

export const patchRequest = function(path, data={} ){
    return axios.patch(backendHost + path, data)
};

export const getRequest = function(path, data={} ){
    return axios.get(backendHost + path, {
        params: data,
    })
};   