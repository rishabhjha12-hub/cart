import React from "react";
const CartItem=(props)=>{
    // constructor(){
    //     super();
    //     this.state={
    //         price:999,
    //         title:'phone',
    //         qty:1,
    //         img:''

    //     }
    //     //one more way to bind
    //     //this.increaseQty=this.increaseQty.bind(this);
    //     //one more solutiion to bind is use arrow function
    // }
    // increaseQty(){
    //     console.log('test',this.state)
    //     //this.state.qty+=1;
    //     //setstate form 1(shallow merge)
    //     // this.setState({
    //     //     qty:this.state.qty +1 
    //     // })   
    //     //setstate form 2(shalow merge)-if prevstate require use that
    //     this.setState((prevState)=>{ 
    //         return{
    //             qty: prevState.qty+1
    //         }
    //     },()=>{
    //         console.log('test1',this.state)
    //     }) 
    // }
    // decreaseQty(){
    //     const {qty}=this.state;
    //     if(qty===0){
    //         return;
            
    //     }
        
    //     //this.state.qty+=1;
    //     //setstate form 1(shallow merge)
    //     // this.setState({
    //     //     qty:this.state.qty +1 
    //     // })   
    //     //setstate form 2(shalow merge)-if prevstate require use that
    //     this.setState((prevState)=>{ 
    //         return{
    //             qty: prevState.qty-1
    //         }
    //     },()=>{
    //         console.log('test1',this.state)
    //     }) 
    // }
    
    //    console.log('*',this.props)
        const {price,title,qty}=props.product;
      
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img alt="image" style={styles.image}/>
                </div>
                <div className="right-block">
                     <div style={{fontSize:25}}>{title}</div>
                     <div style={{color:'#777'}}>Rs {price} </div>
                     <div style={{color:'#777'}}>qty {qty}</div>
                </div>
                <div className="cart-item-actions">
                    {/*button*/}
                    <img alt="increase" className="action-icons" onClick={()=>props.onIncreaseQuantity(props.product)} src="https://cdn-icons.flaticon.com/png/512/3303/premium/3303893.png?token=exp=1648101918~hmac=bf7e5990ee6c1c763b5ffcbedd7dbdd2"/>
                    <img alt="decrease" className="action-icons" onClick={()=>props.onDecreaseQuantity(props.product)} src="https://cdn-icons.flaticon.com/png/128/2732/premium/2732689.png?token=exp=1648101947~hmac=4290867a20cf5bfed9fbe623375a1504"/>
                    <img alt="delete" className="action-icons" onClick={()=>props.onDelete(props.product.id)} src="https://cdn-icons-png.flaticon.com/512/3096/3096673.png"/>
                </div>

            </div>

        
        )

    }

const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        color:'#ccc'
    }
}
export default CartItem;