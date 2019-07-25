import React from 'react'
import './special.scss'
import Footer from '../../components/footer/footer'
import {inject,observer} from 'mobx-react'
// @inject("special")
// @observer
class Special extends React.Component{
    render(){
        return(
            <div className='special'>
                <div className='content'>专题</div>
                <Footer></Footer>
            </div>
        )
    }
}
export default Special