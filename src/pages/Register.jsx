import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

const RegisterPage = () => {
  const { register } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setMessage("Todos los campos son obligatorios.");
      return;
    }

    if (password.length < 6) {
      setMessage("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Las contraseñas no coinciden.");
      return;
    }

    const result = await register(email, password);
    if (result.success) {
      setMessage("Registro exitoso.");
    } else {
      setMessage(result.message);
    }
  };

  return (
    <div className="ventanaRegister">
      <div className="itemsRegister">
        <h2>Registro</h2>
        <form onSubmit={handleSubmit} className="datosRegister">
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
          <input
            type="password"
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit">Registrar</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default RegisterPage;
