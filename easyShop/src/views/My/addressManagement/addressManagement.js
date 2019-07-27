import React, { Component } from 'react'
import './addressManagement.scss'
import Header from '../../../components/head/head'
import MyAddress from '../../../components/myAddress/myAddress'
import Address from '../../../components/address/address'
export default class AddressManagement extends Component {
    state={
        headTitle:'地址管理',
        flag:false
    }
    render() {
        let {headTitle,flag}= this.state
        return (
            <div className='noTabPageContent'>
                <div className='addressPage'>
                    {
                        flag ? <Address change={(flags) => {this.setState({flag:flags})}}></Address> : <><Header headTitle={headTitle}></Header>
                        <div className='addressList'>
                            <MyAddress></MyAddress>
                        </div>
                        <div className='addAddress'>
                            <button onClick={this.click.bind(this)}>新增地址</button>
                        </div></>
                    }
                </div>
            </div>
        )
    }
    click(){
        this.setState({
            flag:true
        })
    }
}
