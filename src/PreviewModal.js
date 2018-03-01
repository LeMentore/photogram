import React, { Component } from 'react'

export default class PreviewModal extends Component{
    render(){
        const { selectedPic, isOpen, close } = this.props
        const modalClass = isOpen ? '-show' : ''
        const previewLink = `${selectedPic.pic}?fit=crop&w=1920&h=1080`

        return(
            <div className={`preview-modal ${modalClass}`}>
                <span className="close-icon" onClick={close}>&times;</span>
                <div className="preview-modal-inner" style={{backgroundImage: `url(${previewLink})` }}>
                    <a href="#" className="btn download-btn">Download</a>
                </div>
            </div>
        )
    }
}