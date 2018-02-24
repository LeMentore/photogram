import React from 'react';

const PicItem = (props) => {
    return (
        <div className="item" style={{ backgroundImage: `url(${props.pic})` }} />
    )
};

export default PicItem