import React, { useEffect } from "react";
import Common from './Common';

import aboutImg from './aboutImg.jpg';
import './css/About.css'


const About = () =>{
    useEffect(() =>{
        document.title="About";
    },[]);
    return(
        
            <div>

            <Common 
            name="About Us"
            
            visit="/Contact"
            btname="About Us"
            />
            <div className="nav-cart">
           
                <img src={aboutImg} className="img-fluid rounded mx-auto d-block" display="flex mb-1rem"  alt="home-img" />
    
            </div>
    
           </div>

        
    );
}


export default About;