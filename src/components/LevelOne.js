import React, {useEffect, useState} from 'react'
import GameTiles from './GameTiles'

export default function LevelOne() {
  const [artwork, setArtwork] = useState([])
  const [selectionOne, setSelectionOne] = useState(null)
  const [selectionTwo, setSelectionTwo] = useState(null)
  const [turns, setTurns] = useState(0)
  const [randomize, setRandomize] = useState(false)
  const [restart, setRestart] = useState(false)

  useEffect(() => {
    fetch('http://localhost:3001/art')
    .then(r => r.json())
    .then(artwork => {
      setArtwork(artwork)
      setRandomize(true)
    }) 
  }, [restart])

  useEffect(() => {
    if (randomize) artRandomizer()
  }, [randomize])
  
  const artRandomizer = () => {
    let shuffledArt = []
    if (artwork.length > 4) {
      shuffledArt.length = 0;
      const levelOneArray = artwork.sort(() => Math.random() -0.5).splice(0, 4)
      shuffledArt = [...levelOneArray, ...levelOneArray]
        .sort(() => Math.random() -0.5)
        .map((art) => ({...art, id: Math.random()}))  
        setArtwork(shuffledArt)
        setTurns(0)
    }
  }

  const handleChoice = (art) => {
    selectionOne ? setSelectionTwo(art) : setSelectionOne(art)
    console.log(artwork)
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

  let handleNewGame = () => {
    setRestart(prev=>!prev)
    setRandomize(prev=>!prev)
  }
  return (

    <div className="levelOne">
      <div>
      <button onClick={handleNewGame}>New Game</button>
      </div>
      <div className="card-grid">
        {artwork.map((art,i) => (
          <GameTiles 
            key={i} 
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