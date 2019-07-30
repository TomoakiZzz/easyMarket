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
        console.log(this.props.myCollection.CollectData)
        return (
            <div className='noTabPageContent'>
                <div className='collect'>
                    <Header headTitle={headTitle}></Header>
                    <div className='collectList'>
                        
                        {this.props.myCollection.CollectData && this.props.myCollection.CollectData.map(item=><MyList item={item} key={item.id}></MyList>)}
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.myCollection.getMyCollect({typeId:0,size:1000})
        

    }
}
export default MyCollection