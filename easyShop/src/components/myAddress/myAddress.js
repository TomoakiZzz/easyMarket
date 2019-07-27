import React, { Component } from 'react'
import './myAddress.scss'
export default class MyAddress extends Component {
    render() {
        return (
            <div className='addressItem'>
                <div className='addressMsg'>
                    <div className='concatName'>1</div>
                    <div className='addressDetail'>
                        <div className='concatPhone'>13277888888</div>
                        <div className='concatAddress'>北京市</div>
                    </div>
                    <div className='deleteAddress'>
                        <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAALVBMVEVmZmZtbW1ubm5wcHCJiYmKioqOjo6Tk5OUlJSVlZXm5ubn5+fv7+/y8vL////PAON/AAAAa0lEQVQ4y2N4hwsw0F8mgIGBgRWrDAMIoMokMKADNoIy6O5gwCAHgUwoThkGEmWexiFTyDIP+JCpUZmBkXnqh0wRH9shA5dGBe4hSbxlRJJpqEGSOcmBJLMYJS9aIcm8noQkobluoModNAAADGfUnhuYO1kAAAAASUVORK5CYII='/>
                    </div>
                </div>
            </div>
        )
    }
}
