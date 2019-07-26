import React, { Component } from 'react'
import './myList.scss'
export default class MyList extends Component {
    render() {
        return (
            <div className='touchClear'>
                <div className='test'>
                    <div className='collectItem onePx_bottom'>
                        <img src='http://yanxuan.nosdn.127.net/9126151f028a8804026d530836b481cb.png' className='collectImg'/>
                        <div className='collectMsg'>
                            <div>日式素雅纯色流星纹窗帘</div>
                            <div>日式素雅纯色流星纹窗帘</div>
                            <div>￥299</div>
                        </div>
                    </div>
                </div>
                <div className='colse'>删除</div>
            </div>
        )
    }
}
