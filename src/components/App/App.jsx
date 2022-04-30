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
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;


// function App () {
//   useEffect(() => {
//     fetchCreatures();
//   }, [])

//   const [creatureList, setCreatureList] = useState([]);
  
//   // This GETs data from the "creatures" table:
//   const fetchCreatures = () => {
//     axios({
//       method: 'GET',
//       url: '/creature'
//     }).then((response) => {
//       console.log(response.data);
//       setCreatureList(response.data);
//     }).catch((error) => {
//       console.log('GET /creature broke:', error);
//     })
//   }

//   // This POSTs a creature to the "creatures" table:
//   const createCreature = (newCreature) => {
//     axios({
//       method: 'POST',
//       url: '/creature',
//       data: newCreature
//     }).then((response) => {
//       fetchCreatures();
//     }).catch((error) => {
//       console.log('POST /creature broke:', error);
//     })
//   }
