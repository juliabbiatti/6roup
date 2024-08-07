/*import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Offcanvas from "react-bootstrap/Offcanvas";
import remera from "../../assets/images/remera.jpeg";
import { Container } from "react-bootstrap";
import "./CardB.css";

function CardB() {
  const [show, setShow] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(1); 

  const handleAddToCart = () => {
    setCartItems([...cartItems, { product: "REMERA", quantity }]);
    setShow(true);
    setQuantity(1); 
  };

  const handleRemoveFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  const handleCheckout = () => {
    setCartItems([]);
    setShow(false);
  };

  return (
    <>
      <Container className="d-flex justify-content-center">
        <Card className="bg-dark text-white text-center card">
          <Card.Img variant="top" src={remera} alt="Producto" />
          <Card.Body className="d-flex flex-column align-items-center">
            <Card.Title> REMERA </Card.Title>
            <Card.Subtitle>
              Categoría <div className="vr" /> Indumentaria
            </Card.Subtitle>
            <Card.Text>
              Lorem ipsum dolor sit amet
              <div> $ 45.000</div>
            </Card.Text>
            <div className="d-flex align-items-center">
              <Button 
                variant="secondary" 
                onClick={handleAddToCart}
                className="me-2 botonCard"
              >
                Añadir al Carrito
              </Button>
              <div className="d-flex align-items-center">
                <Button 
                  variant="outline-secondary" 
                  onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                  className="me-1"
                >
                  -
                </Button>
                <span className="contador mx-2">{quantity}</span>
                <Button 
                  variant="outline-secondary" 
                  onClick={() => setQuantity(quantity + 1)}
                  className="ms-1"
                >
                  +
                </Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Container>

      <Offcanvas show={show} onHide={() => setShow(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrito de Compras</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cartItems.length === 0 ? (
            <div>No hay artículos en el carrito</div>
          ) : (
            <div>
              {cartItems.map((item, index) => (
                <div key={index} className="d-flex justify-content-between align-items-center mb-2">
                  <span>{item.product} x {item.quantity}</span>
                  <Button variant="danger" size="sm" onClick={() => handleRemoveFromCart(index)}>
                    Eliminar
                  </Button>
                </div>
              ))}
            </div>
          )}
        </Offcanvas.Body>
        {cartItems.length > 0 && (
          <div className="offCanvas">
            <Link to="/shop/Shop" className="continuarComprando">
              Seguir Comprando
            </Link>
            <Button variant="primary" onClick={handleCheckout} className="w-100 mt-2">
              Realizar compra
            </Button>
          </div>
        )}
      </Offcanvas>
    </>
  );
}
export default CardB;*/