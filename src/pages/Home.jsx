import React, { useEffect, useState, useContext } from "react";
import CardPizza from "../components/CardPizza";
import "../components/styles.css";
import { CartContext } from "../context/CartContext";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const { addToCart } = useContext(CartContext);

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
            id={pizza.id} // Asegúrate de pasar el id aquí
            imageUrl={pizza.img}
            title={pizza.name}
            descripcion={pizza.desc}
            tituloIngredientes="Ingredientes"
            ingredients={pizza.ingredients}
            precio={pizza.price.toLocaleString("es-CL", {
              style: "currency",
              currency: "CLP",
            })}
            onAddToCart={() => addToCart(pizza)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
