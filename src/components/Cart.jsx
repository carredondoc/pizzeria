import React, { useState } from "react";
import { cartItems } from "../pizzas"; 
import "./styles.css";

const Cart = () => {
  
  const [cart, setCart] = useState(cartItems);

 
  const aumentar = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    setCart(updatedCart);
  };

  
  const disminuir = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
    } else {
      updatedCart.splice(index, 1); 
    }
    setCart(updatedCart);
  };

  
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="containerCart">
      <h2>🛒 Carrito de compras</h2>
      <ul className="itemsCart">
        {cart.map((item, index) => (
          <li key={index} className="listaItemsCart">
            <img src={item.image} alt={item.name} className="imagenItemCart" />
            <div className="containerTextos">
              <h3>{item.name}</h3>
              <p>
                Precio:{" "}
                {item.price.toLocaleString("es-CL", {
                  style: "currency",
                  currency: "CLP",
                })}
              </p>
              <p>Cantidad: {item.quantity}</p>
            </div>
            <div className="botonesCart">
              <button onClick={() => aumentar(index)}>+</button>
              <button
                onClick={() => disminuir(index)}
                className="botonMenos"
              >
                -
              </button>
            </div>
          </li>
        ))}
      </ul>
      <h3>
        Total:{" "}
        {totalPrice.toLocaleString("es-CL", {
          style: "currency",
          currency: "CLP",
        })}
      </h3>
      <button className="botonPagar">Pagar</button>
    </div>
  );
};

export default Cart;
