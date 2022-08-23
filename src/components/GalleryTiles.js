import React from 'react'

export default function GalleryTiles({ newObj }) {

  const newGallery = () => (
    newObj.map((obj) => (
      <div>
      <img src={obj.Image} width="200px" height="200px"/>
      <h4>{obj.Title}</h4>
      <h5>{obj.Artist}</h5>
      </div>
    ))
  )
  
  return (
    <div className="galleryTiles">
      {newGallery}
    </div>
  )
}
