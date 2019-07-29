// 引入模块
import Login from './modules/login'
import Home from "./modules/home"
import Commodity from "./modules/commodity"
import MyCollection from './modules/myCollection'
import BrandDetail from "./modules/brandDetail"
import Special from "./modules/special"
import Address from './modules/address'
import Classification from "./modules/classification"
import Goods from "./modules/goods"
import ShoppingCart from './modules/shoppingcart'
import Search from './modules/search'
// 实例化模块
const login = new Login
const home = new Home
const commodity = new Commodity
const myCollection = new MyCollection
const brandDetail = new BrandDetail
const special = new Special
const address = new Address
const classification = new Classification
const goods = new Goods
const shoppingCart = new ShoppingCart
const search = new Search
export default{
    login,
    home,
    commodity,
    myCollection,
    brandDetail,
    special,
    commodity,
    address,
    classification,
    goods,
    shoppingCart,
    search
}
