import { observable, action } from "mobx";
import { getNavData, getGoodsList } from "../../services/index"
export default class Home {
    // @observable 修饰属性
    @observable Navtab = {};
    @observable goodsLists = [];
    @observable page = 1;
    @observable hasMore = false;
    // @action 修饰方法

    @action getTabData = async (params) => {
        let data = await getNavData(params)
        // console.log(data.data)
        this.Navtab = data.data
    }
    @action getGoodsLists = async (params) => {

        let data = await getGoodsList(params)

        //更新页数page
        this.page = params.page

        if (params.page == 1) {
            this.goodsLists = data.data.goodsList
        } else {
            this.goodsLists = [...this.goodsLists, ...data.data.goodsList]
        }

        this.hasMore = data.totalPages == params.page;
    }

}