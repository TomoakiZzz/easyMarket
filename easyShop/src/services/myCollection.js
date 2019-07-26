import request from "../utils/request";
export function getData(payload){
    return request.get(`/collect/list?typeId=${payload}`)
}