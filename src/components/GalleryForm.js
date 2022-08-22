import React from 'react'
import GalleryTiles from './GalleryTiles';

export default function GalleryForm() {
  return (
    <div className="gallery-form">
    <h2>Gallery Form</h2>
    <form>
      <input 
        type="text" 
        name="artist" 
        // value={}  
        placeholder="Artist" 
      />
      <input 
        type="text" 
        name="title" 
        // value={}
        placeholder="Artwork title" 
      />
      <input 
        type="text" 
        name="image" 
        // value={} 
        placeholder="Image URL" 
      />
      <button type="submit">Add Artwork</button>
    </form>
  </div>
  )
}
