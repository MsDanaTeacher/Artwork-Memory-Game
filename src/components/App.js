import React, {useEffect, useState} from 'react';
import { Route, Switch } from "react-router-dom";
import NavBar from './NavBar';
// import Welcome from './Welcome';
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

  // const shuffled = artwork.sort(() => 0.5 - Math.random())

  // let selected = shuffled.slice(0, 8);
  
  // let duplicate = selected;

  // console.log(selected)
  // console.log(duplicate)

  // let eachSelectedArtwork= selected.map((art) => {
  //   return <div><img key={art.Id} src={art.Image} width="200px" height="200px"/></div>
  // })

  // let eachDuplicateArtwork= duplicate.map((dupe) => {
  //   return <div><img key={dupe.Id} src={dupe.Image} width="200px" height="200px"/></div>
  // })
  // let eachDuplicateArtwork= duplicate.map((copy) => {
  //   return <img key={copy.Id} src={copy.Image} width="200px" height="200px"/>
  // })

  
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/levelone">
         <LevelOne artwork={artwork}/>
        </Route>
        <Route path="/leveltwo">
          <LevelTwo artwork={artwork}/>
        </Route>
        <Route path="/gallery">
          <GalleryContainer />
        </Route>
        {/* <Route exact path="/">
          <Welcome />
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
