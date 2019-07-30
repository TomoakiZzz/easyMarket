import React, { Component } from 'react'
import './myList.scss'
import {withRouter} from "react-router-dom"
class MyList extends Component {
    render() {
        let {item} = this.props
        console.log(item.value_id,this.props)
        return (
            <div className='touchClear' onClick={()=>{this.props.history.push(`/goods/${item.value_id}`)}}>
                <div className='test'>
                    <div className='collectItem onePx_bottom'>
                        <img src={item.list_pic_url} className='collectImg'/>
                        <div className='collectMsg'>
                            <div>{item.name}</div>
                            <div>{item.goods_brief}</div>
                            <div>￥{item.retail_price}</div>
                        </div>
                    </div>
                </div>
                <div className='colse'>删除</div>
            </div>
        )
    }
}
export default withRouter(MyList)