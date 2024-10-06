import React from "react";
import CardPizza from "../components/CardPizza"; 
import pizzas from "../pizzas"; 
import "../components/styles.css";

const Home = () => {
  return (
    <div className="propiedadesHome">
      <h2>¡Descubre nuestra variedad de deliciosas pizzas!</h2>
      <div className="cards-container">
        {pizzas.map((pizza, index) => (
          <CardPizza
            key={index}
            imageUrl={pizza.image} 
            title={pizza.name}
            description="Ingredientes" 
            ingredients={pizza.ingredients} 
            precio={pizza.price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
