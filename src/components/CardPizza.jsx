import React from "react";
import "./styles.css";

const Card = ({ imageUrl, title, description, ingredients, precio }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <h3>{title}</h3>
      <div className="borde-descripcion">
        <p className="ingredientes">{description}</p>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li> 
          ))}
        </ul>
      </div>

      <p className="precio">
        Precio: <span>{precio}</span>
      </p>
      <div className="card-buttons">
        <button className="boton boton-ver">Ver más 👀</button>
        <button className="boton boton-agregar">Añadir 🛒</button>
      </div>
    </div>
  );
};

export default Card;
