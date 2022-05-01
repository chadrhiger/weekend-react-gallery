import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList';

function App() {
  useEffect(() => {
    fetchGallery();
  }, [])

  const [galleryList, setGalleryList] = useState([]);

  const fetchGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    }).then((response) => {
      console.log(response.data);
      setGalleryList(response.data);
    }).catch((error) => {
      console.log('GET /gallery broke:', error);
    })
  }

  const updateLikes = (imageId) => {
    console.log("Did you click a like button? Looks like you did... ;) ");
    axios({
      method: "PUT",
      url: `/gallery/like/${imageId}`,
    })
      .then(function (response) {
        console.log(response);
        fetchGallery();
      })
      .catch(function (error) {
        console.log(error);
      });
  };



  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">A Few of My Favorite Things</h1>
      </header>
      <ul>
        <GalleryList
          galleryList={galleryList}
          updateLikes={updateLikes}
        />
      </ul>
    </div>
  );
}

export default App;
