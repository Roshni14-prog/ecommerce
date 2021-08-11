import React, { Component } from 'react';
import apple from './Svg/apple.jpg'
import hp from './Svg/hp.jpg'
import lenovo from './Svg/lenovo.jpg'
import dell from './Svg/dell.jpg'
import accer from './Svg/accer.jpg'







export const DataContext = React.createContext();

export class DataProvider extends Component {
    constructor(props){
        super(props)
    
    this.state = {
        products: [
            {
                "_id": "1",
                "name":"Apple Pro",
                "title":"Apple Microsoft Surphase Pro",
                "cost": '99500',
                "src": apple,
                "description": "The Microsoft Surface Pro 7 is the latest in a long line of 2-in-1 tablets, and not much has changed in terms of design since the original. You get a large 12.3-inch 3:2 screen that works well in landscape or portrait and supports stylus as well as multi-touch input. The trademark kickstand allows for a wide range of positions. The Surface Pro 7 is expensive ",
                "content": "",
                "count": 1

            },
             {
                "_id": "2",
                "name":"HP Pavilion",
                "title": "HP Pavilion",
                "cost": '99000',
                "src": hp,
                "description": "",
                "content": "",
                "count": 1

            },
            {
                "_id": "3",
                "name":"Dell G3 3500",
                "title":"Dell G3 3500",
                "cost": '95000',
                "src": dell,
                "description": "",
                "content": "",
                "count": 1

            },
            {
                "_id": "4",
                "name":"Dell G3 3500",
                "title":"Dell G3 3500",
                "cost": '85000',
                "src": dell,
                "content": "",
                "count": 1

            },
            {
                "_id": "5",
                "name":"Lenovo Legion Y540",
                "title":"Lenovo Legion Y540",
                "cost": '75000',
                "src": lenovo,
                "description": "",
                "content": "",
                "count": 1

            },
            {
                "_id": "6",
                "name":"Accer Aspire 5",
                "title":"Accer Aspire 5",
                "cost": '75000',
                "src": accer ,
                "description": "",
                "content": "",
                "count": 1

            }





        ],
        cart: [],
        total : 0
        
       
    };
}

    addCart = (id)=>{
        const {products, cart}= this.state;
       const check= cart.every(product=>{
           return product._id !== id
       })
       console.log(check)
    
        const data = products.filter(product =>{
            return product._id === id
        }) 
        this.setState({cart: [...cart,...data]})
        console.log(data)
    }

    reduction = id =>{
        const {cart}=this.state;
        cart.forEach(product => {
            if(product._id === id){
                product.count === 1 ? product.count = 1 : product.count -=1;

            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    increase = id =>{
        const {cart}=this.state;
        cart.forEach(product => {
            if(product._id === id){
                product.count += 1; 
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    removeProduct= id =>{
        if(window.confirm("Do You want to delete this product?")){
            const {cart} = this.state;
            cart.forEach((product, index) =>{
                if(product._id === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart})
            this.getTotal();
        }
        
    };
     

    getTotal = () =>{
        const{cart} = this.state;
        const res = cart.reduce((prev, product) =>{
            return prev + (product.cost * product.count);
        },0)
        this.setState({total: res})
    }

    componentDidUpdate(){
        localStorage.setItem('dataCart',JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal',JSON.stringify(this.state.total))
    };

   /* componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !==null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !==null){
            this.setState({total: dataTotal});
        }
    }*/
   /* componentDidMount(){
        
        axios.get(`http://localhost:8081/products`).then(
            (response)=>{
                const products = response.data;
                this.setState({products})
                console.log(response);
            },
            (error)=>{
                console.log(error);
            }
            
        );
    };*/

  

   


    render()
    {
        const {products, cart,total} = this.state;
        const {addCart, reduction,increase,removeProduct, getTotal,getAllProducts} = this;
        return(
            <DataContext.Provider value={{products, addCart, cart,reduction,increase, removeProduct,total, getTotal,getAllProducts}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}
