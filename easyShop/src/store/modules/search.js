import { observable, action} from "mobx";
import {addAddress} from "../../services/index"
export default class Home{
    // @observable 修饰属性
    @observable Navtab = {};
    // @action 修饰方法
    @action add_Address = async (params)=>{
        let data = await addAddress(params)
    }
}