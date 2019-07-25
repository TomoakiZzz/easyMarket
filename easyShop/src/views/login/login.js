import React from 'react'
import './login.scss'

// import { inject, observer } from 'mobx-react'
// @inject("login")
// @observer
class Login extends React.Component {
    render() {
        return (
            <div className='loginBox'>
                <div className='logo'>
                    <img src='http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png' />
                </div>
                <div className='loginMain'>
                    <div className='phone'>
                        <input type='text' placeholder='请输入电话号码' />
                    </div>
                    <div className='pwd'>
                        <input type='password' placeholder='请输入登录密码' />
                    </div>
                    <div className='button'>
                        <button>登录</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login