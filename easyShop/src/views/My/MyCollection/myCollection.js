import React, { Component } from 'react'
import './myCollection.scss'
import MyList from '../../../components/myList/myList'
import Header from '../../../components/head/head'
import { inject, observer } from 'mobx-react'
@inject("myCollection")
@observer
class MyCollection extends Component {
    state={
        headTitle:'easyLikeGoods',
        typeId:1
    }
    render() {
        let {headTitle}= this.state
        return (
            <div className='noTabPageContent'>
                <div className='collect'>
                    <Header headTitle={headTitle}></Header>
                    <div className='collectList'>
                        <MyList></MyList>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        let {typeId} = this.state
        // console.log(this.props.myCollection.getDefaultData())
        this.props.myCollection.getDefaultData(typeId).then(res => {
            // this.setState({ data: res.data });
            console.log(res)
        })

    }
}
export default MyCollection