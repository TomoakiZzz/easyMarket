import React from 'react'
import './special.scss'
import Footer from '../../components/footer/footer'
import { inject, observer } from 'mobx-react'
import { Link } from "react-router-dom"
import lazyLoad from "../../components/lazyLoad/lazyLoad"
const loading = require("../../utils/loading.jpg")
@inject("special")
@observer
class Special extends React.Component {
    render() {
        return (
            <div className='tabPageContent' ref="lazyMain">
                {this.props.special.specialData.data && this.props.special.specialData.data.map(item => <Link className="topicItem" to={`/topicDetail/${item.id}`} key={item.id}>
                    <img src={loading} data-src={item.scene_pic_url} />
                    <div className="topicItemTitle">{item.title}</div>
                    <div className="topicItemSubtitle">{item.subtitle}</div>
                    <div className="topicItemPrice">{item.price_info}元起</div>
                </Link>)}
                <Footer></Footer>
            </div>
        )
    }
    componentDidMount() {
        this.props.special.getSpecialData({ page: 1, size: 1000 })
        lazyLoad(this.refs.lazyMain)
    }
}
export default Special