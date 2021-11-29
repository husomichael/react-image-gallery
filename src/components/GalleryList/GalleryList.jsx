import {useState, useEffect} from 'react';
import GalleryItem from '../GalleryItem/GalleryItem.jsx';

function GalleryList({galleryArray, setLikes}) {

    return (
        <div>
            <h1>Gallery Array Test:</h1>
            <div>
                {galleryArray.map((picture) =>{
                    return <GalleryItem key={picture.id} setLikes={setLikes} picture={picture}/>
                })}
            </div>
        </div>
    );
};

export default GalleryList;