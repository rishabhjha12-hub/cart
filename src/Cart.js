import React from "react";
import CartItem from "./CartIem";

const Cart =(props)=>  {
 
    
        const {products}=props;
        return(
            
            <div className="cart">
                
               
                {products.map((product)=>{
                    return <CartItem product={product} key={product.id} onIncreaseQuantity={props.onIncreaseQuantity} onDecreaseQuantity={props.onDecreaseQuantity} onDelete={props.onDelete}/>

                })}
                {/* <CartItem/>
                <CartItem/> */}
             
            </div>
        );
    
}
export default Cart;