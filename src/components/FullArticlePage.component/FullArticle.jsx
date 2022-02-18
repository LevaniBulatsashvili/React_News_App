import React from 'react';

export default function FullArticle(props) {
    return (
        <div className='FullArticle'>
            <p>{props.date.slice(0, 10)}</p>
            <h1 className='FullArticleTitle'>{props.title}</h1>
            <img src={props.image} alt='' ></img>
            <h1 className='FullArticleContent'>{props.content}</h1>
        </div>
    )
}
