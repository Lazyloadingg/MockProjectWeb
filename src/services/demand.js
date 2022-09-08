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




