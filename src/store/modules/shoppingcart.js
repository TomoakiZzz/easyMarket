import { observable, action} from "mobx";
import {getShopping,checkedShopping,delAll,upCount} from "../../services/index"
export default class Home{
    // @observable 修饰属性
    @observable GetShopping = [];
    @observable GetShoppingNum = {};
    @observable GetId = [];
    @observable IsShow = false
    @observable edit_All = []

    // @action 修饰方法
    //获取所有购物车商品
    @action get_Shopping = async () => {
        let data = await getShopping()
        // console.log(data)
        data.data.cartList.map((item) => {
            item.isShow=false
        })
        this.GetShopping = data.data.cartList
        this.GetShoppingNum = data.data.cartTotal
        this.GetId = data.data.cartList.map((item) => item.product_id).join(",")
    }
    //购物车商品是否选中
    @action checked_Shopping = async (params) => {
        // console.log(params)
        let data = await checkedShopping(params)
        // console.log(data)
        if(data.errno === 0){
            let data = await getShopping()
            this.GetShopping = data.data.cartList
            this.GetShoppingNum = data.data.cartTotal
            this.GetId = data.data.cartList.map((item) => item.product_id).join(",")
        }
    }
    //编辑单选
    @action updata = async (params) => {
        let item = this.GetShopping.find((item) => item.product_id === params)
        item.isShow = !item.isShow
        this.IsShow = this.GetShopping.every(item => item.isShow)
        this.edit_All = this.GetShopping.filter((item) => item.isShow)
    }
    //编辑全选
    @action allChecked = async (params) => {
        this.IsShow=params
        this.GetShopping.map(item => {
            item.isShow = params
        })
        this.edit_All = this.GetShopping.filter((item) => item.isShow)
    }
    //删除商品
    @action del_All = async (params) => {
        let data = await delAll(params)
        if(data.errno === 0){
            this.GetShopping = data.data.cartList
            this.GetShoppingNum = data.data.cartTotal
        }
    }
    //更新商品数量
    @action up_Count = async (params) => {
        let data = await upCount(params)
        this.GetShopping = data.data.cartList
        this.GetShoppingNum = data.data.cartTotal
    }
}