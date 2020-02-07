import Axios from "axios"

const Server = "*****";  // 服务器地址

Axios.interceptors.response.use(ret=>ret.data);

let get = function (url, params) {
    return Axios.get(Server + url, {
        params,
        timeout: 5000
    })
};

let post = function (url, data, token=null) {
    return Axios.post(Server + url, data, {
        timeout: 5000,
        headers:{
            token: token
        }
    })
};





export const request={
    get, post
};
