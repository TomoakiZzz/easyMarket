import { observable, action} from "mobx";
import {getClassIfTabs,getGoodsCount,getCatalogCurrent} from "../../services/index"
export default class classification{
    // @observable 修饰属性
    @observable tabs = {};
    @observable goodsCount = 0;
    @observable currentCategory={}

    // @action 修饰方法
    @action getTabsData = async ()=>{
        let data = await getClassIfTabs()
        console.log(data.data)
        this.tabs = data.data
        let list =  await getCatalogCurrent({id:data.data.currentCategory.id})
        console.log(list.data)
        this.currentCategory=list.data
    }
    @action getGoodsCount = async ()=>{
        let data = await getGoodsCount()
        console.log(data.data)
        this.goodsCount = data.data.goodsCount
    }
    @action getCatalogCurrents = async (params)=>{
        let data = await getCatalogCurrent(params)
        console.log(data.data)
        this.currentCategory = data.data
    }
}