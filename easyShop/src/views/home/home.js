import React from 'react'
import './home.scss'
import "swiper/dist/css/swiper.min.css"
import Swiper  from "swiper"
import {inject,observer} from 'mobx-react'
import {Link} from "react-router-dom"
import Foot from "../../components/footer/footer"
@inject("home")
@observer
class Home extends React.Component {
    state={
        data:{}
    }
   
    render(){
        console.log(this.state.data)
        let {data} = this.state
        return (
            <div className='home'>
                <div className="swiper-container banner" ref="home_ban">
                    <div className="swiper-wrapper">
                    {data.banner && data.banner.map(item=><div className="swiper-slide" key={item.id}>
                    <img src={item.image_url}/>
                    </div>)}
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
                <div className="channelWrap">
                    {data.channel && data.channel.map(item=><Link to="/categorys" key={item.id} className="channelItem">
                        <img src={item.icon_url}/>
                        <div>{item.name}</div>
                    </Link>)}
                </div>
                <div className="brandBox">
                    <div className="brandTitle">
                    品牌制造商直供
                    </div>
                    <div className="brandWrap">
                        {data.brandList && data.brandList.map(item=><Link className="brandItem" to="/brandDetail" key={item.id}>
                            <div className="brandItemName">{item.name}</div>
                            <div className="brandItemMinPrice">{item.floor_price}元起</div>
                            <img src={item.new_pic_url}/>
                        </Link>)}
                    </div>
                </div>
                <div className="newGoodsBox">
                    <div className="newGoodsTitle">
                    新品首发
                    </div>
                    <div className="newGoodsWrap">
                        {data.newGoodsList && data.newGoodsList.map(item=><Link className="newGoodsItem" to="/goods" key={item.id}>
                            <img src={item.list_pic_url}/>
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
                        {data.hotGoodsList && data.hotGoodsList.map(item=><Link className="hotGoodsItem" to="goods" key={item.id}>
                            <img src={item.list_pic_url}/>
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
                    </div>
                </div>
                <Foot/>
            </div>
        )
    }
    componentDidMount(){
        this.props.home.getDefaultData().then(res=>{
            this.setState({data:res.data})
            new Swiper(this.refs.home_ban,{
                loop:true,
                autoplay:{
                    delay:1000
                },
                pagination: {
                    el: '.swiper-pagination',
                },
            })
        })
        
    }
}
export default Home