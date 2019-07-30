import { observable, action} from "mobx";
import {addAddress,getAddress, delAddress} from "../../services/index"
export default class Home{
    // @observable 修饰属性
    @observable Navtab = {};
    @observable GetAddress = [];

    // @action 修饰方法
    @action add_Address = async (params)=>{
        console.log(params)
        let data = await addAddress(params)
        console.log(data)
        if(data.errno===0){
            let data = await getAddress()
            this.GetAddress = data.data
        }
    }
    @action get_Address = async () => {
        let data = await getAddress()
        this.GetAddress = data.data
    }
    @action del_Address = async (params) => {
        let data = await delAddress(params)
        if (data.errno === 0) {
            let data = await getAddress()
            this.GetAddress = data.data
        }
    }
    
}