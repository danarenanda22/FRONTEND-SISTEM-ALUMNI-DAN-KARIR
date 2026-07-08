import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <div className="row gy-4">

          <div className="col-lg-4">
            <h3 className="footer-logo">
              SI<span>-ALKAR</span>
            </h3>

            <p>
              Sistem Informasi Alumni & Karir yang menghubungkan alumni,
              kampus, dan dunia kerja dalam satu platform modern.
            </p>
          </div>

          <div className="col-lg-2">
            <h5>Menu</h5>

            <ul>
              <li><Link to="/">Beranda</Link></li>
              <li><Link to="/tentang">Tentang</Link></li>
              <li><Link to="/informasi">Informasi</Link></li>
              <li><Link to="/lowongan">Lowongan</Link></li>
            </ul>
          </div>

          <div className="col-lg-3">
            <h5>Kontak</h5>

            <p><FaEnvelope /> admin@sialkar.ac.id</p>

            <p><FaPhone /> 0812-3456-7890</p>

            <p><FaMapMarkerAlt /> Universitas Anda</p>
          </div>

          <div className="col-lg-3">
            <h5>Ikuti Kami</h5>

            <div className="social">

              <a href="#"><FaFacebook /></a>

              <a href="#"><FaInstagram /></a>

              <a href="#"><FaLinkedin /></a>

            </div>
          </div>

        </div>

        <hr />

        <div className="copyright">

          © 2026 SI-ALKAR | All Rights Reserved

        </div>

      </div>
    </footer>
  );
}

export default Footer;