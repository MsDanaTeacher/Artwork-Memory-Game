// import React, { useState } from 'react'


// export default function GalleryForm({ handleFormChange, handleFormSubmit, formData }) {
// const [clicked, setClicked] = useState(false)

// function handleClick(){
//   setClicked(clicked => !clicked);
// }


//   return (
//     <div className="gallery-form">
//     <>
//     <h2 onClick={handleClick}>Create your own gallery!</h2>
//     </>
//     <div>
//     <form className="formStyling" onSubmit={handleFormSubmit}>
//       <input 
//         type="text" 
//         name="Title"  
//         placeholder="Artwork Title"
//         className="inputStyling" 
//         style={{display: clicked ? 'none' : ''}}
//         onChange={handleFormChange}
//         value={formData.Title}
//       />
//       <br />
//       <input 
//         type="text" 
//         name="Artist" 
//         // value={}
//         placeholder="Artist"
//         className="inputStyling" 
//         style={{display: clicked ? 'none' : ''}}
//         onChange={handleFormChange}
//         value={formData.Artist}
//       />
//       <br />
//       <input 
//         type="text" 
//         name="Image" 
//         // value={} 
//         placeholder="Image URL" 
//         className="inputStyling"
//         style={{display: clicked ? 'none' : ''}}
//         onChange={handleFormChange}
//         value={formData.Image}
//       />
//       <br />
//       <button type="submit" 
//       className="buttonStyling"
//       style={{display: clicked ? 'none' : ''}}
//       >Add Artwork</button>
//     </form>
//     </div>
//   </div>
//   )
// }
