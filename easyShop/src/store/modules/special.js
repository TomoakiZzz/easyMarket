import { observable, action } from "mobx";
import {getSpecialData} from "../../services/index"
export default class special{
    // @observable 修饰属性
    @observable  specialData={}
    @action getSpecialData = async(params)=>{
        let data = await getSpecialData(params)
        console.log(data)
        this.specialData = data.data
    }
    
}