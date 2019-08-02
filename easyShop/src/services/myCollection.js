import request from "../utils/request";
export function getCollectData(params){
    return request.get("/collect/list",{params})
}
export function closeLike(params){
    return request.post("/collect/addordelete",params)
}