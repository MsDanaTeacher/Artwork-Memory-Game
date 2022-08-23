import React, {useEffect, useState} from 'react'
import GameTiles from './GameTiles'

export default function LevelOne({ levelOneDisplay}) {

  //Setting state to track selections
  const [selectionOne, setSelectionOne] = useState(null)
  const [selectionTwo, setSelectionTwo] = useState(null)
  const [turns, setTurns] = useState(0)

  //Handler to track selection--
  //For the ternary: if the user has clicked on the first image in a pair, then selectionOne = true and they can move on to make a second selection
  //...if selectionOne = false, then whatever image they click is assigned selectionOne
  const handleChoice = (art) => {
    console.log(art)
    selectionOne ? setSelectionTwo(art) : setSelectionOne(art)
  } 

  //Part 1 of the conditional logic:
  //If the image id of selectionOne matches the id of selectionTwo, then it alerts "matched!"...
  //I still need to replace the alerts with new logic
useEffect(() => {
  if (selectionOne && selectionTwo) {
    if(selectionOne.Id === selectionTwo.Id) {
      alert("matched!")
      resetTurn()
    } else {
      alert("not a match")
      resetTurn()
    }
  }
}, [selectionOne, selectionTwo])

//This resets the selection tracker
  const resetTurn = () => {
    setSelectionOne(null)
    setSelectionTwo(null)
    setTurns(prevTurns => prevTurns +1)
  }

  return (
    <div className="levelOne">
      <div className="card-grid">

        {levelOneDisplay.map((art) => (
          <GameTiles 
            key={levelOneDisplay.Id} 
            handleChoice={handleChoice}
            art={art} />
        ))
      }
      </div>
    </div>
  )
}
