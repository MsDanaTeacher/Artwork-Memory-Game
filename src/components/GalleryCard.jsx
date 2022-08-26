import React,{ useState } from 'react'

export default function GalleryCard({data}) {
    const [showDetails, setshowDetails] = useState(false)
  return (
    <div>
      
        {!showDetails ?
        (<div className="borderBox" key={data.Id} onClick={()=>setshowDetails(prev=>!prev)}>
          <img src={data.Image} width="200px" height="200px" alt="picture"/>
          <h6 className="margin">Credit: <a href="http://www.moma.org" className="link"><em>MoMA</em></a></h6>
          </div>)
          :
          (<div className="borderBox" key={data.Id} onClick={()=>setshowDetails(prev=>!prev)}>
          <h5 className="artistDetails"><em>{data.Artist}</em></h5>
          <h4 className="collectionDetails">{data.Title}</h4>
          
          </div>)
          
        }
        
        
        
    </div>
  )
}
