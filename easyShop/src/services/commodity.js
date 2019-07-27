import request from "../utils/request";
export function getNavData(params){
    return request.get("/goods/category",{params})
}
export function getGoodsList(params){
    return request.get("/goods/list",params)
}