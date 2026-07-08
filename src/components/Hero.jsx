import { Link } from "react-router-dom";
import heroImage from "../assets/Image/Hero.png";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="row align-items-center">

          {/* Bagian Kiri */}
          <div className="col-lg-6">

            <span className="badge-hero">
              SISTEM INFORMASI ALUMNI & KARIR
            </span>

            <h1 className="hero-title">
              Hubungkan Alumni
              <br />
              dengan Dunia Kerja
            </h1>

            <p className="hero-text">
Kelola data alumni,<br/>

tracer study,<br/>

informasi lowongan kerja,<br/>

dan komunikasi alumni<br/>

dalam satu platform modern.
</p>

            <div className="mt-4">
              <Link
                to="/lowongan"
                className="btn btn-primary btn-lg me-3"
              >
                Jelajahi Lowongan
              </Link>

              <Link
                to="/login"
                className="btn btn-outline-light btn-lg"
              >
                Login
              </Link>
            </div>

          </div>

          {/* Bagian Kanan */}
          <div className="col-lg-6 text-center">
            <img
              src={heroImage}
              alt="Hero"
              className="hero-image"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;