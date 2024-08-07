import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Offcanvas from "react-bootstrap/Offcanvas";
import { fetchProductos } from "./api";
import { Container, Row, Col } from "react-bootstrap";
import "./CardB.css";

function CardBB() {
  const [show, setShow] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProductos();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find(item => item.product.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { product, quantity }]);
    }
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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Container>
        <Row>
          {products.map((product) => (
            <Col key={product.id} xs={12} sm={6} md={4} lg={4}>
              <Card className="bg-dark text-white text-center mb-4">
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column align-items-center">
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {product.category}
                  </Card.Subtitle>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text>${product.price}</Card.Text>
                  <div className="d-flex align-items-center">
                    <Button
                      variant="secondary"
                      onClick={() => handleAddToCart(product)}
                      className="me-2 w-100"
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
            </Col>
          ))}
        </Row>
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
                <div
                  key={index}
                  className="d-flex justify-content-between align-items-center mb-2"
                >
                  <span>
                    {item.product.title} x {item.quantity}
                  </span>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleRemoveFromCart(index)}
                  >
                    Eliminar
                  </Button>
                </div>
              ))}
            </div>
          )}
        </Offcanvas.Body>
        {cartItems.length > 0 && (
          <div className="p-3">
            <Link to="/shop/Shop" className="continuarComprando">
              Seguir Comprando
            </Link>
            <Button
              variant="primary"
              onClick={handleCheckout}
              className="w-100 mt-2"
            >
              Realizar compra
            </Button>
          </div>
        )}
      </Offcanvas>
    </>
  );
}

export default CardBB;
