import React from 'react'
import './my.scss'
import {inject,observer} from 'mobx-react'
@inject("my")
@observer
class My extends React.Component{
    render(){
        return(
            <div></div>
        )
    }
}
export default My