import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

const LoginPage = () => {
  const { login } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage("Todos los campos son obligatorios.");
      return;
    }

    const result = await login(email, password);
    if (result.success) {
      setMessage("Inicio de sesión exitoso.");
    } else {
      setMessage(result.message);
    }
  };

  return (
    <div className="ventanaLogin">
      <div className="itemsLogin">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="datosLogin">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Iniciar sesión</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default LoginPage;
