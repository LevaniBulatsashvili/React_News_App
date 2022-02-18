import React from 'react';
import ArticleName from './ArticleName';

export default function NewsFeed(props){
    return (
        <div className='NewsFeed'>
            {props.names.map(name => <ArticleName key={`$NewsFeed${name}`} getArticle={props.getArticle} name={name} />)}
        </div>
    )
}
