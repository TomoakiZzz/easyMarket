import React from 'react'
import './my.scss'
import Footer from '../../components/footer/footer'
import {inject,observer} from 'mobx-react'
@inject("my")
@observer
class My extends React.Component{
    render(){
        return(
            <div className='my'>
                <div className='content'>1111</div>
                <Footer></Footer>
            </div>
        )
    }
}
export default My