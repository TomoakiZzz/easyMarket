import React, { Component } from 'react'
import './search.scss'
import { inject, observer } from 'mobx-react'
import { Link } from "react-router-dom"
@inject("search")
@observer
class Search extends Component {
    state = {
        inpValue: "",
        isShow: false,
        classShow: false,
        sortRank: [
            {
                title: "综合",
                id: 1
            },
            {
                title: "价格",
                id: 2,
                imgprl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAVCAMAAACuRUSFAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExURf///+Li4vz8/NLPz8zMzOfn5+zs7MvLy87OztnZ2ff39/Ly8t3d3dLS0s3NzdXV1e/v7x5kADsAAAB6SURBVBjTlU5JEsAgDEKNBtf6/9fWse3Ea7lkIAkAbERmD4Oj6CFEjtS1fcKkTpSu8RFq0GRjL7aeKBXwXd1nM1hwSbMYuZDP4JbxF9ns4HNY/s6oBJTB+FKnfWVN4XzqaC+7p4ZqY93tRRUm2GPiiEeOynBHCd/40htqjAOfArDeuwAAAABJRU5ErkJggg==",
                picUrl: ['data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAVCAMAAACuRUSFAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABFUExURf////b29ua/v64zM/Dw8N/f38p4eM3NzasrK9jY2Orq6uTk5NDQ0KwtLdyoqNOPj/36+u3R0bI8PMRqarpPT/Ph4cBfXxAqC/oAAAB2SURBVBjTlY1HFoQwDEOVguVQQ73/UYGEGTPL0Ubvu0jArSxBMkyiqmI46eIXnT44apgxBx0r+mHwZrYoZ9jt8YrZsb2CRTccqxXn9cC/SukXEpsvNkxwPbsHO/YOcGRbsCXd7ZGMZnUR7aw+RospwXzVlMGDJy9ABE2PslE1AAAAAElFTkSuQmCC', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAVCAMAAACuRUSFAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAB7UExURf///+fn58/Pz68zM6gkJM3NzdLS0svLy/7+/vz7++3t7fLy8tra2qooKP79/eDg4Pf399fX19eZmbE5Oa0uLvz29s2AgPLd3cJlZdzc3OK2tt+vr+rLy7lNTcBhYfbq6rVDQ+bAwNOPj+jFxcZubsZwcLxXV9qiovnv74XOz3UAAACYSURBVBjTlY7ZFoMgDESDgMEFFbSgbd26//8XtnIEfO28zLlDMgHAifAygyjCEQ8B4TxPsfZBnmABTYqkclgkmItg7kG4MY6FgOy3KEJNAwoH4XtrVFCWVbw7KPhX0yPun/oexs54zJ7yBZZ2ekcjlxmqu6Rnh5q1dvMLa6/BthbNFgvrPrYFho1rR9/hzmdikt4On5h7j1/xZwfGevdtjgAAAABJRU5ErkJggg==']
            }
        ],
        ind: 0,
        num: 0,
        tabSortImg: true,
        tabPrice: true,
        historyShow: true
    }
    render() {
        let { inpValue, isShow, classShow, sortRank, ind, num, tabSortImg, tabPrice, historyShow } = this.state
        return (
            <div className='noTabPageContent'>
                <div className='searchPage'>
                    <div className='searchFix'>
                        <div className='Input'>
                            <div className='searchInputWrap'>
                                <div className='goBack' onClick={() => { this.props.history.go(-1) }}>
                                    <i className='iconfont icon-chevron-thin-left'></i>
                                </div>
                                <div className='icon'>
                                    <i className='iconfont icon-fangdajing'></i>
                                </div>
                                <input className='searchInput' value={inpValue} onChange={this.handChange.bind(this)} placeholder={this.props.search.searchHistory.defaultKeyword && this.props.search.searchHistory.defaultKeyword.keyword} />
                                <div className='cancelSearch' onClick={() => { this.setState({ isShow: !isShow, inpValue: "" }) }}>取消</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        {!isShow ? <>{historyShow ? <div className='searchItemWrap'>
                            <div className='title'>
                                历史记录
                                <i className='iconfont icon-shanchu' onClick={this.handClearHistory.bind(this)}></i>
                            </div>
                            <div className='listWrap'>
                                {this.props.search.searchHistory.historyKeywordList
                                    && this.props.search.searchHistory.historyKeywordList.map(item => <button className='listItem' key={item} onClick={this.handSearch.bind(this, item)}>{item}</button>)}
                            </div>
                        </div> : null}
                            <div className='searchItemWrap'>
                                <div className='title'>热门搜索</div>
                                <div className='listWrap'>
                                    {this.props.search.searchHistory.hotKeywordList
                                        && this.props.search.searchHistory.hotKeywordList.map(item => <button className={`listItem ${item.is_hot === 1 ? 'active' : ''}`} key={item.keyword} onClick={this.handSearch.bind(this, item.keyword)}>{item.keyword}</button>)}
                                </div>
                            </div></> : null}

                        {isShow ? <div className="searchGoods">
                            <div className="searchConditionWrap">
                                <div className="searchCondition">
                                    {sortRank.map((item, index) => {
                                        return <div className={index === num ? 'active' : ''} onClick={this.handTabSortRank.bind(this, index, item.id)} key={item.id}>{item.title}{
                                            Object.keys(item).length > 2 ? <img className="sortPrice" src={tabSortImg ? item.imgprl : (index === num) && !tabPrice ? item.picUrl[0] : item.picUrl[1]} /> : null
                                        }</div>

                                    })}
                                    <div className="chooseCategory" onClick={this.handClassShow.bind(this)}>全部分类</div>
                                </div>
                                {classShow ? <div className="searchConditionCategoryWrap onePx_top">
                                    {this.props.search.searchGoodsData.filterCategory && this.props.search.searchGoodsData.filterCategory.map((item, index) => <button className={`categoryListItem ${item.checked ? 'active' : ''}`} onClick={this.handTabClassify.bind(this, item.id)} key={item.id}>{item.name}</button>)}
                                </div> : null}

                            </div>
                            <div className="goodsList">
                                {this.props.search.searchGoodsData.data && this.props.search.searchGoodsData.data.map(item => <Link className="goodsItem" to="/goods/" key={item.id}>
                                    <div className="goodsItemImg">
                                        <img src={item.list_pic_url} />
                                    </div>
                                    <div className="goodsItemName">{item.name}</div>
                                    <div className="goodsItemPrice">￥{item.retail_price}元</div>
                                </Link>)}
                            </div>
                        </div> : null}

                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.search.searchIndex()
    }
    handClearHistory() {
        this.setState({ historyShow: true })
        this.props.search.clearHistory()
    }
    handChange(e) {
        this.setState({
            inpValue: e.target.value
        })
    }
    handSearch(val) {
        this.setState({
            inpValue: val,
            isShow: !this.state.value
        })
        this.props.search.searchGoodsList({
            keyword: val,
            page: 1,
            size: 100,
            sort: 'id',
            order: 'desc',
            categoryId: 0
        })
    }
    handClassShow() {
        this.setState({
            classShow: !this.state.classShow
        })
    }
    handTabClassify(id) {
        this.setState({
            classShow: !this.state.classShow
        })
        if(id===0){
            this.props.search.searchGoodsList({
                keyword: this.state.inpValue,
                page: 1,
                size: 100,
                sort: 'id',
                order: 'default',
                categoryId: id
            })
        }else{
            this.props.search.searchGoodsList({
                keyword: this.state.inpValue,
                page: 1,
                size: 100,
                sort: 'id',
                order: 'default',
                categoryId: id
            })
        }
    }
    handTabSortRank(index, id) {
        this.setState({
            num: index,
        })
        if (id === 2) {
            this.setState({
                tabSortImg: false,
                tabPrice: !this.state.tabPrice
            })
            console.log(this.state.tabPrice, this.state.inpValue.length)

            if (this.state.tabPrice) {
                this.props.search.searchGoodsList({
                    keyword: this.state.inpValue,
                    page: 1,
                    size: 100,
                    sort: 'price',
                    order: 'asc',
                    categoryId: 0
                })
            } else {
                this.props.search.searchGoodsList({
                    keyword: this.state.inpValue,
                    page: 1,
                    size: 100,
                    sort: 'price',
                    order: 'desc',
                    categoryId: 0
                })
            } 
        } else if (id === 1) {
            this.setState({
                tabSortImg: true,
                tabPrice: true
            })
            this.props.search.searchGoodsList({
                keyword: this.state.inpValue,
                page: 1,
                size: 100,
                sort: 'id',
                order: 'default',
                categoryId: 0
            })
            // if (this.state.inpValue) {
            //     this.props.search.searchGoodsList({
            //         keyword: this.state.inpValue,
            //         page: 1,
            //         size: 100,
            //         sort: 'id',
            //         order: 'desc',
            //         categoryId: 0
            //     })
            // } else {
            //     this.props.search.searchGoodsList({
            //         keyword: "",
            //         page: 1,
            //         size: 100,
            //         sort: 'id',
            //         order: 'default',
            //         categoryId: 0
            //     })
            // }
        }
    }

}
export default Search