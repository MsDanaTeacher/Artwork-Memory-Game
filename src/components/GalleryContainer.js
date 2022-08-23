import React, { useState } from 'react'
import GalleryForm from './GalleryForm';
import GalleryTiles from './GalleryTiles';

export default function GalleryContainer() {
  const [formData, setFormData] = useState({Title: '', Artist: '', Image: ''})
  const [newObj, setNewObj] = useState({Title: '', Artist: '', Image: ''})

  function handleFormChange(e){
    setFormData({...formData, [e.target.name]: e.target.value})
    // setNewObj({...newObj, [e.target.name]: e.target.value})
  }

  function handleFormSubmit(e){
    e.preventDefault()
    setNewObj({...formData, [e.target.name]: e.target.value})
    setFormData({Title: '', Artist: '', Image: ''})
    console.log(newObj)
  }

  return (
    <div className="galleryContainer">
      <GalleryForm handleFormChange={handleFormChange} handleFormSubmit={handleFormSubmit} formData={formData}/>
      <GalleryTiles newObj={newObj} />
    </div>
  )
}
