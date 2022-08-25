import React from 'react'

export default function GameTiles({art, handleChoice, flipped}) {
  const {Image} = art

  //Selection handler for LevelOne
  const handleClick = () => {
    handleChoice(art)
  }
  
  return (
    //conditional classname applies CSS changes to be 'flipped' 
    <div className="gameTiles">
      <div className={flipped ? "flipped" : ""}>
      <img 
        src={Image}
        className="art-card"
        width="200px" height="200px" 
        alt="art-card" 
        />
        <div 
        //each image has a blank card that hides the image until it is flipped
        onClick={handleClick}
        className='blank-card'
        alt="blank-card"
        width="200px" height="200px"
        >
        </div>
    </div>
    </div>
  )
}