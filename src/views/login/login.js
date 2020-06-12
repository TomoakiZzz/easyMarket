import React from 'react'
import './login.scss'
import { List, InputItem} from 'antd-mobile';
import { createForm } from 'rc-form';
import { inject, observer } from 'mobx-react'
import { setToken } from "../../utils/index"
@inject("login")
@observer
class Login extends React.Component {
    state = {
        mobile: "",
        password: ""
    }
    onChange = (mobile) => {
        this.setState({
            mobile,
        });
    }
    onChanges = (password) => {
        this.setState({
            password,
        });
    }
    render() {
        const { getFieldProps } = this.props.form;
        const { mobile, password } = this.state
        return (
            <div className='loginBox'>
                <div className='logo'>
                    <img src='http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png' />
                </div>
                <List className='loginMain'>
                    <InputItem
                        {...getFieldProps('phone')}
                        type="text"
                        placeholder="请输入电话号码"
                        className='phone'
                        clear
                        value={mobile}
                        onChange={this.onChange}
                    ></InputItem>
                    <InputItem
                        {...getFieldProps('password')}
                        type="password"
                        placeholder="请输入登录密码"
                        className='pwd'
                        clear
                        maxLength='8'
                        value={password}
                        onChange={this.onChanges}
                    ></InputItem>
                    <div className='button'>
                        <button onClick={this.click.bind(this)}>登录</button>
                    </div>
                </List>
            </div>
        )
    }
    click() {
        let { mobile, password } = this.state
        let {history} = this.props
        let This =this
        //传参数给modules
        async function init(This){
            await This.props.login.Login({ mobile, password })
            if ((This.props.login.homeData && This.props.login.homeData.errno) ===0 ) {
                setToken(This.props.login.homeData.data && This.props.login.homeData.data.sessionKey)
                history.push('/home')
            }
        }
        init(This)
    }
}
export default createForm()(Login)