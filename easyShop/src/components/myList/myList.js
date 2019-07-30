import React, { Component } from 'react'
import './myList.scss'
export default class MyList extends Component {
    render() {
        let {item} = this.props
        console.log(item)
        return (
            <div className='touchClear'>
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
