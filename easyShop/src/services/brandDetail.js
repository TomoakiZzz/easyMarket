import request from "../utils/request";
export function getBrandData(params){
    return request.get("/brand/detail",{params})
}
