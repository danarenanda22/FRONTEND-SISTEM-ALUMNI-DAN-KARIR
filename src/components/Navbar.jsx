import { Link } from "react-router-dom";
import "../assets/css/navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar sticky-top">
      <div className="container">

        <Link className="navbar-brand logo-text" to="/">
          SI<span>-ALKAR</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav ms-auto align-items-center">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Beranda
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/tentang">
                Tentang
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/informasi">
                Informasi
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/lowongan">
                Lowongan
              </Link>
            </li>

            <li className="nav-item ms-3">
              <Link className="btn btn-login" to="/login">
                Login
              </Link>
            </li>

          </ul>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;