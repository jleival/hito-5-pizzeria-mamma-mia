import { Link } from 'react-router-dom';

const Navbar = () => {
  // Puedes usar un token simulado por ahora para cambiar la vista si lo deseas, o dejar los botones estáticos según el hito
  const token = false; 

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">Pizzería Mamma Mía!</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="btn btn-outline-light btn-sm ms-2" to="/">🍕 Home</Link>
          </li>
          {token ? (
            <>
              <li className="nav-item">
                <Link className="btn btn-outline-light btn-sm ms-2" to="/profile">🔓 Profile</Link>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-light btn-sm ms-2">🔒 Logout</button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="btn btn-outline-light btn-sm ms-2" to="/login">🔐 Login</Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-outline-light btn-sm ms-2" to="/register">🔐 Register</Link>
              </li>
            </>
          )}
        </ul>
        <div className="d-flex">
          <Link className="btn btn-outline-primary" to="/cart">
            🛒 Total: $25.000
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;