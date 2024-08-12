import "./Home.css";
import ImageCarousel from "../Carrusel/carrusel.jsx";
import Marketing from "../marketing/marketing.jsx";


function Home() {
  return (
    <div className="div-home">
      <h5 className="titulo">
        ¡Bienvenid@ a 6ROUP! Nos emociona que nos visites hoy. <br/>Aprovechá
        nuestras ofertas especiales y descubri productos increíbles.<br/> Si
        necesitas ayuda, estamos aquí para ti. ¡Empezá a explorar!
      </h5>
      <ImageCarousel />
      <aside>
        <div className="new">
          <h3>-- NEW IN ---</h3>
          <h2>Lo más nuevo </h2>
          < Marketing />
          
        </div>
        <h4 className="subtitulo">
          ¿Que estas esperando?
        </h4>
      </aside>


      
    </div>
  );
}

export default Home;
