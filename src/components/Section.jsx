import React, { Component } from 'react';
import Products from './section/Products'
import { Route } from 'react-router-dom'
import Cart from './section/Cart'
import Details from './section/Details';
import Payment from './section/Payment'
import About from './About'
import Contact from './Contact'
//import Home from './Home'


export class Section extends Component{
    render(){
        return (
            <section>
                 
                <Route path="/product" component={Products} exact/>
                <Route path="/product/:id" component={Details} />
                <Route path="/cart" component={Cart} />
                <Route path="/payment" component={Payment} />
                <Route path="/contact" component={Contact} />
                <Route path="/about" component={About} />
            
                
            
            </ section>

        )
    }

}

export default Section;