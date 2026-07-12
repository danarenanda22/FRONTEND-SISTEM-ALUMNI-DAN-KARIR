import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";

function Informasi() {
  const informasi = [
    {
      id: 1,
      judul: "Pelaksanaan Wisuda Tahun 2026",
      kategori: "Akademik",
      tanggal: "10 Januari 2026",
      isi: "Universitas Nurul Huda akan melaksanakan wisuda pada bulan Januari 2026 bagi mahasiswa yang telah memenuhi persyaratan akademik.",
    },
    {
      id: 2,
      judul: "Seminar Nasional Teknologi Informasi",
      kategori: "Seminar",
      tanggal: "15 Februari 2026",
      isi: "Seminar menghadirkan narasumber dari berbagai perusahaan teknologi untuk berbagi pengalaman di dunia industri.",
    },
    {
      id: 3,
      judul: "Pelatihan UI/UX Design",
      kategori: "Pelatihan",
      tanggal: "20 Februari 2026",
      isi: "Pelatihan gratis bagi alumni dan mahasiswa untuk meningkatkan kemampuan desain antarmuka menggunakan Figma.",
    },
    {
      id: 4,
      judul: "Job Fair Universitas Nurul Huda",
      kategori: "Karir",
      tanggal: "5 Maret 2026",
      isi: "Puluhan perusahaan nasional akan membuka kesempatan kerja bagi alumni Universitas Nurul Huda.",
    },
    {
      id: 5,
      judul: "Workshop Laravel & React",
      kategori: "Workshop",
      tanggal: "12 Maret 2026",
      isi: "Workshop membahas pengembangan aplikasi web modern menggunakan Laravel sebagai backend dan React sebagai frontend.",
    },
    {
      id: 6,
      judul: "Pembukaan Program Magang",
      kategori: "Magang",
      tanggal: "20 Maret 2026",
      isi: "Program magang terbuka bagi alumni dan mahasiswa tingkat akhir di berbagai perusahaan mitra kampus.",
    },
  ];

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
            Informasi Kampus
          </h1>

          <p className="mt-3">
            Berbagai informasi terbaru mengenai kegiatan,
            seminar, pelatihan, dan agenda Universitas Nurul Huda.
          </p>
        </div>
      </section>

      {/* Informasi */}
      <section className="py-5 bg-light">

        <div className="container">

          <div className="row">

            {informasi.map((item) => (

              <div
                className="col-lg-6 mb-4"
                key={item.id}
              >

                <div className="card shadow-sm border-0 h-100">

                  <div className="card-body">

                    <span className="badge bg-primary mb-3">

                      {item.kategori}

                    </span>

                    <h4 className="fw-bold">

                      {item.judul}

                    </h4>

                    <p className="text-muted">

                      <FaCalendarAlt className="me-2"/>

                      {item.tanggal}

                    </p>

                    <p>

                      {item.isi}

                    </p>

                  </div>

                  <div className="card-footer bg-white border-0">

                    <button className="btn btn-outline-primary">

                      Baca Selengkapnya

                      <FaArrowRight className="ms-2"/>

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

export default Informasi;