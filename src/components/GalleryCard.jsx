import React,{ useState } from 'react'

export default function GalleryCard({data}) {
    const [showDetails, setshowDetails] = useState(false)
  return (
    <div>
        {!showDetails ?
        (<div className="borderBox" key={data.Id} onClick={()=>setshowDetails(prev=>!prev)}>
          <img src={data.Image} width="200px" height="200px" alt="picture"/>
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
