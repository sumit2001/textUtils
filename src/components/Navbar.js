import React from 'react';
import PropTypes from 'prop-types';
// import {Link} from 'react-router-dom';
export default function Navbar(props) {

  // const myStyle={
  //   normal:{
  //     height:"20px",
  //     width:"20px",
  //     borderRadius:"10px"
  //   },
  //   color:function(c){
  //     return {backgroundColor:c};
  //   }
  // }
  return (
    <>
     <nav className={`navbar navbar-expand-lg navbar-${props.mode==='warning'?'light':props.mode==='light'?'light':'dark'}`} style={{backgroundColor: props.color.bg[props.mode]}}>
     {/* <nav className={`navbar navbar-expand-lg`}> */}
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    {/* <Link className="navbar-brand" to="/"><b>{props.title}</b></Link> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <Link className="nav-link" aria-current="page" to="/textUtils"><b>Home</b></Link> */}
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        {/* <li className="nav-item"> */}
          {/* <Link className="nav-link" to="/about"><b>{props.aboutText}</b></Link> */}
          {/* <a className="nav-link" href="/about">{props.aboutText}</a> */}
        {/* </li> */}
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form> */}

      <div className="d-flex">
        <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
        <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
        <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
        <div className="bg-dark rounded mx-2" onClick={()=>{props.toggleMode('dark')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
        <div className="bg-light rounded mx-2" onClick={()=>{props.toggleMode('light')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
        <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
      </div>

      {/* <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input" type="checkbox" onClick={()=>{props.toggleMode('primary')}} role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle mode</label>
      </div> */}
      {/* <div className="my-1 mx-1" style={{...myStyle.normal,...myStyle.color("red")}}></div>
      <div className="my-1 mx-1" style={{...myStyle.normal,...myStyle.color("blue")}}></div>
      <div className="my-1 mx-1" style={{...myStyle.normal,...myStyle.color("green")}}></div>
      <div className="my-1 mx-1" style={{...myStyle.normal,...myStyle.color("#1b1818")}}></div>
      <div className="my-1 mx-1" style={{...myStyle.normal,...myStyle.color("white")}}></div> */}
    </div>
  </div>
</nav>
    </>
  )
}
Navbar.propTypes={
    title:PropTypes.string.isRequired,
    aboutText:PropTypes.string
};

Navbar.defaultProps={
    title: "default Title",
    aboutText:"About text here"
}