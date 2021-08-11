//import axios from 'axios';
import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';






export  class Payment extends Component {
  state={
    token:[]
  }
  /*const onToken = (token) = {
    axios.post('http://localhost:8081/payment',{
    
    
    })
    .then((response)=>{
    alert('payment success')
    })
    .catch((error)=>{
    alert('payment failed')
    })
    }*/
    render(){
        return (
          <div className="center">
              <h1 style={{textAlign: "center"}}>Payment Component</h1>
              
        
  
  


    <StripeCheckout 
      amount="500"
      billingAddress
      description="Awesome Product"
      image="https://yourdomain.tld/images/logo.svg"
      locale="auto"
      name="YourDomain.tld"
      stripeKey="your_PUBLISHABLE_stripe_key"
      token={this.onToken}
      
      zipCode
    />
  

         
    
  
              
          </div>
        )
    }
}

export default Payment;