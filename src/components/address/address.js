import React, { Component } from 'react'
import './address.scss'
import { List, InputItem, Picker } from 'antd-mobile';
import { createForm } from 'rc-form';
import { inject, observer } from 'mobx-react'
let city = require('../../components/nideshop_region (1).json')
city.map((item)=>{
    item.value=item.id
    item.label = item.name
    item.children=[]
    city.map(el=>{
        if(item.id===el.parent_id){
            item.children.push(el)
        }
    })
})
@inject("address")
@observer
class Address extends Component {
    state = {
        flag: false,
        address: null,
        name: '',
        phone: '',
        value: [],
        detailed_address: '',
    }
    onChange = (name) => {
        this.setState({
            name,
        });
    }
    onChangephone = (phone) => {
        this.setState({
            phone,
        });
    }
    onChangeAdd = (detailed_address) => {
        this.setState({
            detailed_address,
        });
    }
    render() {
        // let idArr = []
        // let parent_idArr = []
        let { flag, name, phone, detailed_address } = this.state
        const { getFieldProps } = this.props.form;
        

        console.log(this.state.value)
        return (
            <>
                {
                    this.props.num === 1 ? <List className='addressSetPage'>
                        <div className='addressHeader'>
                            新增地址
                    </div>
                        <div className='onePx_bottom'>
                            <InputItem
                                {...getFieldProps('name')}
                                type="text"
                                placeholder="姓名"
                                className='addressInput'
                                clear
                                value={name}
                                onChange={this.onChange}
                            ></InputItem>
                        </div>
                        <div className='onePx_bottom'>
                            <InputItem
                                {...getFieldProps('text')}
                                type="phone"
                                placeholder="电话号码"
                                className='addressInput'
                                clear
                                value={phone}
                                onChange={this.onChangephone}
                            ></InputItem>
                        </div>
                        <div className='onePx_bottom'>
                            <Picker data={city}
                                {...getFieldProps('district', {
                                    initialValue: ['5', '50', '630']
                                })}
                                className='chooseAddress'
                                // this.setState({value:initialValue})
                                onOk={e => this.setState({ value: e })}
                            >
                                <List.Item></List.Item>
                            </Picker>
                        </div>
                        <div className='onePx_bottom'>
                            <InputItem
                                {...getFieldProps('phone')}
                                type="text"
                                placeholder="详细地址"
                                className='addressInput'
                                clear
                                value={detailed_address}
                                onChange={this.onChangeAdd}
                            ></InputItem>
                        </div>
                        <div className='onePx_bottom'>
                            <div className='isDefaultAddress'>
                                设置默认地址
                                <img src={flag ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAQlBMVEUAAACrKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyvw19exOzv////z4uK1Q0Pt0dGxOjp+CNkCAAAADnRSTlMARVn7B9cVoc/jIWtnJIM++AMAAADUSURBVDjLndRLEoMgEEVRPyCg+FAh+99qYqmAabFL7/hMaKCrN/VWyRZopbJ9ETUaWbq5RLXBX6YmSChcpMRZdRKX6e6kDAqZzAmNYlpEpnCTimfEbfWmhLlnZp8qmLY5a47pVY0oNIWArfV+h5Jy88FsNg2q3JTNRLIK8sd4hTZnwfmzSuVsmRdPFGV+d1S18QjJUQUZB5IcVVBxvMlRBRsvKzmq0JOr9y58yNU/eEj8s3zyyPkvcyQk9wH57/xwOfCrhl9cNMGswdQ4HEt1GKsXfQHGSThPkNi75AAAAABJRU5ErkJggg==' :
                                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzAV+Z0EAAAAVdFJOUwAJ+KUEFTPay2bzRXdZ7RkhmJ6qJOWhY+QAAAEDSURBVDjLnZTplsIgDIUNWwK2tdt9/1cdxHGmVcAc+dH25Hw0+71cvjhztDIZM4mNc4txo+BwZKxSVwbSFoMn8iFuCeDrG0RLNkc6GGK+ttCZ8gIzuJcgBgPxJ4rB4T2OkM0HjgRyq8V7Y8i/3/V06YVb/nKECa0qBYPffB1jaFd8AD8+RrBrY8R41FkQew2MkPtrR6IeRglzoW1/HrbizfZ9Pv8jCH0slOAm+D7mMeUn4PoYwegxpVNlCsqCKMurbJay9R8GyT0HSTmWeciTYsh7K+MPK1MW0H9eQOU652sqcch+15rUrFQXLpuFy7ksXLYuXDUZbBZ9v4sqiqju34jyD97JD4dkfgo1AAAAAElFTkSuQmCC'}
                                    onClick={() => { this.setState({ flag: !flag }) }} />
                            </div>
                        </div>
                        <div className='closeAddress'>
                            <div><button onClick={this.click.bind(this)}>取消</button></div>
                            <div><button className='qd' onClick={this.addAddress.bind(this)}>保存</button></div>
                        </div>
                    </List > : <List className='addressSetPage'>
                            <div className='addressHeader'>
                                修改地址
                </div>
                            <div className='onePx_bottom'>
                                <InputItem
                                    {...getFieldProps('name')}
                                    defaultValue={this.props.item.name}
                                    type="text"
                                    placeholder="姓名"
                                    className='addressInput'
                                    clear
                                    value={name}
                                    onChange={this.onChange}
                                ></InputItem>
                            </div>
                            <div className='onePx_bottom'>
                                <InputItem
                                    {...getFieldProps('text')}
                                    defaultValue={phone}
                                    type="phone"
                                    placeholder="电话号码"
                                    className='addressInput'
                                    clear
                                    value={phone}
                                    onChange={this.onChangephone}
                                ></InputItem>
                            </div>
                            <div className='onePx_bottom'>
                                <Picker data={city}
                                    {...getFieldProps('district', {
                                        initialValue: this.state.value && this.state.value
                                    })}
                                    className='chooseAddress'
                                    onOk={e => this.setState({value:e})}
                                >
                                    <List.Item></List.Item>
                                </Picker>
                                
                            </div>
                            <div className='onePx_bottom'>
                                <InputItem
                                    {...getFieldProps('phone')}
                                    defaultValue={this.props.item.address}
                                    type="text"
                                    placeholder="详细地址"
                                    className='addressInput'
                                    clear
                                    value={detailed_address}
                                    onChange={this.onChangeAdd}
                                ></InputItem>
                            </div>
                            <div className='onePx_bottom'>
                                <div className='isDefaultAddress'>
                                    设置默认地址
                        <img src={flag ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAQlBMVEUAAACrKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyvw19exOzv////z4uK1Q0Pt0dGxOjp+CNkCAAAADnRSTlMARVn7B9cVoc/jIWtnJIM++AMAAADUSURBVDjLndRLEoMgEEVRPyCg+FAh+99qYqmAabFL7/hMaKCrN/VWyRZopbJ9ETUaWbq5RLXBX6YmSChcpMRZdRKX6e6kDAqZzAmNYlpEpnCTimfEbfWmhLlnZp8qmLY5a47pVY0oNIWArfV+h5Jy88FsNg2q3JTNRLIK8sd4hTZnwfmzSuVsmRdPFGV+d1S18QjJUQUZB5IcVVBxvMlRBRsvKzmq0JOr9y58yNU/eEj8s3zyyPkvcyQk9wH57/xwOfCrhl9cNMGswdQ4HEt1GKsXfQHGSThPkNi75AAAAABJRU5ErkJggg==' :
                                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzAV+Z0EAAAAVdFJOUwAJ+KUEFTPay2bzRXdZ7RkhmJ6qJOWhY+QAAAEDSURBVDjLnZTplsIgDIUNWwK2tdt9/1cdxHGmVcAc+dH25Hw0+71cvjhztDIZM4mNc4txo+BwZKxSVwbSFoMn8iFuCeDrG0RLNkc6GGK+ttCZ8gIzuJcgBgPxJ4rB4T2OkM0HjgRyq8V7Y8i/3/V06YVb/nKECa0qBYPffB1jaFd8AD8+RrBrY8R41FkQew2MkPtrR6IeRglzoW1/HrbizfZ9Pv8jCH0slOAm+D7mMeUn4PoYwegxpVNlCsqCKMurbJay9R8GyT0HSTmWeciTYsh7K+MPK1MW0H9eQOU652sqcch+15rUrFQXLpuFy7ksXLYuXDUZbBZ9v4sqiqju34jyD97JD4dkfgo1AAAAAElFTkSuQmCC'}
                                        onClick={() => { this.setState({ flag: !flag }) }} />
                                </div>
                            </div>
                            <div className='closeAddress'>
                                <div><button onClick={this.click.bind(this)}>取消</button></div>
                                <div><button className='qd' onClick={this.addAddress.bind(this)}>保存</button></div>
                            </div>
                        </List >
                }
            </>
        )
    }
    click() {
        this.props.change(false)
    }
    addAddress() {
        if (this.props.num === 1) {
            let { name, phone, value, detailed_address, flag } = this.state
            let payload = {
                address: detailed_address,//详细地址
                city_id: value[1],//市
                district_id: value[2],//区
                is_default: flag,//是否默认
                mobile: phone,//电话
                name: name,//名字
                province_id: value[0]//省份
            }
            this.props.address.add_Address(payload)
            this.props.change(false)
            this.props.address.get_Address()
        } else if (this.props.num === 0) {
            let { name, phone, value, detailed_address, flag } = this.state
            let payload = {
                address: detailed_address,//详细地址
                city_id: value[1],//市
                district_id: value[2],//区
                is_default: flag,//是否默认
                mobile: phone,//电话
                name: name,//名字
                province_id: value[0],//省份
                id: this.props.item.id
            }
            this.props.address.add_Address(payload)
            this.props.change(false)
            this.props.address.get_Address()
        }
    }
    componentDidMount() {
        if (this.props.num === 1) {
            this.setState({ flag: false })
        } else if (this.props.num === 0) {
            this.setState({
                flag: Boolean(this.props.item.is_default),
                name: this.props.item.name,
                phone: this.props.item.mobile,
                detailed_address: this.props.item.address,
                value:[`${this.props.item.province_id}`,`${this.props.item.city_id}`,`${this.props.item.district_id}`]
            })
        }
    }
}
export default createForm()(Address)