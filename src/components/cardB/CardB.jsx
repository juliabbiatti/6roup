import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import remera from "../../assets/images/remera.jpeg";
import { Container } from "react-bootstrap";
import "./CardB.css";
function CardB() {
  return (
    <Container className="d-flex justify-content-center">
      <Card className="bg-dark text-white text-center" style={{ width: "18rem" }}>
        <Card.Img className="card-img-custom p-2 mt-2 mx-auto" variant="top" src={remera} alt="Producto" />
        <Card.Body className="d-flex flex-column align-items-center">
        <Card.Title> REMERA </Card.Title>
    
        <Card.Subtitle> Categoría <div className="vr" /> Indumentaria </Card.Subtitle>
              <Card.Text>
          Lorem ipsum dolor sit amet
          <div> $ 45.000</div>
          
        </Card.Text>
        <Button variant="secondary">Añadir al Carrito</Button>
      </Card.Body>
    </Card>
    </Container>
  );
}

export default CardB;
