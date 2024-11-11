import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import "../components/styles.css";

const Cart = () => {
  const { cart, addToCart, removeFromCart, totalPrice } =
    useContext(CartContext);
  const { token } = useContext(UserContext);
  const [message, setMessage] = useState("");

  const handleCheckout = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cart }),
      });
      if (response.ok) {
        setMessage("Compra realizada con éxito.");
      } else {
        setMessage("Error al realizar la compra.");
      }
    } catch (error) {
      setMessage("Error en el servidor.");
    }
  };

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
      {message && <p className="mensajeCompra">{message}</p>}
      {token ? (
        <button onClick={handleCheckout} className="botonPagar">
          Pagar
        </button>
      ) : (
        <p className="mensajeAdvertencia">
          ¡Inicia sesión para realizar tu pedido!
        </p>
      )}
    </div>
  );
};

export default Cart;
