import React from 'react'
import './my.scss'
import Footer from '../../components/footer/footer'
import Islogin from '../../utils/isLogin'
import {removeToken} from '../../utils/index'
import {getToken} from "../../utils/index"
import "../../icon/iconfont.css"
class My extends React.Component{
    render(){
        return(
            <div className='my'>
                <div className='content'>
                    <div className='userMsgWrap'>
                        <div className='userLogo'></div>
                        <div className='userMsgs'>
                            <div>{window.localStorage.getItem("userName") || ''}</div>
                            <div>普通用户</div>
                        </div>
                    </div>
                    <div className='userPower'>
                        <div style={{color: "rgba(33, 150, 243)"}} onClick={this.myCollection.bind(this)}>
                            <i className="iconfont icon-wodeshoucang_l"  style={{color: "rgba(33, 150, 243)"}}></i>
                            <div>我的收藏</div>
                        </div>
                        <div style={{color: "rgba(33, 150, 243)"}} onClick={this.addressManagement.bind(this)}>
                            <i className="iconfont icon-iconfontdizhi"  style={{color: "rgba(33, 150, 243)"}}></i>
                            <div>地址管理</div>
                        </div>
                        <div>
                            <i className="iconfont icon-dingdan" ></i>
                            <div>我的订单</div>
                        </div>
                        <div>
                            <i className="iconfont icon-rili" ></i>
                            <div>周末拼单</div>
                        </div>
                        <div>
                            <i className="iconfont icon-youhuiquan" ></i>
                            <div>优惠券</div>
                        </div>
                        <div>
                            <i className="iconfont icon-youxuan" ></i>
                            <div>优选购</div>
                        </div>
                        <div>
                            <i className="iconfont icon-hongbao" ></i>
                            <div>我的红包</div>
                        </div>
                        <div>
                            <i className="iconfont icon-huiyuan" ></i>
                            <div>会员plus</div>
                        </div>
                        <div>
                            <i className="iconfont icon-yaoqing" ></i>
                            <div>邀请返利</div>
                        </div>
                        <div>
                            <i className="iconfont icon-yijianfankui" ></i>
                            <div>意见反馈</div>
                        </div>
                        <div>
                            <i className="iconfont icon-kefu" ></i>
                            <div>客服咨询</div>
                        </div>
                        <div>
                            <i className="iconfont icon-baohu" ></i>
                            <div>账户安全</div>
                        </div>
                    </div>
                    <div className='loginOut' onClick={this.click.bind(this)}>退出登录</div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
    click(){
        removeToken()
        window.location.reload()
    }
    myCollection(){
        let {history} = this.props
        history.push('/myCollection')
    }
    addressManagement(){
        let {history} = this.props
        history.push('/addressManagement')
    }
}
export default Islogin(My)