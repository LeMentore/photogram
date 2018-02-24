import React from 'react';

const PicItem = (props) => {
    return (
        <div className="item" style={{ backgroundImage: `url(${props.pic}?auto=compress,format&fit=crop&w=300&h=250&q=80)` }} />
    )
};

export default PicItem