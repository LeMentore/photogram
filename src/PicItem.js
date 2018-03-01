import React from 'react'

const PicItem = (props) => {
    return (
        <a className="item" href={`https://unsplash.com/${props.link}`} target="_blank"
           style={{ backgroundImage: `url(${props.pic}?auto=compress,format&fit=crop&w=300&h=250&q=80)` }}
           onClick={(event) => props.selectPicture(event, props.pic, props.link)}>
        </a>
    )
};

export default PicItem