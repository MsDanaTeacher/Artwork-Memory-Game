import React from 'react'
import GameTiles from './GameTiles'

export default function LevelOne({artwork}) {

  
  
  
  const shuffled = artwork.sort(() => 0.5 - Math.random())

  let selected = shuffled.slice(0, 8);

  let duplicate = selected;

  console.log(selected)
  console.log(duplicate)

  let eachSelectedArtwork = selected.map((art) => {
    return <div className="gridOne"><img key={art.Id} src={art.Image} width="200px" height="200px"/></div>
  })

  let mixedSelectedArtwork = eachSelectedArtwork.sort(() => 0.5 - Math.random())

  let eachDuplicateArtwork = duplicate.map((dupe) => {
    return <div className="gridOne"><img key={dupe.Id} src={dupe.Image} width="200px" height="200px"/></div>
  })

  return (
    <div className="levelOne">
      {mixedSelectedArtwork}
      {eachDuplicateArtwork}

      {/* <div className="card-grid">
        {artwork.map((art) => (
          <GameTiles key={art.id} art={art} />
        ))
      }
      </div> */}
    </div>
  )
}
