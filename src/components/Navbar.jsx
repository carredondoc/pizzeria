import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext"; 
import "./styles.css";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const { totalPrice } = useContext(CartContext); 

  const token = false; 

  return (
    <nav>
      <div className="menu">
        <img src={logo} alt="Pizzeria Mamma Mia!" className="logo" />
        <ul>
          <li>
            <Link to="/">🍕 Home</Link>
          </li>
          {token ? (
            <>
              <li>
                <Link to="/profile">🔓 Profile</Link>
              </li>
              <li>
                <Link to="#">🔒 Logout</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">🔐 Login</Link>
              </li>
              <li>
                <Link to="/register">🔐 Register</Link>
              </li>
              <li>
                <Link to="/profile">🤌 Usuario</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div>
        <Link to="/cart">
          <p className="totalCompra">
            🛒 Total: ${totalPrice.toLocaleString()}
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
