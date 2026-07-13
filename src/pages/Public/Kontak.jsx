import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";

function Kontak() {
  return (
    <>
      {/* Header */}
      <section
        className="py-5 text-white"
        style={{
          background: "linear-gradient(90deg,#0d6efd,#2563eb)",
        }}
      >
        <div className="container text-center">

          <h1 className="fw-bold">
            Hubungi Kami
          </h1>

          <p className="mt-3">
            Jika memiliki pertanyaan mengenai SI-ALKAR,
            silakan hubungi kami melalui informasi di bawah ini.
          </p>

        </div>
      </section>

      {/* Kontak */}
      <section className="py-5 bg-light">

        <div className="container">

          <div className="row">

            {/* Informasi Kontak */}
            <div className="col-lg-5 mb-4">

              <div className="card shadow-sm border-0 h-100">

                <div className="card-body">

                  <h3 className="fw-bold mb-4">
                    Informasi Kontak
                  </h3>

                  <div className="d-flex mb-4">

                    <FaMapMarkerAlt
                      className="text-primary me-3 mt-1"
                      size={22}
                    />

                    <div>

                      <h6 className="fw-bold">
                        Alamat
                      </h6>

                      <p className="text-muted mb-0">
                        Universitas Nurul Huda
                        <br />
                        Sukaraja, Kabupaten OKU Timur,
                        Sumatera Selatan
                      </p>

                    </div>

                  </div>

                  <div className="d-flex mb-4">

                    <FaPhoneAlt
                      className="text-success me-3 mt-1"
                      size={20}
                    />

                    <div>

                      <h6 className="fw-bold">
                        Telepon
                      </h6>

                      <p className="text-muted mb-0">
                        (0735) 123456
                      </p>

                    </div>

                  </div>

                  <div className="d-flex mb-4">

                    <FaEnvelope
                      className="text-danger me-3 mt-1"
                      size={20}
                    />

                    <div>

                      <h6 className="fw-bold">
                        Email
                      </h6>

                      <p className="text-muted mb-0">
                        info@unuha.ac.id
                      </p>

                    </div>

                  </div>

                  <div className="d-flex">

                    <FaClock
                      className="text-warning me-3 mt-1"
                      size={20}
                    />

                    <div>

                      <h6 className="fw-bold">
                        Jam Operasional
                      </h6>

                      <p className="text-muted mb-0">
                        Senin - Jumat
                        <br />
                        08.00 - 16.00 WIB
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* Form */}
            <div className="col-lg-7">

              <div className="card shadow-sm border-0">

                <div className="card-body">

                  <h3 className="fw-bold mb-4">
                    Kirim Pesan
                  </h3>

                  <form>

                    <div className="mb-3">

                      <label className="form-label">
                        Nama Lengkap
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        placeholder="Masukkan nama"
                      />

                    </div>

                    <div className="mb-3">

                      <label className="form-label">
                        Email
                      </label>

                      <input
                        type="email"
                        className="form-control"
                        placeholder="Masukkan email"
                      />

                    </div>

                    <div className="mb-3">

                      <label className="form-label">
                        Subjek
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        placeholder="Masukkan subjek"
                      />

                    </div>

                    <div className="mb-4">

                      <label className="form-label">
                        Pesan
                      </label>

                      <textarea
                        rows="5"
                        className="form-control"
                        placeholder="Tulis pesan Anda..."
                      ></textarea>

                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary"
                    >

                      <FaPaperPlane className="me-2"/>

                      Kirim Pesan

                    </button>

                  </form>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Maps */}
      <section className="pb-5 bg-light">

        <div className="container">

          <div className="card shadow-sm border-0">

            <div className="card-body">

              <h3 className="fw-bold mb-4">
                Lokasi Kampus
              </h3>

              <iframe
                title="Lokasi UNUHA"
                src="https://www.google.com/maps?q=Universitas+Nurul+Huda&output=embed"
                width="100%"
                height="400"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}

export default Kontak;