import React, { Component } from 'react'
import './myList.scss'
import {withRouter} from "react-router-dom"
import myTouch from "../myTouch.js"
import { inject, observer } from 'mobx-react'

@inject('myCollection')
@observer
class MyList extends Component {
    state={
        flag:false
    }
    render() {
        let {item} = this.props
        // console.log(items.value_id,this.props)
        return (
            <div className='touchClear'>
                <div className={`test ${this.state.flag ? "left" : ''}`} ref="touch"  onClick={()=>{this.props.history.push(`/goods/${item.value_id}`)}}>
                    <div className='collectItem onePx_bottom'>
                        <img src={item.list_pic_url} className='collectImg'/>
                        <div className='collectMsg'>
                            <div>{item.name}</div>
                            <div>{item.goods_brief}</div>
                            <div>￥{item.retail_price}</div>
                        </div>
                    </div>
                </div>
                <div className='colse' onClick={this.handClose.bind(this,item.value_id)}>删除</div>
            </div>
        )
    }
    componentDidMount(){
        if(this.refs.touch && !this.state.flag){
            myTouch.swipe(this.refs.touch,"left",()=>{
                this.setState({
                    flag:true
                })
            })
            myTouch.swipe(this.refs.touch,"right",()=>{
                this.setState({
                    flag:false
                })
            })
        }
    }
    handClose(id){
        console.log(id)
        this.props.myCollection.deleteLike({typeId:0,valueId:id})
    }
    
}
export default withRouter(MyList)