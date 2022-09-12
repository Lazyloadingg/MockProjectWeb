
import axios from "axios";
import { Vue } from "_vue-demi@0.13.11@vue-demi";
import cookie from "../utils/cookie"
import { useRouter } from "vue-router";
import { routerPath } from "@/router";
const getCookie = cookie;
const router = useRouter();
axios.defaults.timeout = 10 * 1000;
axios.defaults.baseURL = "/api"


axios.interceptors.request.use(config => {
    config.headers.Authorization = getCookie("Authorization");
    return config
}, err => {
    console.log(err);
})

axios.interceptors.response.use(res => {
    console.log("233", res.data);
    if (res.data.code == 200) {
        console.log("请求成功");
        return Promise.resolve(res.data);
    } else if (res.data.code == 401) {
        console.log("请求失败401");
        
        router.replace({
            name: routerPath.login,
        });
        return Promise.reject(new Error("Error Message"))
    } else {
        console.log("请求失败");
        return Promise.reject(new Error("Error Message"))

    }
}, err => {
    console.log("请求失败", err);
})


const fetch = (options) => {

    let method = options.method.toLowerCase();
    let url = options.url;
    let data = options.data;

    switch (method) {
        case "get":
            return axios.get(
                url,
            );

        case "post":
            return axios.post(url, data);

        default:
            return axios(options);
    }

}

export default async function request(options) {

    try {
        const response = await fetch(options);
        console.log(response);
        let data = response.data;
        return {
            success: true,
            message: "请求成功",
            ...data,
        };
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: "请求失败",
        };
    }
}


