import React from 'react'
import './footer.scss'
import { NavLink } from 'react-router-dom'
import '../../fonts/iconfont.css'
class Footer extends React.Component {
    render() {
        return (
            <div className='footer'>
                <div className='tabItem'>
                    <NavLink to='/home'>
                        <div className='itemIcon'>
                            <i className="iconfont icon-shouye"></i>
                        </div>
                        <div className='itemName'>首页</div>
                    </NavLink>
                </div>
                <div className='tabItem'>
                    <NavLink to='/special'>
                        <div className='itemIcon'>
                            <i className="iconfont icon-fuzhi"></i>
                        </div>
                        <div className='itemName'>专题</div>
                    </NavLink>
                </div>
                <div className='tabItem'>
                    <NavLink to='/classification'>
                        <div className='itemIcon'>
                            <i className="iconfont icon-gongzuo"></i>
                        </div>
                        <div className='itemName'>分类</div>
                    </NavLink>
                </div>
                <div className='tabItem'>
                    <NavLink to='/shoppingcart'>
                        <div className='itemIcon'>
                            <i className="iconfont icon-gouwuche"></i>
                        </div>
                        <div className='itemName'>购物车</div>
                    </NavLink>
                </div>
                <div className='tabItem'>
                    <NavLink to='/my'>
                        <div className='itemIcon'>
                            <i className="iconfont icon-wode"></i>
                        </div>
                        <div className='itemName'>我的</div>
                    </NavLink>
                </div>
            </div>
        )
    }
}
export default Footer