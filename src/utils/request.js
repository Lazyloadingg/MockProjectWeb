
import axios from "axios";
import { Vue } from "_vue-demi@0.13.11@vue-demi";
import cookie from "../utils/cookie"

const getCookie = cookie;

axios.defaults.timeout = 10 * 1000;
axios.defaults.baseURL = "/api"

const fetch = (options) => {

    let method = options.method.toLowerCase();
    let url = options.url;
    let data = options.data;
    let headers = options.headers;
    let token = getCookie("Authorization");
    options.headers = {
        Authorization: token,
        ...headers,
    }

    switch (method) {
        case "get":
            return axios.get(
                url
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


