// 引入模块
import Login from './modules/login'
import Home from "./modules/home"
import MyCollection from './modules/myCollection'
import Commodity from "./modules/commodity"
import Address from './modules/address'
// 实例化模块
const login = new Login
const home = new Home
const myCollection = new MyCollection
const commodity = new Commodity
const address = new Address
export default{
    login,
    home,
    myCollection,
    commodity,
    address,
}
