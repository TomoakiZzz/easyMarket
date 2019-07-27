import React, { Component } from 'react'
import Head from "../../components/head/head"
import { Tabs, WhiteSpace } from 'antd-mobile';
import "./goodsCategory.scss"
import { inject, observer } from 'mobx-react'
import { Link } from "react-router-dom"
@inject("commodity")
@observer
class goodsCategory extends Component {
    state = {
        headTitle: "奇趣分类",
    }
    render() {
        let { headTitle } = this.state
        let tabs = []
        this.props.commodity.Navtab.brotherCategory && this.props.commodity.Navtab.brotherCategory.map(item => {
            // console.log(item.name)
            tabs.push({ title: item.name })

        })
        return (
            <div className="noTabPageContent">
                <Head headTitle={headTitle} />
                <div className="tabWrap">
                    <Tabs tabs={tabs}
                        initialPage={this.props.commodity.Navtab.brotherCategory && this.props.commodity.Navtab.brotherCategory.findIndex(item => item.id == this.props.match.params.id)}
                        onTabClick={(tab, index) => this.handTabs(tab, index)}
                        renderTabBar={props => <Tabs.DefaultTabBar {...props} page={5} />}>
                    </Tabs>
                </div>
                <div className="categoryDetail">
                    <div>{this.props.commodity.Navtab.currentCategory && this.props.commodity.Navtab.currentCategory.name}</div>
                    <div>{this.props.commodity.Navtab.currentCategory && this.props.commodity.Navtab.currentCategory.front_name}</div>
                </div>
                <div className="goodsList">
                    {this.props.commodity.goodsLists.goodsList && this.props.commodity.goodsLists.goodsList.map(item => <Link className="goodsItem" to="/goods" key={item.id}>
                        <div className="goodsItemImg">
                            <img src={item.list_pic_url} />
                        </div>
                        <div className="goodsItemName">{item.name}</div>
                        <div className="goodsItemPrice">￥{item.retail_price}元</div>
                    </Link>)}

                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.commodity.getTabData({ id: this.props.match.params.id })
        this.props.commodity.getGoodsLists({ categoryId: this.props.match.params.id, page: 1, size: 1000 })
    }
    handTabs(tab, index) {
        console.log(tab, index)
        let id = this.props.commodity.Navtab.brotherCategory && this.props.commodity.Navtab.brotherCategory.find((item, num) => num === index)
        this.props.commodity.getTabData({ id: id.id })
        this.props.commodity.getGoodsLists({ categoryId: id.id, page: 1, size: 1000 })
    }
}
export default goodsCategory