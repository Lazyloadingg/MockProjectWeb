

// const BASEURL = "127.0.0.1:9000";
const BASEURL = "";
export const api = {
    login: `${BASEURL}/user/login`,
    register: `${BASEURL}/user/register`,
    logout: `${BASEURL}/user/logout`,
    addProject: `${BASEURL}/space/addpreject`,
    addApi: `${BASEURL}/space/addapi`,
    getprojects: `${BASEURL}/space/getprojects`,
    getapis: `${BASEURL}/space/getapis`,
    getapis: `${BASEURL}/space/getapidetail`,
    deleteproject: `${BASEURL}/space/deleteproject`,
    deleteapi: `${BASEURL}/space/deleteapi`,
    updateapi: `${BASEURL}/space/updateapi`,
}