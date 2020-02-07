import {request} from "@/network/index";



let getAll = function (page=1, size=10, options={}) {
    let query = Object.assign({page, size}, options);
    return request.get("api/job/", query)
};



export const job_api = {
    getAll
}
