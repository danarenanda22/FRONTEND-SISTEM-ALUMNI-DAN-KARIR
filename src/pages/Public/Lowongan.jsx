import { FaBriefcase, FaMapMarkerAlt, FaClock } from "react-icons/fa";

function Lowongan() {
  const lowongan = [
    {
      id: 1,
      perusahaan: "PT Telkom Indonesia",
      posisi: "Frontend Developer",
      lokasi: "Jakarta",
      tipe: "Full Time",
      deskripsi:
        "Membutuhkan Frontend Developer yang menguasai React JS.",
    },
    {
      id: 2,
      perusahaan: "Bank BCA",
      posisi: "UI/UX Designer",
      lokasi: "Palembang",
      tipe: "Full Time",
      deskripsi:
        "Bertanggung jawab membuat desain antarmuka aplikasi.",
    },
    {
      id: 3,
      perusahaan: "PT Astra International",
      posisi: "Backend Developer",
      lokasi: "Bandung",
      tipe: "Full Time",
      deskripsi:
        "Mengembangkan REST API menggunakan Laravel.",
    },
    {
      id: 4,
      perusahaan: "Shopee Indonesia",
      posisi: "Mobile Developer",
      lokasi: "Jakarta",
      tipe: "Hybrid",
      deskripsi:
        "Mengembangkan aplikasi mobile berbasis Flutter.",
    },
    {
      id: 5,
      perusahaan: "Tokopedia",
      posisi: "Data Analyst",
      lokasi: "Jakarta",
      tipe: "Full Time",
      deskripsi:
        "Melakukan analisis data untuk kebutuhan bisnis.",
    },
    {
      id: 6,
      perusahaan: "PT PLN",
      posisi: "IT Support",
      lokasi: "Palembang",
      tipe: "Kontrak",
      deskripsi:
        "Mendukung operasional infrastruktur teknologi informasi.",
    },
  ];

  return (
    <>
      {/* Header */}

      <section
        className="py-5 text-white"
        style={{
          background: "linear-gradient(90deg,#0d6efd,#0b5ed7)",
        }}
      >
        <div className="container text-center">

          <h1 className="fw-bold">
            Lowongan Pekerjaan
          </h1>

          <p className="mt-3">
            Temukan informasi lowongan pekerjaan terbaru
            khusus Alumni Universitas Nurul Huda.
          </p>

        </div>
      </section>

      {/* List Lowongan */}

      <section className="py-5 bg-light">

        <div className="container">

          <div className="row">

            {lowongan.map((item) => (

              <div
                className="col-lg-4 col-md-6 mb-4"
                key={item.id}
              >

                <div className="card shadow-sm border-0 h-100">

                  <div className="card-body">

                    <h5 className="fw-bold text-primary">

                      {item.posisi}

                    </h5>

                    <h6 className="mb-3">

                      {item.perusahaan}

                    </h6>

                    <p className="text-muted">

                      {item.deskripsi}

                    </p>

                    <p className="mb-2">

                      <FaMapMarkerAlt className="text-danger me-2"/>

                      {item.lokasi}

                    </p>

                    <p>

                      <FaClock className="text-success me-2"/>

                      {item.tipe}

                    </p>

                  </div>

                  <div className="card-footer bg-white border-0">

                    <button className="btn btn-primary w-100">

                      <FaBriefcase className="me-2"/>

                      Lihat Detail

                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>
    </>
  );
}

export default Lowongan;