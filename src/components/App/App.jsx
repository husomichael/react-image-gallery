import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.jsx';

function App() {
  
  let [galleryArray, setGalleryArray] = useState([]);

  //Do this once on load
  useEffect(() =>{
    console.log('in useEffect');
    fetchGallery();
  }, []);

  //GET request 
  function fetchGallery() {
    axios({
        method: 'GET',
        url: '/gallery'
    }).then((response) =>{
        console.log('fetchGallery response:', response.data);
        setGalleryArray(response.data);
        console.log(galleryArray);
    }).catch((error) =>{
        console.log('fetchGallery error:', error);
    });
  };

  //PUT request
  function setLikes() {
    axios({
      method: 'PUT'
      //
    }).then((response) => {
      console.log('setLikes response:', response);
    }).catch((error) =>{
      console.log('setLikes error:', error);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <p>Gallery goes here</p>
      <GalleryList galleryArray={galleryArray}/>
      <img src="images/goat_small.jpg"/>
    </div>
  );
};

export default App;
