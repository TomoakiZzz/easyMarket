import React, { Component } from 'react'
import './addressManagement.scss'
import Header from '../../../components/head/head'
import MyAddress from '../../../components/myAddress/myAddress'
export default class AddressManagement extends Component {
    state={
        headTitle:'地址管理'
    }
    render() {
        let {headTitle}= this.state
        return (
            <div className='noTabPageContent'>
                <div className='addressPage'>
                    <Header headTitle={headTitle}></Header>
                    <div className='addressList'>
                        <MyAddress></MyAddress>
                    </div>
                    <div className='addAddress'>
                        <button>新增地址</button>
                    </div>
                </div>
            </div>
        )
    }
}
