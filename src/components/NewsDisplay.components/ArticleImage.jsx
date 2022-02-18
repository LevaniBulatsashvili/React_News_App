import React from 'react';

export default function ArticleImage(props) {
    const isHoveredOver = props.isHoveredOver;
    const date = props.date.split('-');
    const year = date[0];
    const month = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"][date[1] - 1];
    const day = date[2].slice(0, 2);

    return (
        <div
            style={{ backgroundImage: isHoveredOver ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.image})` : `url(${props.image})`}}
            className='ArticleImage'
        >
            <p>{isHoveredOver && props.name}</p>
            <p>{isHoveredOver && `${month} ${day}, ${year}`}</p>
        </div>
    )
}
