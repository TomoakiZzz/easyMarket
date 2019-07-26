import React from 'react'
import './my.scss'
import Footer from '../../components/footer/footer'
import {inject,observer} from 'mobx-react'
import Islogin from '../../utils/isLogin'
import {removeToken} from '../../utils/index'
@inject("my")
@observer
class My extends React.Component{
    render(){
        return(
            <div className='my'>
                <div className='content'>
                    <div className='userMsgWrap'>
                        <div className='userLogo'></div>
                        <div className='userMsgs'>
                            <div>12431234</div>
                            <div>adasdas</div>
                        </div>
                    </div>
                    <div className='userPower'>
                        <div style={{color: "rgba(33, 150, 243)"}}>
                            <i className="iconfont icon-gongzuo"  style={{color: "rgba(33, 150, 243)"}}></i>
                            <div>我的收藏</div>
                        </div>
                        <div style={{color: "rgba(33, 150, 243)"}}>
                            <i className="iconfont icon-gongzuo"  style={{color: "rgba(33, 150, 243)"}}></i>
                            <div>地址管理</div>
                        </div>
                        <div>
                            <i className="iconfont icon-gongzuo" ></i>
                            <div>我的订单</div>
                        </div>
                        <div>
                            <i className="iconfont icon-gongzuo" ></i>
                            <div>周末拼单</div>
                        </div>
                        <div>
                            <i className="iconfont icon-gongzuo" ></i>
                            <div>优惠券</div>
                        </div>
                        <div>
                            <i className="iconfont icon-gongzuo" ></i>
                            <div>优选购</div>
                        </div>
                        <div>
                            <i className="iconfont icon-gongzuo" ></i>
                            <div>我的红包</div>
                        </div>
                        <div>
                            <i className="iconfont icon-gongzuo" ></i>
                            <div>会员plus</div>
                        </div>
                        <div>
                            <i className="iconfont icon-gongzuo" ></i>
                            <div>邀请返利</div>
                        </div>
                        <div>
                            <i className="iconfont icon-gongzuo" ></i>
                            <div>意见反馈</div>
                        </div>
                        <div>
                            <i className="iconfont icon-gongzuo" ></i>
                            <div>客服咨询</div>
                        </div>
                        <div>
                            <i className="iconfont icon-gongzuo" ></i>
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
}
export default Islogin(My)