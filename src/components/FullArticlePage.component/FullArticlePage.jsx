import React from 'react';
import FullArticle from './FullArticle'
import Header from '../Header.component/Header';
import Footer from '../Footer.component/Footer';
import './FullArticlePage.css';

export default function FullArticlePage() {
    const date = sessionStorage.getItem('date');
    const image = sessionStorage.getItem('image');
    const title = sessionStorage.getItem('title');
    const content = sessionStorage.getItem('content');

    return (
        <div>
            <Header />
            <FullArticle date={date} image={image} title={title} content={content} />
            <Footer />
        </div>
    )
}
