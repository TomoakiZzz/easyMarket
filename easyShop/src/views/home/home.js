import React from 'react'
// import './login.scss'

import {inject,observer} from 'mobx-react'
@inject("home")
@observer
class Home extends React.Component {
    render(){
        console.log(this.props.home)
        return (
            <div className='home'>

            </div>
        )
    }
}
export default Home