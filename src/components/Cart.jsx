import React, { useState } from "react";
import pizzas from "../pizzas"; // Asegúrate de que este archivo contiene los datos de las pizzas
import "./styles.css";

const Cart = () => {
  // Inicializa el carrito con las pizzas y una cantidad de 1
  const initialCart = pizzas.map((pizza) => ({ ...pizza, quantity: 1 }));
  const [cart, setCart] = useState(initialCart);

  // Función para incrementar la cantidad
  const increaseQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    setCart(updatedCart);
  };

  // Función para disminuir la cantidad (y eliminar si llega a 0)
  const decreaseQuantity = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
    } else {
      updatedCart.splice(index, 1); // Elimina la pizza si la cantidad es 0
    }
    setCart(updatedCart);
  };

  // Calcular el total del carrito
  const totalPrice = cart.reduce(
    (total, pizza) => total + pizza.price * pizza.quantity,
    0
  );

  return (
    <div className="containerCart">
      <h2>🛒 Carrito de compras</h2>
      <ul className="itemsCart">
        {cart.map((pizza, index) => (
          <li key={index} className="listaItemsCart">
            <img
              src={pizza.image}
              alt={pizza.name}
              className="imagenItemCart"
            />
            <div className="containerTextos">
              <h3>{pizza.name}</h3>
              <p>
                Precio:{" "}
                {pizza.price.toLocaleString("es-CL", {
                  style: "currency",
                  currency: "CLP",
                })}
              </p>
              <p>Cantidad: {pizza.quantity}</p>
            </div>
            <div className="botonesCart">
              <button onClick={() => increaseQuantity(index)}>+</button>
              <button
                onClick={() => decreaseQuantity(index)}
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
