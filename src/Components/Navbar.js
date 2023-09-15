 import React from 'react'
 import proptype from 'prop-types'
//  import { Link } from 'react-router-dom'

 export default function Navbar(props) {
   return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-a" href ="/">Home <span className="sr-only">(current)</span></a>
        </li>
        {/* <li className="nav-item active">
          <a className="nav-a" href ="/about">{props.about}<span className="sr-only">(current)</span></a>
        </li> */}
        {/* <li className="nav-item active">
          <Link className="nav-a" to="/">Contact <span className="sr-only">(current)</span></Link>
        </li> */}
      </ul>
       <div className={`custom-control custom-switch text-${props.mode === 'dark'? 'light':'dark'}`}>
        <input type="checkbox" className="custom-control-input" onClick={props.modechange} id="customSwitch1"/>
        <label className="custom-control-label" htmlFor="customSwitch1">{props.modetext}</label>
      </div>
    
    </div>
  </nav>
   )
   
}
Navbar.propTypes={
title : proptype.string.isRequired,
about : proptype.string.isRequired
}

Navbar.defaultProps={
    title : "Bas(default)",
    about : "Ki"
}
