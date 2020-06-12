import { observable, action } from "mobx";
import {getSpecialData,getTopDetailData,getDetailCommentList,getTopicRelated,setCommentList} from "../../services/index"
export default class special{
    // @observable 修饰属性
    @observable  specialData={}
    @observable  specialDetail={}
    @observable  DetailCommentList=[]
    @observable  IcRelated=[]
    @observable  code=false
    @action getSpecialData = async(params)=>{
        let data = await getSpecialData(params)
        console.log(data)
        this.specialData = data.data
    }
    @action getTopDetail = async(params)=>{
        let data = await getTopDetailData(params)
        console.log(data)
        this.specialDetail = data.data
    }
    @action getCommentList = async(params)=>{
        let data = await getDetailCommentList(params)
        console.log(data)
        this.DetailCommentList = data.data
    }
    @action getIcRelated = async(params)=>{
        let data = await getTopicRelated(params)
        console.log(data)
        this.IcRelated = data.data
    }
    @action writeCommentList = async(params)=>{
        let data = await setCommentList(params)
        console.log(data)
        if(data.errno===0){
            this.code = true
        }
    }
}