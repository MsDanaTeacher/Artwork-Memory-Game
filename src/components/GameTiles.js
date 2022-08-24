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
        
        width="200px" height="200px" 
        alt="art-card" 
        />
        <img
        onClick={handleClick}
        src="https://image.shutterstock.com/image-photo/black-paper-texture-background-260nw-1196650255.jpg"
        className='blank-card'
        alt="blank-card"
        width="200px" height="200px" 
        >
        </img>
    </div>
    </div>
  )
}