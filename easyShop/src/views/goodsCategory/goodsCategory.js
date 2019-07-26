import React, { Component } from 'react'
import Head from "../../components/head/head"
export default class goodsCategory extends Component {
    state={
        headTitle:"奇趣分类"
    }
    render() {
        let {headTitle} = this.state
        return (
            <div>
                <Head headTitle={headTitle}/>
            </div>
        )
    }
}
