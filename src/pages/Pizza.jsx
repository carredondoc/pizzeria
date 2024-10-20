import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardPizza from "../components/CardPizza"; 
import "../components/styles.css";

const Pizza = () => {
  const [pizza, setPizza] = useState(null); 
  const { id } = useParams(); 

 
  const fetchPizza = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
      if (!response.ok) throw new Error("Error en la respuesta de la API");
      const data = await response.json();
      setPizza(data); 
    } catch (error) {
      console.error("Error al obtener la pizza:", error);
    }
  };

  useEffect(() => {
    fetchPizza(); 
  }, [id]);

  if (!pizza) return <p>Cargando...</p>; 

  return (
    <div className="pizza-details">
      
      <CardPizza
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
    </div>
  );
};

export default Pizza;
