import {useState, useEffect} from 'react';
import GalleryItem from '../GalleryItem/GalleryItem.jsx';

function GalleryList({galleryArray, setLikes}) {

    return (
        <div>
                {galleryArray.map((picture) =>{
                    return <GalleryItem key={picture.id} setLikes={setLikes} picture={picture}/>
                })}
        </div>
    );
};

export default GalleryList;