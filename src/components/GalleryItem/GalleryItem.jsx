import {useState} from 'react';

function GalleryItem({picture}){
    return(
        <div>
            <li>
                <img src={picture.path}/>
            </li>
        </div>
    );
};

export default GalleryItem;