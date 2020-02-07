import {request} from "@/network/index";



let getAll = function (page, size=10) {
    return request.get("api/native_news/news/", {page, size})
};

let getByUsername = function (username) {
    return request.get("api/native_news/news/", {
        username
    })
};



export const native_news_api = {
    getAll, getByUsername
};
