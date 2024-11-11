import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { email, logout } = useContext(UserContext);

  return (
    <div className="profile">
      <div className="contenidoProfile">
        <h1>Perfil</h1>
        <p>Email: {email || "usuario@ejemplo.com"}</p>
        <button onClick={logout} className="cerrarSesion">
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default Profile;
