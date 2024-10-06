import margaritaImage from "./assets/images/margarita.jpg";
import pepperoniImage from "./assets/images/pepperoni.jpg";
import hawaianaImage from "./assets/images/hawaiana.jpg";
import cuatroQuesosImage from "./assets/images/quesos.jpg";
import vegetarianaImage from "./assets/images/vegetariana.jpg";
import bbqChickenImage from "./assets/images/bbq.jpg";

const pizzas = [
  {
    name: "Pizza Margarita",
    ingredients: ["Tomate", "Mozzarella", "Albahaca fresca"],
    price: 8990,
    image: margaritaImage,
  },
  {
    name: "Pizza Pepperoni",
    ingredients: ["Pepperoni", "Mozzarella", "Salsa de tomate"],
    price: 10990,
    image: pepperoniImage,
  },
  {
    name: "Pizza Hawaiana",
    ingredients: ["Piña", "Jamón", "Mozzarella", "Salsa de tomate"],
    price: 9990,
    image: hawaianaImage,
  },
  {
    name: "Pizza Cuatro Quesos",
    ingredients: ["Mozzarella", "Queso azul", "Parmesano", "Queso de cabra"],
    price: 6990,
    image: cuatroQuesosImage,
  },
  {
    name: "Pizza Vegetariana",
    ingredients: [
      "Pimiento",
      "Champiñones",
      "Cebolla",
      "Aceitunas negras",
      "Mozzarella",
    ],
    price: 7990,
    image: vegetarianaImage,
  },
  {
    name: "Pizza BBQ Chicken",
    ingredients: ["Pollo", "Salsa BBQ", "Cebolla morada", "Mozzarella"],
    price: 12990,
    image: bbqChickenImage,
  },
];

export default pizzas;
