
import axios from "axios";
import cookie from "../utils/cookie"
import router, { routerPath } from "../router/index.js"

const getCookie = cookie;
const http = axios.create({
    baseURL: "/api",
    timeout: 6000
})

//请求拦截
http.interceptors.request.use(config => {
    config.headers.Authorization = getCookie("Authorization");
    return config
}, err => {
    console.log(err);
})
//响应拦截
http.interceptors.response.use((res) => {
    console.log("233", res.data);
    if (res.data.code == 200) {
        console.log("请求成功");
        return res.data;
    } else if (res.data.code == 401) {

        router.replace({
            path: routerPath.login
        });
        return Promise.reject(new Error("Error Message"))
    } else {
        console.log("请求失败2");
        return Promise.reject(new Error("Error Message"))
    }
}, (err) => {
    console.log("请求失败1", err);
    return Promise.reject(new Error("Error Message"))
})


export default function request({ method = "get", url, data = {}, params = {} }) {
    return http({
        method,
        url,
        data,
        params,
    })
}



