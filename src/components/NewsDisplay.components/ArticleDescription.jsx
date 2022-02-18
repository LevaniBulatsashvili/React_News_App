import React from 'react';

export default function ArticleDescription(props) {
    return (
        <div className='ArticleDescription'>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <a onClick={props.onLinkClick} href={`/article/${props.id}`}>Read More</a>
        </div>
    )
}
