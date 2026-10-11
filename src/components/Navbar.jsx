import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
    // Puedes usar un valor estático por ahora o el total de tu carrito
    const total = 25000;
    const token = false; // Cambia a true o false según tus pruebas

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="px-4">
            <Container fluid>
                {/* Título de la marca */}
                <Navbar.Brand as={Link} to="/">
                    Pizzería Mamma Mía!
                </Navbar.Brand>

                {/* Botón de hamburguesa para dispositivos móviles */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                {/* Contenedor colapsable que oculta/muestra los links */}
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/" className="btn btn-outline-light text-white ms-2 mb-1 mb-lg-0">
                            🍕 Home
                        </Link>

                        {token ? (
                            <>
                                <Link to="/profile" className="btn btn-outline-light text-white ms-2 mb-1 mb-lg-0">
                                    🔓 Profile
                                </Link>
                                <Link to="/logout" className="btn btn-outline-light text-white ms-2 mb-1 mb-lg-0">
                                    🔒 Logout
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="btn btn-outline-light text-white ms-2 mb-1 mb-lg-0">
                                    🔐 Login
                                </Link>
                                <Link to="/register" className="btn btn-outline-light text-white ms-2 mb-1 mb-lg-0">
                                    🔐 Register
                                </Link>
                            </>
                        )}
                    </Nav>

                    {/* Botón Total del Carrito alineado a la derecha */}
                    <Nav>
                        <Link to="/cart" className="btn btn-outline-info text-white">
                            🛒 Total: ${total.toLocaleString()}
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MyNavbar;