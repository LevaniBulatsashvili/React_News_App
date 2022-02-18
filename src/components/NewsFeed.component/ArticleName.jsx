import React from 'react';

export default function ArticleName(props) {
    return (
            <button onClick={props.getArticle}>{props.name}</button>
    )
}
