import { observable, action} from "mobx";
import {getBrandData,getGoodsList} from "../../services/index"
export default class brandDetail{
    // @observable 修饰属性
    @observable brand = {};
    @observable goodsLists = {};

    // @action 修饰方法
    
    @action getBrandData = async (params)=>{
        let data = await getBrandData(params)
        // console.log(data.data)
        this.brand = data.data
    }
    @action getBrandGoods = async (params)=>{
        let data = await getGoodsList(params)
        console.log(data.data)
        this.goodsLists = data.data
    }
    
    
}