import {useState, useEffect} from 'react';
import GalleryItem from '../GalleryItem/GalleryItem.jsx';

function GalleryList({galleryArray}) {

    return (
        <div>
            <h1>Gallery Array Test:</h1>
            <ul>
                {galleryArray.map((picture) =>{
                    return <GalleryItem key={picture.id} picture={picture}/>
                })}
            </ul>
        </div>
    );
};

export default GalleryList;