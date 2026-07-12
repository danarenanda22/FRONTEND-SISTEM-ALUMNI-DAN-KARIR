import {
  FaUsers,
  FaBullseye,
  FaGraduationCap,
  FaBriefcase,
  FaClipboardList,
  FaNewspaper,
} from "react-icons/fa";

function Tentang() {
  return (
    <div>
      {/* Hero */}
      <section
        className="py-5 text-white"
        style={{
          background: "linear-gradient(90deg,#16213e,#2563eb)",
        }}
      >
        <div className="container">

          <h1 className="fw-bold display-4">
            Tentang SI-ALKAR
          </h1>

          <p className="lead mt-3 col-lg-8">
            Sistem Informasi Alumni dan Karir Universitas Nurul Huda
            yang membantu alumni, kampus, dan dunia industri
            saling terhubung dalam satu platform digital.
          </p>

        </div>
      </section>

      {/* Tentang */}
      <section className="py-5">
        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-6">

              <h2 className="fw-bold mb-4">
                Apa itu SI-ALKAR?
              </h2>

              <p className="text-secondary">
                SI-ALKAR merupakan Sistem Informasi Alumni dan Karir
                Universitas Nurul Huda yang dirancang untuk
                mempermudah pengelolaan data alumni,
                pelaksanaan tracer study,
                penyampaian informasi kampus,
                serta penyebaran lowongan pekerjaan kepada alumni.
              </p>

              <p className="text-secondary">
                Sistem ini menjadi jembatan komunikasi
                antara alumni dan universitas sehingga
                informasi karir dapat diperoleh secara cepat,
                akurat, dan mudah diakses kapan saja.
              </p>

            </div>

            <div className="col-lg-6 text-center">

              <img
                src="/graduate.png"
                alt="Alumni"
                className="img-fluid"
                style={{ maxWidth: "380px" }}
              />

            </div>

          </div>

        </div>
      </section>

      {/* Visi Misi */}
      <section className="bg-light py-5">

        <div className="container">

          <div className="row">

            <div className="col-md-6 mb-4">

              <div className="card shadow-sm border-0 h-100">

                <div className="card-body">

                  <FaBullseye
                    size={45}
                    className="text-primary mb-3"
                  />

                  <h3 className="fw-bold">
                    Visi
                  </h3>

                  <p className="text-secondary">
                    Menjadi sistem informasi alumni yang
                    mampu menghubungkan lulusan dengan
                    dunia kerja secara efektif,
                    modern,
                    dan berkelanjutan.
                  </p>

                </div>

              </div>

            </div>

            <div className="col-md-6">

              <div className="card shadow-sm border-0 h-100">

                <div className="card-body">

                  <FaUsers
                    size={45}
                    className="text-success mb-3"
                  />

                  <h3 className="fw-bold">
                    Misi
                  </h3>

                  <ul>

                    <li>Mengelola data alumni.</li>

                    <li>Melaksanakan tracer study.</li>

                    <li>Menyediakan informasi karir.</li>

                    <li>Menyebarkan informasi kampus.</li>

                    <li>Membangun hubungan alumni dengan universitas.</li>

                  </ul>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Fitur */}
      <section className="py-5">

        <div className="container">

          <div className="text-center mb-5">

            <h2 className="fw-bold">
              Fitur Utama SI-ALKAR
            </h2>

            <p className="text-secondary">
              Berbagai layanan yang dapat digunakan alumni.
            </p>

          </div>

          <div className="row g-4">

            <div className="col-md-3">

              <div className="card shadow-sm border-0 h-100 text-center">

                <div className="card-body">

                  <FaGraduationCap
                    size={45}
                    className="text-primary mb-3"
                  />

                  <h5>Data Alumni</h5>

                  <p className="text-secondary">
                    Mengelola profil alumni secara online.
                  </p>

                </div>

              </div>

            </div>

            <div className="col-md-3">

              <div className="card shadow-sm border-0 h-100 text-center">

                <div className="card-body">

                  <FaClipboardList
                    size={45}
                    className="text-success mb-3"
                  />

                  <h5>Tracer Study</h5>

                  <p className="text-secondary">
                    Mengisi data pekerjaan alumni.
                  </p>

                </div>

              </div>

            </div>

            <div className="col-md-3">

              <div className="card shadow-sm border-0 h-100 text-center">

                <div className="card-body">

                  <FaBriefcase
                    size={45}
                    className="text-warning mb-3"
                  />

                  <h5>Lowongan</h5>

                  <p className="text-secondary">
                    Informasi lowongan kerja terbaru.
                  </p>

                </div>

              </div>

            </div>

            <div className="col-md-3">

              <div className="card shadow-sm border-0 h-100 text-center">

                <div className="card-body">

                  <FaNewspaper
                    size={45}
                    className="text-danger mb-3"
                  />

                  <h5>Informasi</h5>

                  <p className="text-secondary">
                    Berita dan informasi kampus terbaru.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer
        className="text-white py-4"
        style={{
          background: "#16213e",
        }}
      >

        <div className="container text-center">

          <h4 className="fw-bold">
            SI-ALKAR
          </h4>

          <p className="mb-1">
            Sistem Informasi Alumni & Karir
            Universitas Nurul Huda
          </p>

          <small>
            © 2026 SI-ALKAR. All Rights Reserved.
          </small>

        </div>

      </footer>
    </div>
  );
}

export default Tentang;