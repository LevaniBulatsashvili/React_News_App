import React from 'react';
import ArticleDescription from './ArticleDescription';
import ArticleImage from './ArticleImage';

export default function Article(props) {
    const [isHoveredOver, setIsHoveredOver] = React.useState(false);
    return (
        <div onMouseEnter={() => setIsHoveredOver(true)} onMouseLeave={() => setIsHoveredOver(false)} className='Article'>
            <ArticleImage name={props.name} date={props.date} image={props.image} isHoveredOver={isHoveredOver} />
            <ArticleDescription id={props.id} title={props.title}  description={props.description} onLinkClick={(e) => {
                sessionStorage.setItem('date', props.date);
                sessionStorage.setItem('image', props.image);
                sessionStorage.setItem('title', props.title);
                sessionStorage.setItem('content', props.content)
                }} />
        </div>
    )
}
