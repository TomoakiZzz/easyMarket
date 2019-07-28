import request from "../utils/request";
export function getSpecialData (params){
    return request.get("/topic/list",{params})
}