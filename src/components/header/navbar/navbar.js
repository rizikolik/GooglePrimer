import React from "react";
import Navbar from 'react-bootstrap/Navbar';


export class Nav extends React.Component{

render(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{backgroundColor:"white"}}>
  <a className="navbar-brand active" href="#">
  <h1 class="primer-logo nohover float-left js-ga-track">Primer</h1>
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="#">About <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Skills</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Success Stories</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="#" tabindex="-1" aria-disabled="true">FAQ</a>
      </li>
    </ul>
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
      <p>DOWNLOAD THE APP</p>
      </li>
      <li className="nav-item">
        <a className="nav-link active" href="#"><i class="fab fa-android"></i></a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" href="#" tabindex="-1" aria-disabled="true"><i class="fab fa-apple"></i></a>
      </li>
    </ul>
  </div>
</nav>

    );
}
}