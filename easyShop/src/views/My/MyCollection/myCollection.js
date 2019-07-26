import React, { Component } from 'react'
import './myCollection.scss'
import MyList from '../../../components/myList/myList'
export default class MyCollection extends Component {
    render() {
        return (
            <div className='noTabPageContent'>
                <div className='collect'>
                    {/* <div className='header'>头</div> */}
                    <div className='collectList'>
                        <MyList></MyList>
                    </div>
                </div>
            </div>
        )
    }
}
