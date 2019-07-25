import React from 'react'
import './ShoppingCart.scss'
import Footer from '../../components/footer/footer'
import {inject,observer} from 'mobx-react'
// @inject("shoppingcart")
// @observer
class ShoppingCart extends React.Component{
    render(){
        return(
            <div className='shoppingcart'>
                <div className='content'>购物车</div>
                <Footer></Footer>
            </div>
        )
    }
}
export default ShoppingCart