import React from 'react'
import GalleryCard from "./GalleryCard.jsx"
export default function ArtLibrary({ artwork }) {


  return (
    <div className="galleryTiles">
        {artwork.map(art=><GalleryCard data={art} />)}
    </div>
  )
}
