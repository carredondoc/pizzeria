import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Pizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        console.error("Error al obtener la pizza:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPizza();
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (!pizza) return <p>No se encontró la pizza.</p>;

  return (
    <div className="card">
      <h1 className="nombrePizza">{pizza.name}</h1>
      <img src={pizza.img} alt={pizza.name} className="card-image" />
      <p>{pizza.desc}</p>
      <ul></ul>
      <p></p>
      <p>
        Precio:{" "}
        {pizza.price.toLocaleString("es-CL", {
          style: "currency",
          currency: "CLP",
        })}
      </p>
    </div>
  );
};

export default Pizza;
