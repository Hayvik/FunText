import React from "react";
import { useState } from "react";
import { Link, BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import About from "./About.js";
import TextArea from "./TextArea";
import './ModeButton.css';
import '.././App.css';
import './laoder.css'

export default function Bootstrap() {
  
  const [text, setText] = useState('dark');
  return (
    <Router>
      <Content />
    </Router>
  );
}

function Content() {
  const [navcolor, setNavColor] = useState("navbar navbar-expand-lg navbar navbar-light bg-light");
  const [color, setColor] = useState('light');

  const location = useLocation();

  // Check if the current location is the "About" page
  const isAboutPage = location.pathname === "/about";

  const handleModeButton = () => {
    if(navcolor==="navbar navbar-expand-lg navbar navbar-light bg-light"){
      setNavColor("navbar navbar-expand-lg navbar navbar-dark bg-dark")
      setColor('dark');
    }
    if(navcolor==="navbar navbar-expand-lg navbar navbar-dark bg-dark"){
      setNavColor("navbar navbar-expand-lg navbar navbar-light bg-light")
      setColor('light');
    }

  }

  return (
    <>
      <nav className={`border-bottom border-dark ${navcolor}`}>
        <div className="container-fluid" >
        <div class="loader"></div>
          <Link className="navbar-brand" to="/" style={{fontFamily: 'Sofia, sans-serif'}}>FunText</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" target="_blank">About</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><button className="dropdown-item" >Action</button></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2 mt-2" type="search" placeholder="Search" aria-label="Search"  />
              <button className="btn btn-outline-success p-10" type="submit" >Search</button>
            </form>
          </div>
        </div>
        <input type="checkbox" className="l" onClick={handleModeButton}></input>
      </nav>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      <div>
        {!isAboutPage && <TextArea color={color}/>}
      </div>
    </>
  );
}
