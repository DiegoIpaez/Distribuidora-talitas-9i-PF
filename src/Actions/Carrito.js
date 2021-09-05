import React, { useReducer } from "react";
import CartItem from "../components/CartItem";
import ProductItem from "../components/ProductItem";
import {
  carritoInitialState,
  carritoReducer,
} from "../reducers/carritoReducer";
import { TYPES } from "./carritoActions";

const Carrito = () => {
  const [state, dispatch] = useReducer(carritoReducer, carritoInitialState);

  const {producto, cart} = state;


  const ncantidad = Object.values(cart).reduce((acc, {price, quantity}) => acc + price * quantity,0)

  const addToCart = (id) => {
    dispatch({type:TYPES.ADD_TO_CART,payload:id});
 
  };

  const delFromCart = (id,all = false) => {
    if(all){
      dispatch({type:TYPES.REMOVE_ALL_FROM_CART,payload:id})
    }
    else{
      dispatch({type:TYPES.REMOVE_ONE_FROM_CART, payload:id})
    }
  };

  const clearCart = () => {dispatch({type:TYPES.CLEAR_CART})};
  return (
    <div>
      <h1>Carrito de compra</h1>
      <hr />
      <h3>Productos</h3>
      <hr />
      <article className="box grid-responsive ">
        {}
        {producto.map((producto) => (
          <ProductItem key={producto.id} data={producto} addToCart={addToCart} />
        ))}{}
      </article>
      <hr />
      <h3> Carrito</h3>
      <hr />
      <article className="box">
        <button onClick = {clearCart}>Limpiar Carrito</button>
        {
          cart.map((item, index )=> <CartItem key = {index} data ={item} delFromCart = {delFromCart}/>)
        }
      </article>
      <hr />
      <h4>Total Carrito</h4>
      <h5>${ncantidad}</h5>
    </div>
  );
};

export default Carrito;
