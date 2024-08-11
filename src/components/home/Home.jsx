import "./Home.css";
import ImageCarousel from "../Carrusel/carrusel.jsx";

function Home() {
  return (
    <div className="div-home">
      <h3 className="titulo">
        Bienvenid@ a 6ROUP! Nos emociona que nos visites hoy. Aprovecha
        nuestras ofertas especiales y descubre productos increibles. Si
        necesitas ayuda, estamos aqui para ti.Empieza a explorar!
      </h3>

      <aside>
        <div className="new">
          <h3>-- NEW IN ---</h3>
          <h2>Lo mas nuevo </h2>
        </div>
        <h4 className="subtitulo">
          Que estas esperando para comprar la ropa que deseas
        </h4>
      </aside>

      <ImageCarousel />
    </div>
  );
}

export default Home;
