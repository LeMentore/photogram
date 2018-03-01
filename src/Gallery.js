import React, { Component } from 'react';
import unsplashData from './unsplash-data';
import PicItem from './PicItem';
import PreviewModal from "./PreviewModal";

export default class Gallery extends Component {
    constructor(){
        super();

        this.state ={
            paginator: 1,
            itemsPerPage: 8,
            modalIsOpen: false,
            selectedPicture: { pic:'', link: '' }
        }
    }

    loadMore(){
        const { paginator } = this.state;
        this.setState({
            paginator: paginator + 1
        })
    }

    openPreviewModal(event, pic, link){
        event.preventDefault()
        this.setState({
            modalIsOpen: true,
            selectedPicture: { pic, link }
        })
    }

    closePreviewModal(){
        this.setState({
            modalIsOpen: false,
            selectedPicture: { pic: '', link: '' }
        })
    }

    render(){
        const { paginator, itemsPerPage, modalIsOpen, selectedPicture } = this.state;
        return(
            <div>
                <h1 style={{textAlign: 'center', marginTop: 50}}>Photogram</h1>
                <div className="container">
                    {unsplashData.slice(0, paginator * itemsPerPage).map(item => {
                        return <PicItem key={item.link} {...item} selectPicture={this.openPreviewModal.bind(this)} />
                    })}
                </div>

                <div style={{ textAlign: 'center', margin: '100px 0'}}>
                    <a onClick={this.loadMore.bind(this)} href="#more" className="btn load-more">
                        Load more...
                    </a>
                </div>
                <PreviewModal selectedPic={selectedPicture} isOpen={modalIsOpen} close={this.closePreviewModal.bind(this)} />
            </div>
        )
    }
}