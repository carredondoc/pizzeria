// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom"; 
import "./styles.css";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const total = 25000;
  const token = false; 

  return (
    <nav>
      <div className="menu">
        <img src={logo} alt="Pizzeria Mamma Mia!" className="logo" />

        <ul>
          <li>
            <Link to="/">🍕 Home</Link>
          </li>{" "}
          {token ? (
            <>
              <li>
                <Link to="/profile">🔓 Profile</Link>
              </li>{" "}
              <li>
                <Link to="#">🔒 Logout</Link>
              </li>{" "}
            </>
          ) : (
            <>
              <li>
                <Link to="/login">🔐 Login</Link>
              </li>{" "}
              <li>
                <Link to="/register">🔐 Register</Link>
              </li>{" "}
              <li>
                <Link to="/profile">🤌 Usuario</Link>
              </li>{" "}
            </>
          )}
        </ul>
      </div>
      <div>
        <Link to="/cart">
          <p className="totalCompra">🛒 Total: ${total.toLocaleString()}</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
