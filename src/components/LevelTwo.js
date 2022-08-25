import React,{useState} from 'react'
// import GameTiles from './GameTiles'
import LevelTwoCard from './LevelTwoCard'

export default function LevelTwo({ artwork }) {

const shuffled = artwork.sort(() => 0.5 - Math.random())

let selected = shuffled.slice(0, 8);


let duplicate = [...selected].sort(() => 0.5 - Math.random());

let mixedArray = [...selected,...duplicate]

const [turn, setTurn] = useState({
    turn1:null,
    turn2:null,
    started:false,
})


let rendering = mixedArray.map((arr, i) => (
 //the details of how to display the data is in LevelTwoCard and i <= 7 condition tells LevelTwoCard which parts of the array are
 //displayed using image tags and which parts of the array are displayed using the h4 and p tags
    (i <= 7 ) ? 
        <LevelTwoCard setTurn={setTurn} turn={turn} key={i} data={arr} type={"image"} />
    : 
    <LevelTwoCard setTurn={setTurn} turn={turn} key={i} data={arr} type={"text"}/>

    
 ))
 
 let shuffledRender = rendering.sort(() => 0.5 - Math.random())


  return (
    <div className="levelTwo">
       {shuffledRender}
    </div>
  )
}



 {/* {mixedArray.map(element => {
            return <LevelTwoCard data={element} key={element.Id}/>
        })} */}
      {/* {eachSelectedArtwork}
      {eachArtworkTitle} */}
      {/* maps all cards text/imgs
      
      ARRAY.map(element=>{

        <LevelTwoCard data={element} />

      })

    
      this is the variable above card same level as the map
      [card1,card2]


      LEVEL TWO CARD 
      _______________

      takes in data (artwork details includes id)

      <>

        {showDetails 
            ?
        < div with details/>
            :
        < div with image/>}

      </>

      FUNCTIONS FOR LEVEL TWO CARD
      _______________________________

      clickHandler {
         modify the state/var in line 43 
      }

      */}


      // let eachSelectedArtwork= selected.map((art) => {
//   return <div className="gridTwo"><img key={art.Title} src={art.Image} width="200px" height="200px" /></div>
// })

// let eachArtworkTitle= duplicate.map((dupe) => {
//   return <div className="artTitle">
//     <h4><em>{dupe.Artist}</em></h4>
//     <p>{dupe.Title}</p>
//     </div>
// })

// let rendering = mixedArray.map((arr, i) => (
//     (i <= 7 ) ? <div className="gridTwo"><img src={arr.Image} height="200px" width="200px"/></div> : <div className="artTitle">
//          <h4><em>{arr.Artist}</em></h4>
//          <p>{arr.Title}</p>
//          </div>
//  ))