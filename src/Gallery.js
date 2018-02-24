import React, { Component } from 'react';
import unsplashData from './unsplash-data';
import PicItem from './PicItem';

export default class Gallery extends Component {
    render(){
        return(
            <div>
                <h1 style={{textAlign: 'center', marginTop: 50}}>Photogram</h1>
                <div className="container">
                    <PicItem/>
                    <PicItem/>
                    <PicItem/>
                    <PicItem/>
                    <PicItem/>
                    <PicItem/>
                    <PicItem/>
                    <PicItem/>
                </div>
            </div>
        )
    }
}