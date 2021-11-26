import {useState, useEffect} from 'react';
import GalleryItem from '../GalleryItem/GalleryItem.jsx';

function GalleryList({galleryArray}) {

    return (
        <div>
            <h1>Gallery Array Test:</h1>
            <ul>
                {galleryArray.map((picture) =>{
                    return <GalleryItem picture={picture}/>
                })}
            </ul>
        </div>
    );
};

export default GalleryList;