import React from 'react';
import Header from '../Header.component/Header';
import './PageNotFound.css';

export default function PageNotFound() {
    return (
        <div className='PageNotFound'>
            <Header />
            <h1 className='Error'>Page doesn't exist 404</h1>
        </div>
    )
}
