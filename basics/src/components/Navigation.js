import React, { useState } from "react";
import PropTypes from 'prop-types'


export default function Navigation(props) {
  
  return (
    // props is  used
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
       </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/"> {props.aboutText}
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form>
          <div className={`form-check form-switch mx-3 my-3 text-${props.mode==='light'?"dark":"light"}`}>
  <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault ">{props.mode==='light'?"Dark Mode":"Light Mode"}</label>
</div>
        </div>
      </div>
    </nav>
  );
}
// Navbar.PropTypes= { title: PropTypes.string, aboutText: PropTypes.string }
