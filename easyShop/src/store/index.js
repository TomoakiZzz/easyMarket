// 引入模块
import Login from './modules/login'
import My from './modules/my'
import Home from "./modules/home"
import MyCollection from './modules/myCollection'
// 实例化模块
const login = new Login
const my = new My
const home = new Home
const myCollection = new MyCollection
export default{
    login,
    my,
    home,
    myCollection
}
