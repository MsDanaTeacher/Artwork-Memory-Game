import React, {useEffect, useState} from 'react';
import NavBar from './NavBar';
import Welcome from './Welcome';
import LevelOne from './LevelOne';
import LevelTwo from './LevelTwo';
import GalleryContainer from './GalleryContainer';
import GameTiles from './GameTiles'
import GalleryForm from './GalleryForm'

function App() {
  const [artwork, setArtwork] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/art')
    .then(r => r.json())
    .then(data => {
      setArtwork(data)
    })
  }, [])

  //Shuffles dataset and returns the first 8 random items
  //Ideally, we can use this function as a randomizer for both LevelOne and LevelTwo
  const shuffledArt = artwork.sort(() => 0.5 - Math.random()).slice(0, 8)

 //Duplicates the shuffledArt array to make pairs and then randomizes the order
  let levelOneDisplay = [...shuffledArt, ...shuffledArt]
  .sort(() => 0.5 - Math.random())

  
  return (
    <div className="App">
      <NavBar />
      <Welcome />
      <LevelOne 
        levelOneDisplay={levelOneDisplay}
        artwork={artwork}
        />
      
      {/* commenting out LevelTwo while I focus on LevelOne--AS
      <LevelTwo artwork={artwork}/> */}
     
      
    </div>
  );
}

export default App;
