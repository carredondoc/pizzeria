import React from "react";
import CardPizza from "../components/CardPizza"; // Asegúrate de que CardPizza esté correctamente importado
import pizzas from "../pizzas"; // Importa el array de pizzas dinámicas
import "../components/styles.css";

const Home = () => {
  return (
    <div className="propiedadesHome">
      <h2>¡Descubre nuestra variedad de deliciosas pizzas!</h2>
      <div className="cards-container">
        {pizzas.map((pizza, index) => (
          <CardPizza
            key={index}
            imageUrl={pizza.image} // URL de la imagen desde el array de pizzas
            title={pizza.name} // Nombre de la pizza
            description="Ingredientes" // Puedes mantenerlo si es necesario
            ingredients={pizza.ingredients} // Lista de ingredientes unida por comas
            precio={pizza.price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
