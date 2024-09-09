import { Outlet, Link } from "react-router-dom";
import '../assets/style/Welcome.css'
import logo from '../assets/img/dragones-blanco.png'

function Welcome() {
  return (
    <>
      <nav className="navbar fixed-top bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="logo" width={90} />
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link to="/eventos" className="nav-link">Eventos</Link>
              </li>
              <li className="nav-item">
                <Link to="/galeria" className="nav-link">Galería</Link>
              </li>
              <li className="nav-item">
                <Link to="/noticias" className="nav-link">Noticias</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Más opciones
                </a>
                <ul className="dropdown-menu">
                  <li><Link to="/organigrama" className="dropdown-item">Organigrama</Link></li>
                  <li><Link to="/contacto" className="dropdown-item">Contacto</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}

export default Welcome;