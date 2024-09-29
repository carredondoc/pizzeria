
import React from 'react';
import './styles.css';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const total = 25000;
  const token = false;
  return (
    <nav>
      <div className='menu'>
      <img src={logo} alt="Pizzeria Mamma Mia!" className="logo" />
        {/* <h2>Pizzeria Mamma Mia!</h2> */}
        <ul>
          <li><a href="#">🍕 Home</a></li>
          {token ? (
            <>
              <li><a href="#">🔓 Profile</a></li>
              <li><a href="#">🔒 Logout</a></li>
            </>
          ) : (
            <>
              <li><a href="#">🔐 Login</a></li>
              <li><a href="#">🔐 Register</a></li>
            </>
          )}
        </ul>  
      </div>
      <div>
        <a href=""><p className='totalCompra'>🛒 Total: ${total.toLocaleString()}</p> {}</a>
      </div>
    </nav>
  );
};

export default Navbar;
