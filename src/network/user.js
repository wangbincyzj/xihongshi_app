/*用户账户相关api*/
import {request} from "@/network/index";

const BASE_URL = "api/user/";
let login = function (username, password) {
    return request.post(BASE_URL + "login/", {
        username,
        password
    })
};

let logout = function (token) {
    return request.post(BASE_URL + "logout/",{
        token
    })
};

let tokenCheck = function (token) {
    return request.post(BASE_URL+ "token_check/", {
        token
    })
};

let user_api = {
    login, logout, tokenCheck
};


export {user_api}
