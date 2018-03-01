import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import unsplashData from './unsplash-data';
import PicItem from './PicItem';
import PreviewModal from "./PreviewModal";

class Gallery extends Component {
    constructor(){
        super();

        this.state ={
            paginator: 1,
            itemsPerPage: 8,
            modalIsOpen: false,
            selectedPicture: { pic:'', link: '' }
        }
    }

    componentWillMount(){
        const pageHash = this.context.router.route.location.pathname
        const regexp = new RegExp(/^\/page\d+$/)

        if(pageHash.match(regexp)){
            this.setState({
                paginator: parseInt(pageHash.replace(/^\D+/g, ''))
            })
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
        console.log(this.context)
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
                    <Link to={`/page${paginator+1}`} onClick={this.loadMore.bind(this)} href="#more" className="btn load-more">
                        Load more...
                    </Link>
                </div>
                <PreviewModal selectedPic={selectedPicture} isOpen={modalIsOpen} close={this.closePreviewModal.bind(this)} />
            </div>
        )
    }
}

Gallery.contextTypes = {
    router: PropTypes.object.isRequired
}

export default Gallery