import request from "../utils/request"
export function getGoodsDetailData(params){
    return request.get("/goods/detail",{params})
}
export function getGoodsRelateds(params){
    return request.get("/goods/related",{params})
}
export function getGoodsCountNum(){
    return request.get("/cart/goodscount")
}
export function addShopCar(params){
    return request.post("/cart/add",params)
}