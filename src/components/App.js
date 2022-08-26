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

  //Shuffles dataset and returns the first 8 random items
  //Ideally, we can use this function as a randomizer for both LevelOne and LevelTwo
  // const shuffledArt = artwork.sort(() => 0.5 - Math.random()).slice(0, 8)

 //Duplicates the shuffledArt array to make pairs and then randomizes the order
  // let duplicates = [...shuffledArt, ...shuffledArt]
  // .sort(() => 0.5 - Math.random())

  // const artRandomizer = () => {
  //   setArtwork(duplicates)
  //   setTurns(0)
  // }

  // function handleButtonClick(){
  //   setButtonClick(buttonClick => !buttonClick)
  //   console.log(buttonClick)
  // }

  return (
    <div className="App">
      {/* <button onClick={handleButtonClick} className={!buttonClick ?"transitionButtonStyling" : "transitionOtherStyling"}>{!buttonClick ? "Classical" : "Modern"}</button> */}
      
<NavBar />
      <Switch>
        <Route path="/levelone">
         <LevelOne 
          // artwork={artwork}
          // setArtwork={setArtwork}
          // levelOneDisplay={levelOneDisplay}
          />
        </Route>
        {/* <Route path="/leveltwo">
          <LevelTwo 
          // artwork={artwork}
          /> */}
         />

        {/* </Route> */}
        {/* <Route path="/leveltwo">
          <LevelTwo 
          artwork={artwork} 
          />
        </Route> */}
        <Route path="/artlibrary">
          <ArtLibrary artwork={artwork}/>

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


// {buttonClick ? 
//   <div>
//   <ClassicalNavBar />
//   {/* <Switch>
//     <Route path="/classicallevelone">
//      <ClassicalLevelOne 
//       />
//     </Route>
//     <Route path="/classicalartlibrary">
//       <ClassicalArtLibrary artwork={artwork}/>

//     </Route>
//     <Route path="/gallery">
//       <GalleryContainer />
//     </Route>
//     {/* <Route exact path="/">
//       <Welcome />
//     </Route> */}
//   </Switch>
//   </div>
//   :
//   <div>
//   <NavBar />
//   <Switch>
//     <Route path="/levelone">
//      <LevelOne 
//       // artwork={artwork}
//       // setArtwork={setArtwork}
//       // levelOneDisplay={levelOneDisplay}
//       />
//     </Route>
//     {/* <Route path="/leveltwo">
//       <LevelTwo 
//       // artwork={artwork}
//       /> */}
//      />

//     {/* </Route> */}
//     {/* <Route path="/leveltwo">
//       <LevelTwo 
//       artwork={artwork} 
//       />
//     </Route> */}
//     <Route path="/artlibrary">
//       <ArtLibrary artwork={artwork}/>

//     </Route>
//     <Route path="/gallery">
//       <GalleryContainer />
//     </Route>
//     {/* <Route exact path="/">
//       <Welcome />
//     </Route> */}
//   </Switch>
//   </div>
// } */}

export default App;