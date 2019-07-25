import React from 'react'
import './classification.scss'
import Footer from '../../components/footer/footer'
import {inject,observer} from 'mobx-react'
// @inject("classification")
// @observer
class Classification extends React.Component{
    render(){
        return(
            <div className='classification'>
                <div className='content'>分类</div>
                <Footer></Footer>
            </div>
        )
    }
}
export default Classification