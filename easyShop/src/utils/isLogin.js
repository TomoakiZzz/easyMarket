import React from 'react'
import {getToken} from './index'
const isLogin=(Com) =>{
    return class extends React.Component{
        state = {
            islogin:false
        }
        render(){
            return this.state.islogin ? <Com {...this.props}/> : null
        }
        componentDidMount(){
            let {history} = this.props;
            if(getToken()){
                this.setState({islogin:true})
            }else{
                history.push('/login')
            }
        }
    }
}
export default isLogin