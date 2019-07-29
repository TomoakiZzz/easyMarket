import request from "../utils/request"
export function getClassIfTabs(){
    return request.get("/catalog/index")
}
export function getGoodsCount(){
    return request.get("/goods/count")
}
export function getCatalogCurrent(params){
    return request.get("/catalog/current",{params})
}