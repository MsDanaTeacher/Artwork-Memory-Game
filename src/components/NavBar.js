import React from 'react';
import { NavLink } from "react-router-dom";



export default function NavBar() {
  return (
<div>
    <div className="navBar">
      {/* <NavLink
      to="/"
      exact
      activeStyle={{
        background: "pink",
      }}
      className = "navTitles"
     > 
    Welcome
      </NavLink> */}
      <NavLink
      to="artlibrary"
      exact
      activeStyle={{
        background: "#FFDA7A",
        padding: "10px",
      }}
      className = "navTitles"
    > 
    The Collection
      </NavLink>
      <NavLink
      to="levelone"
      exact
      activeStyle={{
        background: "pink",
        padding: "10px",
      }}
      className = "navTitles"
    > 
    Matching Game
      </NavLink>
      {/* <NavLink
      to="leveltwo"
      exact
      activeStyle={{
        background: "yellow",
        padding: "10px",
      }}
      className = "navTitles"
    > 
    Level II
      </NavLink> */}
      <NavLink
      to="gallery"
      exact
      activeStyle={{
        background: "aquamarine",
        padding: "10px",
      }}
      className = "navTitles"
    > 
    My Gallery
      </NavLink>
      </div>
      <div id="line">
      <p>_____________________________________________________________________________________________________________________________________________________________________________</p>
      </div>
  </div>
    
    )
  }
    // {/* <div className="navBar">
    //   <p className="navTitles">Welcome</p>
    //   <p className="navTitles">Level I</p>
    //   <p className="navTitles">Level II</p>
    //   <p className="navTitles">Gallery of Art</p>
    // </div>
    // <div id="line">
    //   <p>_____________________________________________________________________________________________________________________________________________________________________________</p>
    // </div> */}
  

  
