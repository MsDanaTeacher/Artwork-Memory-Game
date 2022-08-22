import React from 'react';
import NavBar from './NavBar';
import Welcome from './Welcome';
import LevelOne from './LevelOne';
import LevelTwo from './LevelTwo';
import GalleryContainer from './GalleryContainer';
import GameTiles from './GameTiles'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Welcome />
      <GameTiles />
    </div>
  );
}

export default App;
