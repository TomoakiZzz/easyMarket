import React, { Component } from 'react'
import './address'
export default class Address extends Component {
    render() {
        return (
            <div className='addressSetPage'>
                <div className='addressHeader'></div>
                <div className='onePx_bottom'></div>
                <div className='onePx_bottom'></div>
                <div className='onePx_bottom'></div>
                <div className='onePx_bottom'>
                    <input className='addressInput' placeholder='详细地址'/>
                </div>
                <div className='onePx_bottom'>
                    <div className='isDefaultAddress'>
                        设置默认地址
                        <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzAV+Z0EAAAAVdFJOUwAJ+KUEFTPay2bzRXdZ7RkhmJ6qJOWhY+QAAAEDSURBVDjLnZTplsIgDIUNWwK2tdt9/1cdxHGmVcAc+dH25Hw0+71cvjhztDIZM4mNc4txo+BwZKxSVwbSFoMn8iFuCeDrG0RLNkc6GGK+ttCZ8gIzuJcgBgPxJ4rB4T2OkM0HjgRyq8V7Y8i/3/V06YVb/nKECa0qBYPffB1jaFd8AD8+RrBrY8R41FkQew2MkPtrR6IeRglzoW1/HrbizfZ9Pv8jCH0slOAm+D7mMeUn4PoYwegxpVNlCsqCKMurbJay9R8GyT0HSTmWeciTYsh7K+MPK1MW0H9eQOU652sqcch+15rUrFQXLpuFy7ksXLYuXDUZbBZ9v4sqiqju34jyD97JD4dkfgo1AAAAAElFTkSuQmCC'/>
                    </div>
                </div>
                <div className='closeAddress'>
                    <button>取消</button>
                    <button>确定</button>
                </div>
            </div>
        )
    }
}
