import React from 'react'

export default function GameTiles({art, handleChoice, flipped}) {
  const {Image} = art

  //Selection handler for LevelOne
  const handleClick = () => {
    handleChoice(art)

  }
  
  return (
    <div className="gameTiles">
      <div className={flipped ? "flipped" : ""}>
      <img 
        src={Image}
        className="art-card"
        
        width="205px" height="205px" 
        alt="art-card" 
        />
        <div 
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