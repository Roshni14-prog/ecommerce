import React,{useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Jumbotron } from "reactstrap";
import './css/Header.css'


const Common = (props) =>{
    useEffect(() =>{
        document.title="Common";
    },[]);
    return(
        <div>
        <Jumbotron className="text-center bg-warning">
            <h1>{props.name}</h1>
            <p >This website will provide you all the laptop details</p>
            <div className="mt-3">
                <NavLink to={props.visit} className="btn-get-started">{props.btname}</NavLink>
            </div>
        </Jumbotron>
    </div>
    )
}

export default Common;