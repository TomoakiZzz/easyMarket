import { observable, action} from "mobx";
import {getNavData,getGoodsList} from "../../services/index"
export default class Home{
    // @observable 修饰属性
    @observable Navtab = {};
    @observable goodsLists = {};

    // @action 修饰方法
    
    @action getTabData = async (params)=>{
        let data = await getNavData(params)
        // console.log(data.data)
        this.Navtab = data.data
    }
    @action getGoodsLists = async (params)=>{
        let data = await getGoodsList(params)
        console.log(data.data)
        this.goodsLists = data.data
    }
    
}