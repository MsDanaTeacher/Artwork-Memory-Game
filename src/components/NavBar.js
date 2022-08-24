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
      to="levelone"
      exact
      activeStyle={{
        background: "pink",
      }}
      className = "navTitles"
    > 
    Level I
      </NavLink>
      <NavLink
      to="leveltwo"
      exact
      activeStyle={{
        background: "#FFDA7A",
      }}
      className = "navTitles"
    > 
    Level II
      </NavLink>
      <NavLink
      to="gallery"
      exact
      activeStyle={{
        background: "aquamarine",
      }}
      className = "navTitles"
    > 
    Gallery of Art
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
  

  
