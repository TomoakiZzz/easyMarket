// 引入模块
import Login from './modules/login'
import My from './modules/my'
import Home from "./modules/home"
import Commodity from "./modules/commodity"
// 实例化模块
const login = new Login
const my = new My
const home = new Home
const commodity = new Commodity
export default{
    login,
    my,
    home,
    commodity
}
