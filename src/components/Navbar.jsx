/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink } from 'react-router-dom';
//import {DataContext} from './Context'

//const {cart} = this.context;
//static contextType=DataContext;
const Navbar = ()=>{
    return(
        <>
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
            <NavLink activeClassName="menu_active" exact className="navbar-brand" to="/">GadgetsWorld</NavLink>
            <button className="navbar-toggler"  
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarSupportedContent" 
              aria-controls="navbarSupportedContent" 
              aria-expanded="false" 
              aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0 ">

        <li className="nav-item">
          <NavLink activeClassName="menu_active" exact className="nav-link active"  to="/">Home</NavLink>
        </li>

        <li className="nav-item">
          <NavLink activeClassName="menu_active" exact className="nav-link active" to="/service">Service</NavLink>
        </li>

        
        <li className="nav-item">
          <NavLink activeClassName="menu_active" exact className="nav-link active"  to="/About">About</NavLink>
        </li>

        <li className="nav-item">
          <NavLink activeClassName="menu_active" exact className="nav-link active"  to="/Contact">Contact</NavLink>
        </li>

        <li className="">
          <NavLink activeClassName="menu_active" exact className="nav-link active"  to="/Payment">Payment</NavLink>
        </li>

      </ul>
      
    </div>
  </div>
</nav>
</div>
</div>
</div>
     </ >
    )
}
export default Navbar;