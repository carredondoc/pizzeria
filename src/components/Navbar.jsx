import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import "./styles.css";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const { totalPrice } = useContext(CartContext);
  const { token, logout } = useContext(UserContext);

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
                <Link to="#" onClick={logout}>
                  🔒 Logout
                </Link>
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
