import { observable, action } from "mobx";
import { defaultSearch, clearSearchHistory ,searchGoodsLists} from "../../services/index"
import { clear } from "sisteransi";
export default class Search {
    // @observable 修饰属性
    @observable searchHistory = {};
    @observable searchGoodsData={}
    // @action 修饰方法
    @action searchIndex = async () => {
        let data = await defaultSearch()
        this.searchHistory = data.data
        console.log(data)
    }
    @action clearHistory = async () => {
        let data = await clearSearchHistory()
        if (data.errno === 0) {
            let data = await defaultSearch()
            this.searchHistory = data.data
        }
    }
    @action searchGoodsList = async (params) => {
        let data = await searchGoodsLists(params)
        this.searchGoodsData=data.data
        if(data.errno===0){
            let data = await defaultSearch()
            this.searchHistory = data.data
        }
        console.log(data)
        
    }
}