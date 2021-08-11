

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import ProductServices from '../api/ProductServices';
import { DataContext } from '../Context'
import '../css/Products.css'






export class Products extends Component {
    constructor(){
        super();
        this.state={
            products:[]
        }
    }
    static contextType = DataContext;
    /*componentDidMount(){
        ProductServices.getProducts().then((res)=>
        {
            this.setState({products:res.data});
            alert('failed')
        }
        );
    }*/
    
    render(){     
        
        const {products} = this.context;
        return(
            <div id="product">
            {
            products.map(product =>(
             <div className ="card" key={product._id}>
               <Link to={`/product/${product._id}`}>
               <img src={product.src}  alt=""/>
               </Link>
               <div className="content text-center">
                   <h3>
                       <Link to={`/product/${product._id}`}>{product.title}</Link>
                   </h3>
               
                <h3>Rs.{product.cost}</h3>
                <button onClick={()=>this.context.addCart(product._id)}>Add to cart</button>
                
               
             </div>
            </div>
            ))
            }
            </div>
            )      
        }
    }
      export default Products;
 