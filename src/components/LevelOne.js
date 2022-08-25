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

//Currently working on refactoring how to set the randomize state, but for now, this works
  useEffect(() => {
    if (randomize) artRandomizer()
  }, [randomize])
  
  const artRandomizer = () => {
    //When the user clicks 'new game', we generate a new array of images
    let shuffledArt = []
    if (artwork.length > 6) {
      shuffledArt.length = 0;

      //levelOneArray shuffles the full array and takes the first 6 images from the mix
      const levelOneArray = artwork.sort(() => Math.random() -0.5).splice(0, 6)

      //shuffledArt duplicates the six images in our new array...
      ////...then shuffles them up
      ////...then assigns each image a random id to track
      shuffledArt = [...levelOneArray, ...levelOneArray]
        .sort(() => Math.random() -0.5)
        .map((art) => ({...art, id: Math.random()}))  

        //then we set state for our new shuffled art array...
        ///...and reset turns to start the game at 0
        setArtwork(shuffledArt)
        setTurns(0)
    }
  }

  //click event handler that allows users to make two selections per turn
  const handleChoice = (art) => {

    //We track the selections in state (above)...
    //The ternary below says: when the user clicks on first image, selectionOne = true
    //...if selectionOne = true, then the user can move on to make a second selection...
    //if selectionOne=false, then the user still needs to make their first selection
    selectionOne ? setSelectionTwo(art) : setSelectionOne(art)
    //when we console.log(artwork), we should see the info for each item clicked
  } 

//function to compare selections and see whether they match
useEffect(() => {
  //First we need to grab the state of our selectionOne and selectionTwo
  if (selectionOne && selectionTwo) {

    //if the Ids for selectionOne and selectionTwo, our user has found a matching pair of images
    if (selectionOne.Id === selectionTwo.Id) {
      //updating the artwork state using the previous selection's state
      setArtwork(prevArt => {
         /* returns a new array that takes the previous selection and fires off a function for each image
        If the image id matches the id of the image selected, then we return a new object
        ...that new object spreads the image's properties and changes the "matched" value from false to true
        ...then we return the image with the new matched value*/
        return prevArt.map(art => {
          if (art.Id === selectionOne.Id) {
            return {...art, matched: true}
            //if it's not a match, then we return the image unchanged
          } else {
            return art
          }
        })
      })
      console.log("match!")
      resetTurn()
    } else {
      console.log("no match!")
      //the set timeout flips the cards over after a few seconds
      setTimeout(() => resetTurn(), 1000)
    }
  }
}, [selectionOne, selectionTwo])

  //This resets the selection tracker after the user makes two selections
  const resetTurn = () => {
    setSelectionOne(null)
    setSelectionTwo(null)
    setTurns(prevTurns => prevTurns + 1)
  }

  //This resets our states for the game to restart when the user clicks 'new game'
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
            //onClick selection tracker
            handleChoice={handleChoice}
            art={art} 
           /* Here we outline when we want to 'flip' a card to reveal the image
            1) after the first selection
            2) after the second selection
            3) when an image's 'matched' value = true
            **the actual flip magic happens in the css... */
            flipped={art === selectionOne || art === selectionTwo || art.matched}
          />
        ))
      }
      </div>
    </div>
  )
}