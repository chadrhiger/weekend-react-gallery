import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

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


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">A Few of My Favorite Things</h1>
        </header>
        {galleryList.map((galleryItem) => {
          return (
            <div key={galleryItem.id}>
              <img src={galleryItem.path} width="100" height="100"/>
              {galleryItem.description}
              <button>LIKE</button>
              Likes: {galleryItem.likes}
            </ div>
            // galleryList.map (kinda like a "for of" loop)
            // some of this code lovingly lent from Jack to nudge me in the right direction. solid dude, you should chill w him sometime,
          )
        })}
      </div>
    );
}

export default App;
