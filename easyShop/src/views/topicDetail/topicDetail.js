import React, { Component } from 'react'
import Head from "../../components/head/head"
import {inject,observer} from 'mobx-react'
import {Link} from "react-router-dom"
import "./topicDetail.scss"
import "../../fonts/iconfont.css"
@inject("special")
@observer
class topicDetail extends Component {
    render() {
        return (
            <div className="noTabPageContent">
                <div className="topicDetail">
                    <Head headTitle={this.props.special.specialDetail.title}/>
                    <div className="topicDetailImg" dangerouslySetInnerHTML={{__html:this.props.special.specialDetail.content}}></div>
                    <div className="commentWrap">
                        <div className="titleLine">
                            <div className="titleName">精选留言</div>
                            <div className="titleIcon" onClick={this.goWriteNote.bind(this,this.props.match.params.id)}>
                                <i className="iconfont icon-bianji1"></i>
                            </div>
                        </div>
                        <div className="commentList">
                            {this.props.special.DetailCommentList.data && this.props.special.DetailCommentList.data.map(item=><div className="commentItem" key={item.id}>
                                <div className="userInfo">
                                    <div>匿名用户</div>
                                    <div>{item.add_time}</div>
                                </div>
                                <div className="userComment">{item.content}</div>
                                <div className="commentPicList"></div>
                            </div>)}
                            
                        </div>
                        <Link className="moreComment" to={`/comment/${this.props.match.params.id}`}>查看更多评论</Link>
                    </div>
                    <div className="relateTopic">
                        <div className="relateTopicTitle">推荐专题</div>
                        {this.props.special.IcRelated && this.props.special.IcRelated.map(item=><div className="relateTopicItem" key={item.id}>
                            <img src={item.scene_pic_url}/>
                            <div>{item.title}</div>
                        </div>)}
                        
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.special.getTopDetail({id:this.props.match.params.id})
        this.props.special.getCommentList({valueId:this.props.match.params.id,typeId:1,page:1,size:5})
        this.props.special.getIcRelated({id:this.props.match.params.id})
    }
    goWriteNote(id){
        this.props.history.push(`/topicCommentWrite/${id}`)
    }
}
export default topicDetail