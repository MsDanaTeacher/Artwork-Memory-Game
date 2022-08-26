import React from 'react'
import GalleryCard from "./GalleryCard.jsx"
export default function ArtLibrary({ artwork }) {


  return (
    <div className="galleryTiles">
        {artwork.map(art=><GalleryCard key={artwork.Id} data={art} />)}
    </div>
  )
}
