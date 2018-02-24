import React, { Component } from 'react';
import unsplashData from './unsplash-data';
import PicItem from './PicItem';

export default class Gallery extends Component {
    constructor(){
        super();

        this.state ={
            paginator: 1,
            itemsPerPage: 8
        }
    }

    loadMore(){
        const { paginator } = this.state;
        this.setState({
            paginator: paginator + 1
        })
    }

    render(){
        const { paginator, itemsPerPage } = this.state;
        return(
            <div>
                <h1 style={{textAlign: 'center', marginTop: 50}}>Photogram</h1>
                <div className="container">
                    {unsplashData.slice(0, paginator * itemsPerPage).map(item => {
                        return <PicItem key={item.link} {...item}/>
                    })}
                </div>

                <div style={{ textAlign: 'center', margin: '100px 0'}}>
                    <a onClick={this.loadMore.bind(this)} href="#more" className="btn load-more">
                        Load more...
                    </a>
                </div>
            </div>
        )
    }
}