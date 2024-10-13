import React, { useEffect, useState } from "react";
import CardPizza from "../components/CardPizza";
import "../components/styles.css";

const Home = () => {
  const [pizzas, setPizzas] = useState([]); 

  
  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas");
        const data = await response.json();
        setPizzas(data); 
      } catch (error) {
        console.error("Error al cargar las pizzas:", error); 
      }
    };

    fetchPizzas(); 
  }, []);

  return (
    <div className="propiedadesHome">
      <h2>¡Descubre nuestra variedad de deliciosas pizzas!</h2>
      <div className="cards-container">
        {pizzas.map((pizza, index) => (
          <CardPizza
            key={index}
            imageUrl={pizza.img}
            title={pizza.name}
            descripcion={pizza.desc}
            tituloIngredientes="Ingredientes"
            ingredients={pizza.ingredients}
            precio={pizza.price.toLocaleString("es-CL", {
              style: "currency",
              currency: "CLP",
            })}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
