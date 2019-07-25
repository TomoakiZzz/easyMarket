import React from 'react'
import './main.scss'
import Footer from '../../components/footer/footer'
import { Route, Switch, Redirect } from 'react-router-dom'
class Main extends React.Component{
    render(){
        return(
            <div className='main'>
                <div className='content'>1111</div>
                <Footer></Footer>
            </div>
        )
    }
}
export default Main