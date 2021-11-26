import {useState} from 'react';

function GalleryItem({picture}){
    return(
        <div>
            <li key={picture.id}>
                <img src={picture.path}/>
            </li>
        </div>
    );
};

export default GalleryItem;