import React from 'react';

export default function Search(props){
    return (
        <div className='Search'>
            <input onChange={props.searchField} type='search' placeholder='Title'></input>
            <button onClick={props.searchButton}>SEARCH</button>
        </div>
    )
}
