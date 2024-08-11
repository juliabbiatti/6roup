import Carousel from "react-bootstrap/Carousel";
import imagen1 from "../Image/imagen1.jpg";
import imagen3 from "../Image/imagen3.jpg";
import modelo3 from "../Image/modelo3.jpg";


const ImageCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="carru">
          <img style={{ height: "360px", width: "360px"}} className=" img1" src={imagen1} alt="Primera diapositiva" ></img>

          
        </div>

        <Carousel.Caption>
          <h3>Para hombres</h3>
          <p>Vestir- Jean- Gabardina</p>
        </Carousel.Caption>
      </Carousel.Item>

      

      <Carousel.Item>
        <img
          style={{ height: "360px" }}
          className="d-block w-100"
          src={modelo3}
          alt="Segunda diapositiva"
        />
        <Carousel.Caption>
          <h3>Mochilas</h3>
          <p>Urbanas y ejecutivas.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          style={{ height: "360px" , width: "360px" }}
          className="d-block w-100 "
          src={imagen3}
          alt="Tercera diapositiva"
        />
        <Carousel.Caption>
          <h3>Camperas</h3>
          <p>Cuero y deportiva.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageCarousel;
