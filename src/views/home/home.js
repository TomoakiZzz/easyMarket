import React from 'react'
import './home.scss'
import Swiper from "swiper"
import { inject, observer } from 'mobx-react'
import { Link } from "react-router-dom"
import Foot from "../../components/footer/footer"
import CateGory from "../../components/cateGory/cateGory"
import "swiper/dist/css/swiper.min.css"
import LazyLoad from "../../components/lazyLoad/lazyLoad"
const loading = require("../../utils/loading.jpg")
@inject("home")
@observer

class Home extends React.Component {
    state = {
        isShow: true
    }
    render() { 
        let { isShow } = this.state
        return (
            <div className='home' ref="easyHome">
                <div className="swiper-container banner" ref="home_ban">
                    <div className={`swiper-wrapper ${isShow ? 'bannerSkeleton' : ''}`}>
                        {this.props.home.homeData.banner && this.props.home.homeData.banner.map(item => <div className="swiper-slide" key={item.id}>
                            <img src={loading} data-src={item.image_url} />
                        </div>)}
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
                <div className={`channelWrap ${isShow ? 'channeSkeleton' : ''}`}>
                    {this.props.home.homeData.channel && this.props.home.homeData.channel.map(item => <Link to={`/categorys/${item.id}`} key={item.id} className="channelItem">
                        <img src={loading} data-src={item.icon_url} />
                        <div>{item.name}</div>
                    </Link>)}
                </div>
                <div className="brandBox">
                    <div className="brandTitle">
                        品牌制造商直供
                    </div>
                    <div className="brandWrap">
                        {this.props.home.homeData.brandList && this.props.home.homeData.brandList.map(item => <Link className="brandItem" to={`/brandDetail/${item.id}`} key={item.id}>
                            <div className="brandItemName">{item.name}</div>
                            <div className="brandItemMinPrice">{item.floor_price}元起</div>
                            <img src={loading} data-src={item.new_pic_url} />
                        </Link>)}
                    </div>
                </div>
                <div className="newGoodsBox">
                    <div className="newGoodsTitle">
                        新品首发
                    </div>
                    <div className="newGoodsWrap">
                        {this.props.home.homeData.newGoodsList && this.props.home.homeData.newGoodsList.map(item => <Link className="newGoodsItem" to={`/goods/${item.id}`} key={item.id}>
                            <img src={loading} data-src={item.list_pic_url} />
                            <div className="newGoodsName">{item.name}</div>
                            <div className="newGoodsPrice">￥{item.retail_price}</div>
                        </Link>)}

                    </div>
                </div>
                <div className="hotGoodsBox">
                    <div className="hotGoodsTitle">
                        人气推荐
                    </div>
                    <div className="hotGoodsWrap">
                        {this.props.home.homeData.hotGoodsList && this.props.home.homeData.hotGoodsList.map(item => <Link className="hotGoodsItem" to={`goods/${item.id}`} key={item.id}>
                            <img src={loading} data-src={item.list_pic_url} />
                            <div className="hotGoodsInfos">
                                <div className="hotGoodsName">{item.name}</div>
                                <div className="hotGoodsInfo">{item.goods_brief}</div>
                                <div className="hotGoodsPrice">￥{item.retail_price}</div>
                            </div>
                        </Link>)}
                    </div>
                </div>
                <div className="topGoodsBox">
                    <div className="topGoodsTitle">
                        专题精选
                    </div>
                    <div className="topGoodsWrap">
                        <div className="swiper-container topGoodsBan" ref="top_goods_banner">
                            <div className="swiper-wrapper">
                                {this.props.home.homeData.topicList && this.props.home.homeData.topicList.map((item, index) => <div className="swiper-slide" key={item.id}>
                                    <Link className='topGoodsItem' to={`/topicDetail/${item.id}`}>
                                        <img src={loading} data-src={item.item_pic_url} />
                                        <div className="topGoodSubTitle">
                                            {item.title}
                                            <span className="topGoodPrice">￥{item.price_info}元起</span>
                                        </div>
                                        <div className="topGoodTitle">
                                            {item.subtitle}
                                        </div>
                                    </Link>
                                </div>)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cateGoryBox">
                    {this.props.home.homeData.categoryList && this.props.home.homeData.categoryList.map(item => <CateGory goodsData={item} key={item.id} />)}
                </div>
                <Foot />
            </div>
        )
    }
    componentDidMount() {
        let This = this
        async function init(This) {
            await This.props.home.getDefaultData()
            This.setState({
                isShow:false
            })
            let ban1 = new Swiper(This.refs.home_ban, {
                loop: true,
                autoplay: {
                    delay: 1500
                },
                pagination: {
                    el: '.swiper-pagination',
                },
            });
            let ban2 = new Swiper(This.refs.top_goods_banner, {
                loop: true,
                // slidesPerView : 3, 
                spaceBetween: 10,
                slidesPerView: 'auto',
                slidesOffsetBefore: 28,
            })
            LazyLoad(This.refs.easyHome)

        }
        init(This)

    }
}
export default Home