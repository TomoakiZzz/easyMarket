import React, { Component } from 'react'
import './myAddress.scss'
import {inject,observer} from 'mobx-react'
@inject("address")
@observer
class MyAddress extends Component {
    state = {
        flag: false,
        num:0
    }
    render() {
        let { item } = this.props
        let { flag,num } = this.state
        // console.log(item)
        return (
            <>
                <div className='addressItem'>
                    <div className={item.is_default === 1 ? "isChooseAddress" : null}></div>
                    <div className='addressMsg'>
                        <div className='concatName'>{item.name}</div>
                        <div className='addressDetail' onClick={() => {
                            this.props.changes({flag:true,item:item,num:num})
                        }}>
                            <div className='concatPhone'>{item.mobile}</div>
                            <div className='concatAddress'>{item.full_region}</div>
                            <div className='concatAddress'>{item.address}</div>
                        </div>
                        <div className='deleteAddress' onClick={() => this.setState({flag:true})}>
                            <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAALVBMVEVmZmZtbW1ubm5wcHCJiYmKioqOjo6Tk5OUlJSVlZXm5ubn5+fv7+/y8vL////PAON/AAAAa0lEQVQ4y2N4hwsw0F8mgIGBgRWrDAMIoMokMKADNoIy6O5gwCAHgUwoThkGEmWexiFTyDIP+JCpUZmBkXnqh0wRH9shA5dGBe4hSbxlRJJpqEGSOcmBJLMYJS9aIcm8noQkobluoModNAAADGfUnhuYO1kAAAAASUVORK5CYII=' />
                        </div>
                    </div>
                </div>

                {
                    flag ? <>
                        <div className='am-modal-mask'></div>
                        <div className='am-modal-wrap '>
                            <div className='am-modal am-modal-transparent'>
                                <div className='am-modal-content'>
                                    <div className='am-modal-header'>
                                        <div className='class="am-modal-title"'>删除</div>
                                    </div>
                                    <div className='am-modal-body'>
                                        <div className='am-modal-alert-content'>您确定删除改地址吗？</div>
                                    </div>
                                    <div className='am-modal-footer'>
                                        <div className='am-modal-button-group-h am-modal-button-group-normal'>
                                            <button className='am-modal-button' onClick={() => this.setState({flag:false})}>否</button>
                                            <button className='am-modal-button aa' onClick={this.dian.bind(this,item)}>是</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </> : null
                }
            </>
        )
    }
    dian(item){
        this.props.address.del_Address({id:item.id})
        this.setState({flag:false})
    }
}
export default MyAddress