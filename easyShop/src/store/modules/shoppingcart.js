import { observable, action} from "mobx";
import {getShopping,checkedShopping} from "../../services/index"
export default class Home{
    // @observable 修饰属性
    @observable GetShopping = [];
    @observable GetShoppingNum = {};
    @observable GetId = [];

    // @action 修饰方法
    //获取所有购物车商品
    @action get_Shopping = async () => {
        let data = await getShopping()
        // console.log(data)
        this.GetShopping = data.data.cartList
        this.GetShoppingNum = data.data.cartTotal
        this.GetId = data.data.cartList.map((item) => item.product_id).join(",")
        // console.log(this.GetId)
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
}