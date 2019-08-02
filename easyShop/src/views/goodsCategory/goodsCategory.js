import React, { Component } from 'react'
import Head from "../../components/head/head"
import { Tabs } from 'antd-mobile';
import "./goodsCategory.scss"
import { inject, observer } from 'mobx-react'
import { Link } from "react-router-dom"
import BScroll from 'better-scroll'
@inject("commodity")
@observer
class goodsCategory extends Component {
    state = {
        headTitle: "奇趣分类",
        categorysId: ''
    }
    render() {
        let { headTitle } = this.state
        let tabs = []
        this.props.commodity.Navtab.brotherCategory && this.props.commodity.Navtab.brotherCategory.map(item => {
            tabs.push({ title: item.name, id: item.id })

        })
        return (
            <div className="noTabPageContent goodListContener">
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
                <div className="goodsListMain" ref="Bscroll">
                    <div className="goodsList">
                        {this.props.commodity.goodsLists && this.props.commodity.goodsLists.map(item => <Link className="goodsItem" to={`/goods/${item.id}`} key={item.id}>
                            <div className="goodsItemImg">
                                <img src={item.list_pic_url} />
                            </div>
                            <div className="goodsItemName">{item.name}</div>
                            <div className="goodsItemPrice">￥{item.retail_price}元</div>
                        </Link>)}
                        {console.log(this.props.commodity.hasMore)}
                        {this.props.commodity.hasMore ? <div className="scrollMsg">正在加载...</div> : null}
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        //请求nav数据
        this.setState({
            categorysId: this.props.match.params.id
        })
        this.props.commodity.getTabData({ id: this.props.match.params.id })
        this.props.commodity.getGoodsLists({ categoryId: this.props.match.params.id, page: this.props.commodity.page, size: 10 })
    }
    componentDidUpdate() {
        if (this.refs.Bscroll && !this.scroll) {
            this.scroll = new BScroll(this.refs.Bscroll, {
                click: true,
                probeType: 2,
                pullDownRefresh: {
                    threshold: 50,
                    stop: 20
                },
                pullUpLoad: {
                    threshold: 0
                },
            })
            this.scroll.on('pullingUp', async () => {
                console.log(123)
                await this.props.commodity.getGoodsLists({ categoryId: this.state.categorysId, page: this.props.commodity.page + 1, size: 10 })
                this.scroll.finishPullUp();
                if (this.props.commodity.goodsLists && this.props.commodity.goodsLists.length > 10) {
                    this.scroll.refresh()
                }
            })

            this.scroll.on('pullingDown', async () => {
                await this.props.commodity.getGoodsLists({ categoryId: this.state.categorysId, page: 1, size: 10 })
                this.scroll.finishPullDown()
            })
        }

    }
    handTabs(tab, index) {
        console.log(tab, index)
        this.setState({
            categorysId: tab.id
        })
        this.props.commodity.getTabData({ id: tab.id })
        this.props.commodity.getGoodsLists({ categoryId: tab.id, page: 1, size: 10 })
    }
}
export default goodsCategory