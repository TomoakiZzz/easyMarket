import { observable, action} from "mobx";
import {} from "../../services/index"
export default class Home{
    // @observable 修饰属性
    @observable GetAddress = [];
    // @action 修饰方法
    @action get_Address = async (params) => {
        let data = await getAddress(params)
        console.log(data)
        this.GetAddress = data.data
    }
}