import React, { Component } from 'react'
import "../../fonts/iconfont.css"
import "./head.scss"
import {withRouter} from "react-router-dom"
class Head extends Component {
    render() {
        return (
            <header className="header">
                <div className="left" onClick={this.handBack.bind(this)}><i className="iconfont icon-chevron-thin-left"></i></div>
                <div className="title">{this.props.headTitle}</div>
                <div className="right"></div>
            </header>
        )
    }
    handBack(){
        this.props.history.go(-1)
    }
}
export default withRouter(Head)