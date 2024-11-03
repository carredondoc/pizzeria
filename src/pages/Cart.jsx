import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import "../components/styles.css";

const Cart = () => {
  const { cart, addToCart, removeFromCart, totalPrice } =
    useContext(CartContext);
  const { token } = useContext(UserContext);

  return (
    <div className="containerCart">
      <h2>🛒 Carrito de compras</h2>
      <ul className="itemsCart">
        {cart.map((item, index) => (
          <li key={index} className="listaItemsCart">
            <img src={item.img} alt={item.name} className="imagenItemCart" />
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
              <button onClick={() => addToCart(item)}>+</button>
              <button
                onClick={() => removeFromCart(item.id)}
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
      {token ? (
        <button className="botonPagar">Pagar</button>
      ) : (
        <p className="mensajeAdvertencia">¡Inicia sesión para realizar tu pedido!</p>
      )}
    </div>
  );
};

export default Cart;
