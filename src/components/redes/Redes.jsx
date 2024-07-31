import { useState } from "react";
import "./redes.css";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import whatsAPP from "../../assets/images/whatsApp.png";


const Redes = () => {
  const [mostrarTexto, setMostrarTexto] = useState(false);

  const handleImagenClick = () => {
    setMostrarTexto(!mostrarTexto);
  };

  return (
    <div className="redes">
      <img
        className="img"
        src={facebook}
        alt="Facebook"
        onClick={handleImagenClick}
      />
      {mostrarTexto && (
        <a href="https://es-la.facebook.com/" className="href">
          Facebook
        </a>
      )}

      <img
        className="img"
        src={instagram}
        alt="instagram"
        onClick={handleImagenClick}
      />
      {mostrarTexto && (
        <a href="https://www.instagram.com/" className="href">
          Instagram
        </a>
      )}

      <img
        className="img"
        src={whatsAPP}
        alt="whatsApp"
        onClick={handleImagenClick}
      />
      {mostrarTexto && (
        <a href="https://web.whatsapp.com/" className="href">
          whatsApp
        </a>
      )}
    </div>
  );
};

export default Redes;
