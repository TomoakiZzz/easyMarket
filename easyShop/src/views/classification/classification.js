import React from 'react'
import './classification.scss'
import Footer from '../../components/footer/footer'
import { Tabs } from 'antd-mobile';
import { Link } from "react-router-dom"
import { inject, observer } from 'mobx-react'
@inject("classification")
@observer
class Classification extends React.Component {
    render() {
        let tabs = []
        this.props.classification.tabs.categoryList && this.props.classification.tabs.categoryList.map(item => {
            tabs.push({ title: item.name, key: item.id })
        })
        return (
            <div className='tabPageContent'>
                <div className='searchWrap'>
                    <div className="searchInput" onClick={()=>{this.props.history.push("/search")}}>
                        <i className="fa fa-search"></i>
                        <span>搜索商品，共{this.props.classification.goodsCount}款好物</span>
                    </div>
                </div>
                <div id="tabsWrap">
                    <div style={{ height: "378px" }}>
                        <Tabs tabs={tabs}
                            initialPage={'t2'}
                            tabBarPosition="right"
                            tabDirection="vertical"
                            prefixCls="height:11.1111%"
                            renderTabBar={props => <Tabs.DefaultTabBar {...props} page={tabs.length} />}
                            onTabClick={(tab, index) => this.handTabs(tab, index)}
                        ></Tabs>
                    </div>
                </div>
                <div className="categogContet">
                    <div className="categoryWrap"
                        style={{ backgroundImage: `url(${this.props.classification.currentCategory.currentCategory && this.props.classification.currentCategory.currentCategory.wap_banner_url})` }}>
                        {this.props.classification.currentCategory.currentCategory && this.props.classification.currentCategory.currentCategory.front_name}
                    </div>
                    <div className="categoryTitle">
                        <div></div>
                        {this.props.classification.currentCategory.currentCategory && this.props.classification.currentCategory.currentCategory.name}分类
                        <div></div>
                    </div>
                    <div className="subCategory">
                        {this.props.classification.currentCategory.currentCategory && this.props.classification.currentCategory.currentCategory.subCategoryList.map(item => <Link className="subCategoryItem" to={`/categorys/${item.id}`} key={item.id}>
                            <img src={item.wap_banner_url} />
                            <div className="subCategoryItemName">{item.name}</div>
                        </Link>)}
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
    componentDidMount() {
        this.props.classification.getTabsData()
        this.props.classification.getGoodsCount()
    }
    handTabs(tab, index) {
        this.props.classification.getCatalogCurrents({ id: tab.key })
    }

}
export default Classification