import {useState} from 'react';
import './GalleryItem.css';

function GalleryItem({picture, setLikes}){

    const [showPicture, setShowPicture] = useState(true)

    const displayText = () => {
        setShowPicture(!showPicture);
    };

    const flipPicture = () => {
        if(showPicture){
            return <div className="GalleryItem-Image"><img height="350" width="450" src={picture.path} onClick={displayText}/></div>;
        }else{
            return <div className="GalleryItem-Text" onClick={displayText}>{picture.description}</div>;
        };
    };

    return(
        <div className="GalleryItem-Div">
            <div className ="GalleryItem-Box">
                {flipPicture()}
                <button  onClick={()=>setLikes(picture.id)}>Like!</button>
                <span className="GalleryItem-Likes">Likes: {picture.likes}</span>
            </div>
        </div>
    );
};

export default GalleryItem;