import React, {useEffect, useState} from 'react'
import GameTiles from './GameTiles'

export default function LevelOne() {
  const [artwork, setArtwork] = useState([])
  // const [levelOne, setLevelOne] =useState([])
 
  const [selectionOne, setSelectionOne] = useState(null)
  const [selectionTwo, setSelectionTwo] = useState(null)
  const [turns, setTurns] = useState(0)
  // const [matched, setMatched] = useState(true)

  useEffect(() => {
    fetch('http://localhost:3001/art')
    .then(r => r.json())
    .then(data => {
      setArtwork(data)
    // .then(setTurns(0))
    // .then(setArtwork())

    }) 
  }, [])

  const artRandomizer = () => {
    const levelOneArray = artwork.sort(() => Math.random() -0.5).slice(0, 4)
    const shuffledArt = [...levelOneArray, ...levelOneArray]
      .sort(() => Math.random() -0.5)
      .map((art) => ({...art, id: Math.random()}))

      setArtwork(shuffledArt)
      setTurns(0)
  }

  // const artRandomizer = () => {
  //   const shuffledArt = artwork.sort(() => 0.5 - Math.random())
  //     let shuffledLevelOne = shuffledArt.slice(0, 8)
  //     let duplicates = [...shuffledLevelOne, ...shuffledLevelOne]
  //       .sort(() => 0.5 - Math.random())

  // setArtwork(duplicates)
  //   setTurns(0)
  // }

  const handleChoice = (art) => {
    console.log(art)
    selectionOne ? setSelectionTwo(art) : setSelectionOne(art)
  } 

useEffect(() => {
  if (selectionOne && selectionTwo) {

    if (selectionOne.Id === selectionTwo.Id) {
      setArtwork(prevArt => {
        return prevArt.map(art => {
          if (art.Id === selectionOne.Id) {
            return {...art, matched: true}
          } else {
            return art
          }
        })
      })
      // alert("match!")
      resetTurn()
    } else {
      console.log("no match!")
      setTimeout(() => resetTurn(), 1000)
    }
  }
}, [selectionOne, selectionTwo])



  const resetTurn = () => {
    setSelectionOne(null)
    setSelectionTwo(null)
    setTurns(prevTurns => prevTurns + 1)
  }


  return (

    <div className="levelOne">
      <div>
      <button onClick={artRandomizer}>New Game</button>
      </div>
      <div className="card-grid">
        {artwork.map((art) => (
          <GameTiles 
            key={artwork.Id} 
            handleChoice={handleChoice}
            art={art} 
            flipped={art === selectionOne || art === selectionTwo || art.matched}
            // matched={matched}
          />
        ))
      }
      </div>
    </div>
  )
}