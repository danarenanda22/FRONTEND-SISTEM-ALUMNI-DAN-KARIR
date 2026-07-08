import "./About.css";
import { FaUserGraduate, FaBriefcase, FaChartLine } from "react-icons/fa";

function About() {
  return (
    <section className="about-section">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold">Tentang Sistem</h2>
          <p className="text-muted">
            Sistem Informasi Alumni & Karir membantu alumni tetap
            terhubung dengan kampus dan dunia kerja.
          </p>
        </div>

        <div className="row g-4">

          <div className="col-md-4">
            <div className="about-card">

              <FaUserGraduate className="about-icon" />

              <h4>Data Alumni</h4>

              <p>
                Kelola data alumni secara lengkap dan mudah diperbarui
                kapan saja.
              </p>

            </div>
          </div>

          <div className="col-md-4">
            <div className="about-card">

              <FaBriefcase className="about-icon" />

              <h4>Lowongan Kerja</h4>

              <p>
                Menampilkan informasi lowongan kerja terbaru bagi alumni.
              </p>

            </div>
          </div>

          <div className="col-md-4">
            <div className="about-card">

              <FaChartLine className="about-icon" />

              <h4>Tracer Study</h4>

              <p>
                Membantu kampus mengetahui perkembangan karier alumni.
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;