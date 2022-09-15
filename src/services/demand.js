import { api } from "@/utils/config";
import request from "../utils/request"



//登录
export function login(param) {
    console.log("进入登录方法");
    return request({
        method: "post",
        url: api.login,
        data: param
    });
}

//注册
export function register(param) {
    return request({
        method: "post",
        url: api.login,
        data: param
    });
}
//退出登录
export function logout(param) {
    return request({
        method: "post",
        url: api.logout,
        data: param
    });
}
//添加项目
export function addPreject(param) {
    return request({
        method: "post",
        url: api.addProject,
        data: param
    });
}
//删除项目
export function delPreject(param) {
    return request({
        method: "post",
        url: api.deleteproject,
        data: param
    });
}
//获取项目列表
export function getProjects(param) {
    return request({
        method: "get",
        url: api.getprojects,
        params: param
    });
}
//获取项目下 API列表
export function getAPIs(param) {
    return request({
        method: "get",
        url: api.getapis,
        params: param
    });
}
//获取api详情
export function getApiDetail(param) {
    return request({
        method: "get",
        url: api.getapidetail,
        params: param
    });
}




