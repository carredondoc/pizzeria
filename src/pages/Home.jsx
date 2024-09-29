import React from 'react';
import Card from '../components/CardPizza';
import '../components/styles.css';


import imagen1 from '../assets/images/imagen1.jpg';
import imagen2 from '../assets/images/imagen2.jpg';
import imagen3 from '../assets/images/imagen3.jpg';

const Home = () => {
  return (
    <div className='propiedadesHome'>
      <h2>¡Descubre nuestra variedad de deliciosas pizzas!</h2>
      <div className="cards-container">
        <Card 
          imageUrl={imagen1}
          title="Pizza Napolitana"
          description="Ingredientes"
          ingredients="🍕mozzarella, tomates, jamón, orégano"
          precio="5.950"
        />
        <Card 
          imageUrl={imagen2}
          title="Pizza Española"
          description="Ingredientes"
          ingredients="🍕mozzarella, tomates, jamón, orégano"
          precio="6.950"
        />
        <Card 
          imageUrl={imagen3}
          title="Pizza Pepperoni"
          description="Ingredientes"
          ingredients="🍕mozzarella, tomates, jamón, orégano"
          precio="6.950"
        />
      </div>
    </div>
  );
};

export default Home;
