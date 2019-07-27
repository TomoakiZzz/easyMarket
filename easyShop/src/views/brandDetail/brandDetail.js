import React, { Component } from 'react'
import "./brandDetail.scss"
import Head from "../../components/head/head"
import { inject, observer } from 'mobx-react'
import {Link} from "react-router-dom"
@inject("brandDetail")
@observer
class brandDetail extends Component {
    state = {
        headTitle: ''
    }
    render() {
        return (
            <div className="noTabPageContent">
                <Head headTitle={this.props.brandDetail.brand.brand && this.props.brandDetail.brand.brand.name} />
                <div className="brandDetail">
                    <img src={this.props.brandDetail.brand.brand && this.props.brandDetail.brand.brand.list_pic_url} />
                    <div className="breadDesc">{this.props.brandDetail.brand.brand && this.props.brandDetail.brand.brand.simple_desc}</div>
                </div>
                <div className="brandGoodsList">
                    <div className="goodsListWrap">
                        <div className="goodsList">
                            {this.props.brandDetail.goodsLists.goodsList && this.props.brandDetail.goodsLists.goodsList.map(item=><Link to="/goods" className="goodsItem" key={item.id}>
                                <div className="goodsItemImg">
                                    <img src={item.list_pic_url}/>
                                </div>
                                <div className="goodsItemName">{item.name}</div>
                                <div className="goodsItemPrice">￥{item.retail_price}元</div>
                            </Link>)}
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.brandDetail.getBrandData({ id: this.props.match.params.id })
        this.props.brandDetail.getBrandGoods({ brandId: this.props.match.params.id ,page:1,size:1000})
    }
}
export default brandDetail