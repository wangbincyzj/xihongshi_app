import {request} from "@/network/index";


let getChannelList = function () {
    return request.get(`spider/chinanews/channelList?dtp=2&isWap=yes`)
};


let getDigest = function(index=""){
    return request.get(`spider/chinanews/getDigest?language=chs&dtp=12&isWap=yes&pageIndex=${index}`);
};

let getLiveList = function (index="") {
    return request.get(`spider/chinanews/getLiveList?language=chs&dtp=2&isWap=yes&pageIndex=${index}`)
};

let getVidList = function (index="") {
    return request.get(`spider/chinanews/getVidList?language=chs&isWap=yes&pageSize=15&pageIndex=${index}`)
};

let getNewsList = function (cname) {
    return function (index="") {
        return request.get(`spider/chinanews/getNewsList?language=chs&pageSize=15&searchType=1&dtp=12&isWap=yes&cname=${cname}&pageIndex=${index}`)
    }
}





export const chinanews_api={
    getDigest, getChannelList, getLiveList, getVidList, getNewsList
}
