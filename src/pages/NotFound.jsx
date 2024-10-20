import { Link } from "react-router-dom";
import imagenError from "../assets/images/pizza-triste.png"; 

const NotFound = () => (
  <div className="principalError">
    <div className="contenidoError">
      <div className="imagenError">
        <img src={imagenError} alt="Página no encontrada" />
      </div>

      <div className="textoError">
        <h2>¡UPS! ¡PÁGINA NO ENCONTRADA!</h2>
        <p>
          La página que buscas no existe y nuestra pizza está triste por ello...
          ¡Pero no te preocupes! ¡Utiliza este botón y volverás a hacerla feliz!
        </p>
        <Link to="/"> <button>Volver a Home</button>
        </Link>
      </div>
    </div>
  </div>
);

export default NotFound;
