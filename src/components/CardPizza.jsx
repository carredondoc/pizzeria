import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const CardPizza = ({
  imageUrl,
  title,
  descripcion,
  tituloIngredientes,
  ingredients,
  precio,
  onAddToCart,
  id, 
}) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <p className="descripcion">{descripcion}</p>
      <div className="borde-descripcion">
        <p className="ingredientes">{tituloIngredientes}</p>
        <ul className="listaIngredientes">
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <p className="precio">
        Precio: <span>{precio}</span>
      </p>
      <div className="card-buttons">
        <Link to={`/pizza/${id}`}>
          <button className="boton boton-ver">Ver más 👀</button>
        </Link>
        <button className="boton boton-agregar" onClick={onAddToCart}>
          Añadir 🛒
        </button>
      </div>
    </div>
  );
};

export default CardPizza;
