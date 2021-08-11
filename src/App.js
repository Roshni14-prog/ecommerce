import React from "react";

import { DataProvider } from "./components/Context";
//import Navbar from "./components/Navbar";
import Section  from './components/Section'
import Header from './components/Header'

 class App extends React.Component{
render(){
return(
 
  <DataProvider>
    <div className="app">    
    <Header />
    <Section />
    
    </div>
  </DataProvider>
  
  );
}
}
export default App;


