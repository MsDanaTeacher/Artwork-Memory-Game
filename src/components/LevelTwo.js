import React from 'react'
import GameTiles from './GameTiles'

export default function LevelTwo({ artwork }) {

  const shuffled = artwork.sort(() => 0.5 - Math.random())

  let selected = shuffled.slice(0, 8);
  
  let duplicate = selected;

  let eachSelectedArtwork= selected.map((art) => {
    return <div className="gridTwo" key={art.Id}><img  src={art.Image} width="200px" height="200px"/></div>
  })

  let eachArtworkTitle= duplicate.map((dupe,i) => {
    return <div key={i} className="artTitle">
      <h4>{dupe.Artist}</h4>
      <p>{dupe.Title}</p>
      </div>
  })

  return (
    <div className="levelTwo">
    {eachSelectedArtwork}
    {eachArtworkTitle}
    </div>
  )
}
