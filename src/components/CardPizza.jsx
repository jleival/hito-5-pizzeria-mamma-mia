import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const CardPizza = ({ id, name, price, ingredients, img, desc }) => {
    return (
        <Card className="shadow-sm h-100" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} style={{ height: '200px', objectFit: 'cover' }} />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="fw-bold text-capitalize">{name}</Card.Title>
                <hr />
                <Card.Text className="text-muted small">
                    {desc}
                </Card.Text>
                <hr />
                <div className="text-center mb-3">
                    <span className="fw-bold">Ingredientes:</span>
                    <ul className="list-unstyled text-muted small mb-0">
                        {ingredients.map((ing, i) => (
                            <li key={i}>🍕 {ing}</li>
                        ))}
                    </ul>
                </div>
                <div className="mt-auto">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h5 className="fw-bold mb-0">Precio: ${price}</h5>
                    </div>

                    <div className="d-flex justify-content-between">
                        {/* CONDICIÓN: Si el ID es 'p001', mostramos el botón que lleva a la ruta. 
                            Si es otra pizza, podemos mostrar un botón desactivado o que no haga nada por ahora. */}
                        {id === 'p001' ? (
                            <Link to="/pizza/p001" className="btn btn-outline-dark btn-sm">
                                Ver más 👀
                            </Link>
                        ) : (
                            <Button variant="outline-secondary" size="sm" disabled>
                                Ver más 👀
                            </Button>
                        )}

                        <Button variant="dark" size="sm">Añadir 🛒</Button>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default CardPizza;