import React from 'react'

export default function GameTiles({art, handleChoice}) {
const{image} = art

  const handleClick = () => {
    handleChoice(art)
  }

  return (
    <div className="gameTiles">
      <div>
        <img 
          src={image} 
          onClick={handleClick} 
          className="front" 
          width="200px" height="200px" alt="card front"/>
      
        <img className="back" style={{tintColor: "#000000"}} />
      </div>

    </div>
  )
}
