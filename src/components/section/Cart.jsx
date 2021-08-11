
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { DataContext } from '../Context'

import  '../css/Cart.css';

export class Cart extends Component {
   static contextType = DataContext;
   componentDidMount(){
     this.context.getTotal();
   }
     render() {
     const{cart, increase, reduction, removeProduct,total} = this.context;

     if(cart.length === 0){
       return <h2 style={{textAlign: "center"}}>Nothing products</h2>
     }
      else{
        return(
        <>
        {
          cart.map(product=>(
            <div className ="details cart" key={product._id}>
             <img src={product.src} alt="" />
              <div className="box">
                <div className="row">
                  <h2>{product.title}</h2>
                  <span>Rs.{product.cost * product.count}</span>
                  </div>            
                
             <p>{product.description}</p>
             <p>{product.content}</p>
             <div className="amount">
                
                <button className="count" onClick={()=>reduction(product._id)}> - </button>
                <span>{product.count}</span>
                <button className="count" onClick={()=>increase(product._id)}> + </button>
             </div>
             </div>
             <div className="delete" onClick={() => removeProduct(product._id)}>X</div>
             </div>
             ))
            }
              <div className="total">
               <Link   to="/payment">Payment</Link>
                <h3>Total :Rs.{total}</h3>
               </div>
            </>
          )
      }
  }
}
export default Cart;

