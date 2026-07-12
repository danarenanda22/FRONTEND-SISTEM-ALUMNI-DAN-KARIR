import { useState } from "react";
import {
  FaSearch,
  FaCalendarAlt,
  FaUser,
  FaArrowRight,
  FaBullhorn,
  FaTags,
} from "react-icons/fa";

function Informasi() {
  const [search, setSearch] = useState("");
  const [selectedInfo, setSelectedInfo] = useState(null);

  // Data dummy informasi (Diperbanyak menjadi 6 data)
  const [informasi] = useState([
    {
      id: 1,
      judul: "Seminar Karir IT: Peluang UI/UX & Web Development",
      kategori: "Akademik & Karir",
      tanggal: "10 Juli 2026",
      penulis: "Admin Prodi Informatika",
      ringkasan:
        "Universitas Nurul Huda mengadakan Seminar Karir Nasional khusus bidang teknologi...",
      konten_lengkap:
        "Dalam rangka mempersiapkan lulusan yang kompeten di era digital, Fakultas Ilmu Komputer Universitas Nurul Huda (UNUHA) menyelenggarakan seminar bertajuk 'Peluang Karir UI/UX Design dan Fullstack Web Development'. Seminar ini akan membahas tren industri terkini, termasuk standarisasi desain menggunakan sistem prototipe modern dan arsitektur web framework terbaru. Acara ini sangat disarankan bagi mahasiswa tingkat akhir dan alumni yang ingin memperdalam portofolio mereka sebelum terjun ke dunia kerja sesungguhnya. Pembicara tamu dari praktisi industri akan hadir untuk sesi bedah CV dan portofolio.",
    },
    {
      id: 2,
      judul: "Pelatihan Pengembangan Bisnis E-Commerce",
      kategori: "Pelatihan",
      tanggal: "15 Juli 2026",
      penulis: "Pusat Karir UNUHA",
      ringkasan:
        "Workshop kewirausahaan bagi alumni yang ingin merintis usaha F&B melalui platform digital.",
      konten_lengkap:
        "Merespons tingginya minat alumni dalam dunia wirausaha, Pusat Karir UNUHA memfasilitasi pelatihan pengembangan bisnis e-commerce. Pelatihan ini difokuskan pada strategi branding, perancangan antarmuka aplikasi pemesanan, dan pemasaran digital. Bagi alumni yang sedang mengembangkan konsep bisnis lokal (seperti perintisan usaha coffee shop di area Belitang dan sekitarnya), ini adalah kesempatan emas untuk mematangkan konsep bisnis Anda agar lebih terstruktur dan menarik minat pelanggan secara luas.",
    },
    {
      id: 3,
      judul: "Job Fair Kampus Terpadu 2026",
      kategori: "Umum",
      tanggal: "20 Juli 2026",
      penulis: "Admin Universitas",
      ringkasan:
        "Job Fair menghadirkan lebih dari 30 perusahaan nasional dan regional Sumatera Selatan.",
      konten_lengkap:
        "Jangan lewatkan kesempatan untuk bertemu langsung dengan HRD dari 30+ perusahaan terkemuka. Harap membawa softcopy dan hardcopy Curriculum Vitae (CV) terbaru Anda. Terdapat juga booth khusus konsultasi karir bagi alumni yang membutuhkan bimbingan persiapan wawancara teknis. Pastikan Anda mendaftar melalui tautan yang telah dikirimkan ke email alumni masing-masing paling lambat H-3 sebelum acara dimulai.",
    },
    {
      id: 4,
      judul: "Undangan Reuni Akbar Lintas Angkatan 2015-2025",
      kategori: "Event & Reuni",
      tanggal: "01 Agustus 2026",
      penulis: "Panitia Reuni Akbar",
      ringkasan:
        "Mari kembali ke kampus dan jalin silaturahmi bersama alumni lintas angkatan dalam acara Reuni Akbar.",
      konten_lengkap:
        "Assalamu'alaikum Wr. Wb. Memanggil seluruh alumni Universitas Nurul Huda dari angkatan 2015 hingga 2025! Mari bernostalgia, mempererat tali silaturahmi, dan memperluas jaringan profesional dalam acara Reuni Akbar 2026. Acara akan dimeriahkan dengan penampilan musik, bazaar UMKM alumni, sesi networking, dan penganugerahan Alumni Berprestasi. Pendaftaran dikenakan biaya kontribusi sebesar Rp100.000 yang sudah termasuk merchandise, makan siang, dan donasi pengembangan kampus. Silakan daftar melalui menu di dashboard alumni Anda.",
    },
    {
      id: 5,
      judul: "Penggalangan Dana Beasiswa Anak Alumni Berprestasi",
      kategori: "Sosial & Donasi",
      tanggal: "05 Agustus 2026",
      penulis: "Ikatan Alumni UNUHA",
      ringkasan:
        "Program beasiswa khusus untuk membantu biaya pendidikan putra-putri alumni yang membutuhkan.",
      konten_lengkap:
        "Sebagai bentuk kepedulian sesama keluarga besar Universitas Nurul Huda, Ikatan Alumni (IKA) UNUHA meluncurkan program 'Beasiswa Tali Kasih Alumni'. Program ini ditujukan untuk memberikan bantuan dana pendidikan bagi putra-putri dari alumni yang berprestasi namun memiliki keterbatasan ekonomi. Kami mengajak Bapak/Ibu alumni yang telah sukses dan memiliki rezeki berlebih untuk dapat berpartisipasi sebagai donatur rutin maupun insidental. Laporan penyaluran dana akan dipublikasikan secara transparan setiap semester melalui portal SI_ALKAR ini.",
    },
    {
      id: 6,
      judul: "Pemilihan Ketua Ikatan Alumni (IKA) Periode 2026-2029",
      kategori: "Organisasi",
      tanggal: "12 Agustus 2026",
      penulis: "KPU Alumni",
      ringkasan:
        "Gunakan hak suara Anda untuk memilih kepengurusan baru Ikatan Alumni Universitas Nurul Huda.",
      konten_lengkap:
        "Masa bakti kepengurusan Ikatan Alumni (IKA) UNUHA periode sebelumnya akan segera berakhir. Oleh karena itu, Panitia Pemilihan Ketua IKA mengundang seluruh alumni yang terdaftar secara resmi di SI_ALKAR untuk menggunakan hak suaranya dalam Pemilu Alumni secara e-voting. Saat ini, terdapat 3 kandidat calon ketua yang telah lolos verifikasi. Visi, misi, dan program kerja masing-masing kandidat dapat diunduh melalui tautan yang akan dikirimkan minggu depan. Mari berpartisipasi aktif membangun organisasi alumni yang lebih solid dan kontributif!",
    },
  ]);

  const hasil = informasi.filter((item) =>
    item.judul.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container-fluid py-4">
      <h2 className="fw-bold mb-1">Informasi Alumni</h2>
      <p className="text-muted mb-4">
        Informasi terbaru dari Universitas Nurul Huda.
      </p>

      {/* Kolom Pencarian */}
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body">
          <div className="input-group">
            <span className="input-group-text bg-primary text-white border-0">
              <FaSearch />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Cari informasi..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Grid Card Informasi */}
      <div className="row">
        {hasil.length > 0 ? (
          hasil.map((item) => (
            <div className="col-lg-4 mb-4" key={item.id}>
              <div
                className="card shadow-sm border-0 h-100 d-flex flex-column"
                style={{ borderRadius: "15px", overflow: "hidden" }}
              >
                <div className="card-body p-4 flex-grow-1">
                  <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill mb-3 fw-medium">
                    <FaTags className="me-2 mb-1" />
                    {item.kategori}
                  </span>
                  <h4 className="fw-bold mb-3" style={{ color: "#1e293b", fontSize: "20px" }}>
                    {item.judul}
                  </h4>
                  <p className="text-muted" style={{ lineHeight: "1.6", fontSize: "14.5px" }}>
                    {item.ringkasan}
                  </p>
                  
                  <hr className="my-3 text-muted" />
                  
                  <div className="d-flex flex-column gap-2 text-muted" style={{ fontSize: "13.5px" }}>
                    <div className="d-flex align-items-center">
                      <FaCalendarAlt className="me-2 text-primary" />
                      {item.tanggal}
                    </div>
                    <div className="d-flex align-items-center">
                      <FaUser className="me-2 text-success" />
                      Oleh: <span className="fw-medium ms-1">{item.penulis}</span>
                    </div>
                  </div>
                </div>
                
                <div className="card-footer bg-white border-0 px-4 pb-4 pt-0 mt-auto">
                  <button
                    className="btn btn-outline-primary w-100 rounded-pill py-2 fw-medium d-flex justify-content-center align-items-center transition-all"
                    onClick={() => setSelectedInfo(item)}
                    style={{ borderWidth: "1.5px" }}
                  >
                    Baca Selengkapnya <FaArrowRight className="ms-2" />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12">
            <div
              className="alert alert-warning border-0 shadow-sm"
              style={{ borderRadius: "10px" }}
            >
              Informasi tidak ditemukan.
            </div>
          </div>
        )}
      </div>

      {/* MODAL BACA SELENGKAPNYA */}
      {selectedInfo && (
        <>
          {/* Backdrop Blur */}
          <div
            className="position-fixed top-0 start-0 w-100 h-100"
            style={{
              backgroundColor: "rgba(15, 23, 42, 0.6)",
              zIndex: 1040,
              backdropFilter: "blur(4px)",
            }}
            onClick={() => setSelectedInfo(null)}
          ></div>

          {/* Modal Container */}
          <div
            className="modal show d-block"
            tabIndex="-1"
            style={{
              zIndex: 1050,
              top: "50%",
              transform: "translateY(-50%)",
              height: "max-content",
            }}
          >
            <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
              <div
                className="modal-content border-0 shadow-lg"
                style={{ borderRadius: "24px", overflow: "hidden" }}
              >
                {/* Header Modal */}
                <div className="modal-header border-0 pb-0 px-4 pt-4">
                  <button
                    type="button"
                    className="btn-close shadow-none"
                    onClick={() => setSelectedInfo(null)}
                    style={{
                      backgroundColor: "#f1f5f9",
                      borderRadius: "50%",
                      padding: "12px",
                    }}
                  ></button>
                </div>

                {/* Body Modal */}
                <div className="modal-body px-4 px-md-5 pb-5 pt-1">
                  
                  {/* Judul & Meta Info */}
                  <div className="text-center mb-4 mt-2">
                    <div
                      className="d-inline-flex justify-content-center align-items-center bg-primary bg-opacity-10 text-primary mb-3"
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        fontSize: "24px",
                      }}
                    >
                      <FaBullhorn />
                    </div>
                    <h2 className="fw-bold mb-3" style={{ color: "#1e293b", lineHeight: "1.4" }}>
                      {selectedInfo.judul}
                    </h2>
                    
                    <div className="d-flex justify-content-center flex-wrap gap-3 text-muted" style={{ fontSize: "14px" }}>
                      <span className="badge bg-light text-dark border px-3 py-2 rounded-pill fw-normal">
                        <FaTags className="me-2 text-primary" /> {selectedInfo.kategori}
                      </span>
                      <span className="d-flex align-items-center">
                        <FaCalendarAlt className="me-2 text-warning" /> {selectedInfo.tanggal}
                      </span>
                      <span className="d-flex align-items-center">
                        <FaUser className="me-2 text-success" /> {selectedInfo.penulis}
                      </span>
                    </div>
                  </div>

                  <hr className="mb-4" />

                  {/* Isi Konten Lengkap */}
                  <div
                    className="content-article"
                    style={{
                      color: "#334155",
                      lineHeight: "1.8",
                      fontSize: "16px",
                      textAlign: "justify",
                    }}
                  >
                    <p>{selectedInfo.konten_lengkap}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Informasi;