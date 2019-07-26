import { observable, action } from "mobx";
import {getData} from "../../services/index"
export default class myCollection{
    // @observable 修饰属性
    @observable data = {};

    // @action 修饰方法
    
    @action getDefaultData = async (payload)=>{
        return this.data = await getData(payload)
    }
}