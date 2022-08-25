import React,{useState,useEffect} from 'react';

export default function LevelTwoCard({data, type, turn, setTurn}) {
  const [currentState, setCurrentState] = useState({
    type:"flipped",
    content:<h1>initalstate</h1>
  })
  

  let handleClick = () => {
    console.log(type,"clicked", data.Id)
  }

  let renderCard = () => {
    if (type === "text"){
      //display the text div 
      setCurrentState({...currentState,content: <div className="artTitle" onClick={handleClick} key={data.Title} ><h4><em>{data.Artist}</em></h4><p>{data.Title}</p></div>})
    }else{
      setCurrentState({...currentState,content: <div className="gridTwo" key={data.Id}><img src={data.Image} height="200px" width="200px" onClick={handleClick}/></div> })
      //display the image div 
    }
  }


  useEffect(()=>{
    renderCard()
  },[])

  //???
  return (
    <>
      {currentState.content}
    </>
  )
}
