import React, {useEffect, useState} from 'react';
import { Route, Switch } from "react-router-dom";
import NavBar from './NavBar';
import LevelOne from './LevelOne';
import GalleryContainer from './GalleryContainer';
import ArtLibrary from './ArtLibrary'
// import GameTiles from './GameTiles'
// import GalleryForm from './GalleryForm'
// import ClassicalNavBar from './ClassicalNavBar'
// import ClassicalLevelOne from './ClassicalLevelOne'
// import ClassicalArtLibrary from './ClassicalArtLibrary'
// import ClassicalGalleryContainer from './ClassicalGalleryContainer'
function App() {
  const [artwork, setArtwork] = useState([])
  // const [buttonClick, setButtonClick] = useState(false)

  useEffect(() => {
    fetch('http://localhost:3001/art')
    .then(r => r.json())
    .then(data => {
      setArtwork(data)
    })
  }, [])

  return (
    <div className="App">
      {/* <button onClick={handleButtonClick} className={!buttonClick ?"transitionButtonStyling" : "transitionOtherStyling"}>{!buttonClick ? "Classical" : "Modern"}</button> */}
      
<NavBar />
      <Switch>
        <Route path="/artlibrary">
          <ArtLibrary artwork={artwork}/>
        </Route>
        <Route path="/levelone">
         <LevelOne />
        </Route>
        <Route path="/gallery">
          <GalleryContainer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;