import { observable, action } from "mobx";
import {login} from '../../services'

class Login{
    // @observable 修饰属性
    @observable homeData = {};

    // @action 修饰方法
    @action Login = async (payload)=>{
        return this.homeData = await login(payload)
    }
}
export default Login