import React from 'react'
import {useState} from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';

export function Print(){
    return(
      <h1>Hello</h1>
    );
}

export default function Navbar(props) {
  
  
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode}>
  <div className="container-fluid mx-5">
    {/* <Link className="navbar-brand mx-5" to="/">{props.title}</Link> */}
    <a className="navbar-brand mx-5" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active mx-5" aria-current="page" href="/">Home</a>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link mx-5" to="/about">About</Link>
        </li>   */}
      </ul>
      
      <div class={`mx-5 form-check form-switch text-${props.mode === 'dark' ?'light' : 'dark'}`}>
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleStyle}/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode === 'dark' ?'light' : 'dark'} Mode</label>
</div>
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string
}
// We can add default prop
Navbar.defaultProps = {
  title: 'Set'
}