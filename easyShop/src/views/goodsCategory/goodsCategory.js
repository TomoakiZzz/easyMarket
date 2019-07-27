import React, { Component } from 'react'
import Head from "../../components/head/head"
import { Tabs, WhiteSpace } from 'antd-mobile';
import "./goodsCategory.scss"
import { inject, observer } from 'mobx-react'
@inject("commodity")
@observer
class goodsCategory extends Component {
    state = {
        headTitle: "奇趣分类",
    }
    render() {
        
        let { headTitle} = this.state
      
        
        let tabsData = this.props.commodity.Navtab.currentCategory  
        console.log(tabsData)
        let tabs = []
        
        this.props.commodity.Navtab.brotherCategory && this.props.commodity.Navtab.brotherCategory.map(item => {
            console.log(item.name)
            tabs.push({ title: item.name })

        })
        return (
            <div className="noTabPageContent">
                <Head headTitle={headTitle} />
                <div className="tabWrap">
                    <Tabs tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={5} />}></Tabs>
                </div>
                <div className="categoryDetail">
                    {/* <div>{tabsData.name}</div> */}
                    {/* <div>{this.props.commodity.Navtab.currentCategory.front_name && this.props.commodity.Navtab.currentCategory.front_name}</div> */}
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.commodity.getTabData({ id: this.props.match.params.id })
        
    }
}
export default goodsCategory