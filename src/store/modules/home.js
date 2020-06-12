import { observable, action,runInAction } from "mobx";
import {getHomeData} from "../../services/index"
export default class Home{
    // @observable 修饰属性
    @observable homeData = {};

    // @action 修饰方法
    
    @action getDefaultData = async ()=>{
         let data = await getHomeData()
         this.homeData = data.data
    }
}