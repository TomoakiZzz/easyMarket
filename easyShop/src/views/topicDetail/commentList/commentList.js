import React from 'react'
import './commentList.scss'
import { inject, observer } from 'mobx-react'
import Head from "../../../components/head/head"
@inject("special")
@observer
class commentList extends React.Component {
    state = {
        headTitle: "查看更多评论"
    }
    render() {
        return (
            <div className='noTabPageContent'>
                <Head headTitle={this.state.headTitle} />
                <div className="commentList">
                    {this.props.special.DetailCommentList.data && this.props.special.DetailCommentList.data.map(item => <div className="commentItem" key={item.id}>
                        <div className="userInfo">
                            <div>匿名用户</div>
                            <div>{item.add_time}</div>
                        </div>
                        <div className="userComment">{item.content}</div>
                        <div className="commentPicList"></div>
                    </div>)}
                </div>
            </div>

        )
    }
    componentDidMount() {

        this.props.special.getCommentList({ valueId: this.props.match.params.id, page: 1, size: 100, typeId: 1 })
    }
}
export default commentList