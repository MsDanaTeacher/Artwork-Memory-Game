import React from 'react'

export default function GameTiles({art, handleChoice}) {
  const {Image} = art

  //Selection handler for LevelOne
  const handleClick = () => {
    handleChoice(art)
  }
  
  return (
    <div className="gameTiles">
      <img 
        src={Image}
        onClick={handleClick}
        width="200px" height="200px" 
        alt="card front" 
        // style={matched ? {color: 'black'} : null} 
        />
    
    </div>
  )
}