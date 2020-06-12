import request from "../utils/request";
export function getSpecialData (params){
    return request.get("/topic/list",{params})
}
export function getTopDetailData (params){
    return request.get("/topic/detail",{params})
}
export function getDetailCommentList (params){
    return request.get("/comment/list",{params})
}
export function getTopicRelated (params){
    return request.get("/topic/related",{params})
}
export function setCommentList (params){
    return request.post("/comment/post",params)
}