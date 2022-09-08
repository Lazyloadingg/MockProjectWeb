

export default function getCookie(cname) {
    console.log("获取cookie");
    var cookies = document.cookie.split(';');

    for (var i = 0; i < cookies.length; i++) {
        let value = cookies[i].trim();
        if (value.indexOf(cname) == 0) {
            return value.substring((cname + "=").length, value.length);
        }
    }
    return "";

}
//设置cookie
export function setCookie(cname, cvalue) {
    console.log("设置cookie");
    var cookie = cname + "=" + cvalue + ";";
    document.cookie = cookie;
}

//设置token到cookie
export function setTokenToCookie(cvalue) {
    setCookie("Authorization",cvalue)
}