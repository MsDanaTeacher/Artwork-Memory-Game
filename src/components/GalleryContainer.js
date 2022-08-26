import React, { useState, useEffect } from 'react'
import GalleryForm from './GalleryForm';
import GalleryTiles from './GalleryTiles';

export default function GalleryContainer() {

  const [collection, setCollection] = useState([])
  const [clicker, setClicker] = useState(false)
  const [formData, setFormData] = useState({Title: '', Artist: '', Image: ''})
  const [newObj, setNewObj] = useState({Title: '', Artist: '', Image: ''})

  useEffect(() => {
    fetch('http://localhost:3001/gallery')
    .then(r => r.json())
    .then(data => {
      setCollection(data)
    })
  }, [clicker])


  function handleFormChange(e){
    setFormData({...formData, [e.target.name]: e.target.value})
    setNewObj({...formData, [e.target.name]: e.target.value})
  }


  function handleFormSubmit(e){
    e.preventDefault()
    console.log(formData)
    fetch('http://localhost:3001/gallery', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newObj)
    })
    .then(r => r.json())
    .then(data => {
      setClicker(prev => !prev)
      setFormData({Title: '', Artist: '', Image: ''})
    })
  }

    
  

  return (
    <div className="galleryContainer">
      <GalleryForm 
        handleFormChange={handleFormChange} 
        handleFormSubmit={handleFormSubmit} 
        formData={formData}
        />
      <GalleryTiles newCollection={collection} />
    </div>
  )
}
