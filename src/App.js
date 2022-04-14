
import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
class App extends React.Component {
  constructor(){
    super();
    this.state={
        products:[
            {
                price:999,
                title:'phone',
                qty:1,
                img:'',
                id:1
    
            },{
                price:99,
                title:'watch',
                qty:1,
                img:'',
                id:2
    
            },{
                price:9999,
                title:'laptop',
                qty:1,
                img:'',
                 id:3
    
            }
        ]

    }
   
    //one more way to bind
    //this.increaseQty=this.increaseQty.bind(this);
    //one more solutiion to bind is use arrow function
}
handleIncreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
    //   products:products
      products
    })
  }
  handleDecreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);
    if(product.qty===0){
             return;
                
   }

    products[index].qty -= 1;

    this.setState({
      products:products
    })
  }
  handleDeleteProduct=(id)=>{
    const { products } = this.state;
    const items=products.filter((item)=>id!==item.id);
    this.setState({
        products:items
      })

  }
  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    })

    return count;
  }
  getCartTotal = () => {
    const { products } = this.state;

    let cartTotal = 0;

    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price
    })

    return cartTotal;
  }
  render(){
    const {products}=this.state;
    return (
      <div className="App">
         
        <Navbar count={this.getCartCount()} />
    
       <Cart products={products} onIncreaseQuantity={this.handleIncreaseQuantity} onDecreaseQuantity={this.handleDecreaseQuantity} onDelete={this.handleDeleteProduct}/>
       <div style={ {padding: 10, fontSize: 20} }>TOTAL: {this.getCartTotal()} </div>
      
      </div>
    );

  }
  
}

export default App;
