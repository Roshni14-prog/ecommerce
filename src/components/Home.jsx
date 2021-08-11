import React, { useEffect } from "react";
import './css/Home.css'
import image from './aboutImg2.jpg';




const Home = () =>{
    useEffect(() =>{
        document.title="Home";
    },[]);
    
    return(
      
       <div className="image">
            <img src={image}  display="flex mb-1rem"  alt="home-img" />
            </div>

       
        
           
        
    );
};


export default Home;