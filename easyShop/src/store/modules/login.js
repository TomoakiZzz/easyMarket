import { observable, action } from "mobx";
import {login} from '../../services'

class Login{
    // @observable 修饰属性
    @observable homeData = {};

    // @action 修饰方法
    @action Login = async (payload)=>{
        let data = await login(payload)
        console.log(data)
        if(data.errno===0){
            window.localStorage.setItem("userName",data.data.mobile)
        }
        this.homeData = data
    }
}
export default Login