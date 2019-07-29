import React, { Component } from 'react'
import './search.scss'
import { inject, observer } from 'mobx-react'
@inject("search")
@observer
class Search extends Component {
    render() {
        return (
            <div className='noTabPageContent'>
                <div className='searchPage'>
                    <div className='searchFix'>
                        <div className='Input'>
                            <div className='searchInputWrap'>
                                <div className='goBack'>
                                    <i className='iconfont icon-chevron-thin-left'></i>
                                </div>
                                <div className='icon'>
                                    <i className='iconfont icon-fangdajing'></i>
                                </div>
                                <input className='searchInput' placeholder='520元礼包抢先领'/>
                                <div className='cancelSearch'>取消</div>
                            </div>
                        </div>
                    </div>
                    <div className='searchMsg'>
                        <div class='searchItemWrap'>
                            <div className='title'>
                                历史记录
                                <i className='iconfont icon-shanchu'></i>
                            </div>
                            <div className='listWrap'>
                                <button class='listItem'>111</button>
                                <button class='listItem'>111</button>
                            </div>
                        </div>
                        <div class='searchItemWrap'>
                            <div className='title'>热门搜索</div>
                            <div className='listWrap'>
                                <button class='listItem active'>111</button>
                                <button class='listItem'>111</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Search