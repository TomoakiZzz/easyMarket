import React from 'react'
import './commentWrite.scss'
import { inject, observer } from 'mobx-react'
import Head from "../../../components/head/head"
@inject("special")
@observer
class commentWrite extends React.Component {
    state = {
        headTitle: "查看更多评论",
        textValue:""
    }
    render() {
        let {textValue} = this.state
        return (
            <div className='noTabPageContent'>
                <Head headTitle={this.state.headTitle} />
                <div className="textAreaContent">
                    <textarea className="inputArea" maxLength='80' value={textValue} onChange={this.writeComment.bind(this)}></textarea>
                    <span>{textValue.length}/80</span>
                </div>
                <div className="buttons">
                    <div>
                        {textValue.length ? <a role="button" className="am-button am-button-small" aria-disabled="false">
                            <span onClick={this.clearComment.bind(this)}>清 空</span>
                        </a> : null}
                    </div>
                    <div>
                        <a role="button" className="am-button am-button-primary am-button-small" aria-disabled="false" onClick={this.submitComment.bind(this)}>
                            <span>留 言</span>
                        </a>
                    </div>
                </div>
            </div>

        )
    }
    writeComment(e){
        this.setState({
            textValue:e.target.value
        })
        // let {textValue} = this.state

        console.log(e.target.value)
    }
    submitComment(){
        this.props.special.writeCommentList({content:this.state.textValue, typeId: 1, valueId:this.props.match.params.id})
        setTimeout(()=>{
            if(this.props.special.code){
                this.props.history.go(-1)
            }
        },1000)
    }
    clearComment(){
        this.setState({
            textValue:""
        })
    }
}
export default commentWrite