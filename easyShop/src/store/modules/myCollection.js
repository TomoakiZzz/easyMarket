import { observable, action } from "mobx";
import {getCollectData,closeLike} from "../../services/index"
export default class myCollection{
    // @observable 修饰属性
    @observable CollectData = [];

    // @action 修饰方法
    
    @action getMyCollect = async (params)=>{
        let data = await getCollectData(params)
        this.CollectData=data.data
        console.log(data)
    }
    @action deleteLike = async (params) =>{
        let data = await closeLike(params)
        if(data.errno === 0 ){
            let data = await getCollectData(params)
            this.CollectData=data.data 
        }
    }
}