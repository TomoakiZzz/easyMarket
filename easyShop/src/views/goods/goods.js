import React, { Component } from 'react'
import { inject, observer } from "mobx-react"
import Head from "../../components/head/head"
import Swiper from "swiper"
import "swiper/dist/css/swiper.min.css"
import "./goods.scss"
import "../../fonts/iconfont.css"
import { Link } from "react-router-dom"
import { Modal, List, Button, WhiteSpace, WingBlank, Icon } from 'antd-mobile';
@inject("goods")
@observer
class goods extends Component {
    state = {
        modal1: false,
        modal2: false,
        isLike: false,
        count: 0
    };
    render() {
        let { isLike, count } = this.state
        return (
            <div className="noTabPageContent">
                <div className="goodsPage">
                    <Head headTitle={this.props.goods.goodsDetailData.info && this.props.goods.goodsDetailData.info.name} />
                    <div className="swiper-container goods_banner" ref="goods_banner">
                        <div className="swiper-wrapper">
                            {this.props.goods.goodsDetailData.gallery && this.props.goods.goodsDetailData.gallery.map(item =>
                                <div className="swiper-slide" key={item.id}>
                                    <img src={item.img_url} />
                                </div>)}

                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                    <ul className="serviceList">
                        <li><span>★</span>30天无忧退货</li>
                        <li><span>★</span>48小时快速退款</li>
                        <li><span>★</span>满88元免邮费</li>
                    </ul>
                    <div className="goodsMsgWrap">
                        <div className="goodsNameTitle">{this.props.goods.goodsDetailData.info && this.props.goods.goodsDetailData.info.name}</div>
                        <div className="goodsNameSubTitle">{this.props.goods.goodsDetailData.info && this.props.goods.goodsDetailData.info.goods_brief}</div>
                        <div className="goodsPriceTitle">￥{this.props.goods.goodsDetailData.info && this.props.goods.goodsDetailData.info.retail_price}</div>
                         {(this.props.goods.goodsDetailData.brand && this.props.goods.goodsDetailData.brand.name) ? <div className="goodsBrandTitle">
                            <div>{this.props.goods.goodsDetailData.brand && this.props.goods.goodsDetailData.brand.name}</div>
                        </div> : null} 
                        
                    </div>
                    <div className="goodsSize" onClick={this.showModal('modal2')}>
                        <div></div>
                        <div>x{count}</div>
                        <div>选择规格<i className="iconfont icon-angle-right"></i></div>
                    </div>

                    <Modal
                        popup
                        visible={this.state.modal2}
                        onClose={this.onClose('modal2')}
                        animationType="slide-up"
                    >
                        <div className="goodsSizeDo">
                            <div className="goodsSizeSetMsg">
                                <img src={this.props.goods.goodsDetailData.gallery && this.props.goods.goodsDetailData.gallery[0] && this.props.goods.goodsDetailData.gallery[0].img_url} />
                                <div className="gooodsSizePriceAndSize">
                                    <div><span>￥{this.props.goods.goodsDetailData.info && this.props.goods.goodsDetailData.info.retail_price}</span></div>
                                    <div><span>{this.props.goods.goodsDetailData.info && this.props.goods.goodsDetailData.info.goods_number}件</span></div>
                                    <div>已选择:<br /></div>
                                </div>
                                <div className="closeModel" onClick={this.onClose('modal2')}>
                                    <i className="iconfont icon-guanbi-01"></i>
                                </div>
                            </div>
                            <div className="goodsSizeWrap">
                                <div className="goodsSizeItem">
                                    <div className="goodsSizeItemName">数量</div>
                                    <div className="goodsSizeListWrap">
                                        <div className="goodsBuyCount">
                                            <div className="onePx_border" onClick={this.handGoodsCount.bind(this, count - 1, 0)}>-</div>
                                            <div className="onePx_border">{count}</div>
                                            <div className="onePx_border" onClick={this.handGoodsCount.bind(this, count + 1, 1)}>+</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="goodsDoWrap">
                            <div onClick={this.handAddCar.bind(this)}>加入购物车</div>
                            <div>立即下单</div>
                        </div>
                    </Modal>
                    <div className="goodsComment">
                        <div className="goodsCommentTitle">
                            <div>评论({this.props.goods.goodsDetailData.comment && this.props.goods.goodsDetailData.comment.count})</div>
                            <div><Link to={`/comment/${this.props.match.params.id}`} >查看全部<i className="iconfont icon-chevron-thin-right"></i></Link></div>

                        </div>
                        <div className="commentList">
                            <div className="commentItem">
                                <div className="userInfo">
                                    <div>匿名用户</div>
                                    <div>{Object.keys(this.props.goods.goodsDetailData).length && this.props.goods.goodsDetailData.comment.data.add_time}</div>
                                </div>
                                <div className="userComment">
                                    {Object.keys(this.props.goods.goodsDetailData).length && this.props.goods.goodsDetailData.comment.data.content}
                                </div>
                                <div className="commentPicList">
                                    {Object.keys(this.props.goods.goodsDetailData).length && Object.keys(this.props.goods.goodsDetailData.comment.data).length && this.props.goods.goodsDetailData.comment.data.pic_list.map(item => <img src={item.pic_url} key={item.id} />)}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="goodsAttribute">
                        <div className="goodsAttributeLine">商品参数</div>
                        <div className="goodsAttributeList">
                            {this.props.goods.goodsDetailData.attribute && this.props.goods.goodsDetailData.attribute.map(item => <div className="goodsAttributeItem" key={item.value}>
                                <div className="attributeLabel">{item.name}</div>
                                <div className="attributeContent">{item.value}</div>
                            </div>)}
                        </div>
                    </div>
                    <div className="topicDetailImg" dangerouslySetInnerHTML={{ __html: this.props.goods.goodsDetailData.info && this.props.goods.goodsDetailData.info.goods_desc }}></div>
                    <div className="goodsAttribute">
                        <div className="goodsAttributeLine">常见问题</div>
                        {this.props.goods.goodsDetailData.issue && this.props.goods.goodsDetailData.issue.map(item => <div className="problemWrap" key={item.id}>
                            <div className="problemLabel">
                                <span>√</span>
                                {item.question}
                            </div>
                            <div className="problemContent">{item.answer}</div>
                        </div>)}

                    </div>
                    <div className="goodsAttribute">
                        <div className="goodsAttributeLine">大家都在看</div>
                    </div>
                    <div className="goodsList">
                        {this.props.goods.goodsRelated.goodsList && this.props.goods.goodsRelated.goodsList.map(item => <Link className="goodsItem" to={`/goods/${item.id}`} key={item.id}>
                            <div className="goodsItemImg">
                                <img src={item.list_pic_url} />
                            </div>
                            <div className="goodsItemName">{item.name}</div>
                            <div className="goodsItemPrice">￥{item.retail_price}元</div>
                        </Link>)}
                    </div>
                    <div className="goodsPageDo">
                        <div className={`isLike ${isLike ? "like" : ""}`}
                            onClick={this.handLink.bind(this, !isLike)}>{isLike ? '★' : '☆'}</div>
                        <div className="cartNum" onClick={()=>{this.props.history.push("/ShoppingCart")}}><i className="iconfont icon-gouwuche"><span>{this.props.goods.goodsCounts && this.props.goods.goodsCounts}</span></i></div>
                        <div className="addCart" onClick={this.showModal('modal2')}>加入购物车</div>
                        <div className="payGoods">立即购买</div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        let This = this
        async function init(This) {
            await This.props.goods.getGoodsDetail({ id: This.props.match.params.id })
            await This.props.goods.getGoodsRelated({ id: This.props.match.params.id })
            await This.props.goods.getGoodsCounts()
            let swiper = new Swiper(This.refs.goods_banner, {
                loop: true,
                autoplay: {
                    delay: 2000
                },
                pagination: {
                    el: '.swiper-pagination',
                },
            })
        }
        init(This)
    }
    showModal = key => (e) => {
        e.preventDefault(); // 修复 Android 上点击穿透
        this.setState({
            [key]: true,
        });
    }
    onClose = key => () => {
        this.setState({
            [key]: false,
        });
    }
    handLink(flag) {
        this.setState({ isLike: flag })
    }
    handGoodsCount(num, stat) {
        if (stat === 0 && num >= 0) {
            this.setState({ count: num })
        } else if (num >= 0) {
            this.setState({ count: num })
        }
    }
    handAddCar(){
        this.props.goods.addGoodsToShopCar({
            goodsId:this.props.match.params.id,
            number:this.state.count,
            productId:this.props.goods.goodsDetailData.productList && this.props.goods.goodsDetailData.productList[0].id})
    }
}
export default goods