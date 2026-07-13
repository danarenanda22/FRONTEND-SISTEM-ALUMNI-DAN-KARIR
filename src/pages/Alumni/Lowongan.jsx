import { useState } from "react";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaBuilding,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaBriefcase,
  FaSpinner,
  FaInfoCircle, // Icon baru untuk tata cara melamar
} from "react-icons/fa";

function Lowongan() {
  const [search, setSearch] = useState("");
  const [selectedLowongan, setSelectedLowongan] = useState(null);
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  // DATA DUMMY DIPERBARUI DENGAN TAMBAHAN "cara_melamar"
  const [lowongan] = useState([
    {
      id: 1,
      posisi: "Frontend Developer",
      perusahaan: "PT Telkom Indonesia",
      lokasi: "Jakarta",
      jenis: "Full Time",
      gaji: "Rp7.000.000 - Rp10.000.000",
      deadline: "20 Juli 2026",
      deskripsi:
        "Kami mencari Frontend Developer yang berpengalaman dalam membangun antarmuka web yang responsif dan interaktif menggunakan React JS. Kandidat ideal harus memiliki pemahaman kuat tentang HTML, CSS, JavaScript modern, dan integrasi REST API.",
      cara_melamar:
        "Silakan datang langsung ke kantor pusat PT Telkom Indonesia (Gedung Telkom Landmark Tower) pada hari kerja (Senin-Jumat) pukul 09.00 - 11.00 WIB. Harap membawa berkas lamaran lengkap (CV, Fotokopi Ijazah, Transkrip Nilai, dan Cetak Portofolio) di dalam map biru. Temui Bapak Budi Santoso dari divisi HRD di Lantai 4.",
    },
    {
      id: 2,
      posisi: "UI/UX Designer",
      perusahaan: "PT Shopee Indonesia",
      lokasi: "Bandung",
      jenis: "Full Time",
      gaji: "Rp6.000.000 - Rp8.000.000",
      deadline: "25 Juli 2026",
      deskripsi:
        "Kandidat akan bertanggung jawab merancang pengalaman pengguna yang intuitif dan menarik. Wajib menguasai tools desain seperti Figma dan memahami prinsip-prinsip pembuatan Design System yang rapi.",
      cara_melamar:
        "Pendaftaran dilakukan secara daring. Klik tombol 'Lamar Sekarang' di bawah, lalu pastikan Anda juga mengirimkan tautan portofolio (Figma/Behance) Anda ke email hrd@shopee.co.id dengan subjek: LAMARAN UI/UX - [NAMA ANDA].",
    },
    {
      id: 3,
      posisi: "Backend Developer",
      perusahaan: "PT Bank Mandiri",
      lokasi: "Jakarta",
      jenis: "Full Time",
      gaji: "Rp8.000.000 - Rp12.000.000",
      deadline: "30 Juli 2026",
      deskripsi:
        "Membutuhkan pengembang backend yang mahir menggunakan framework Laravel dan pengelolaan database MySQL untuk membangun sistem perbankan internal yang aman dan terukur.",
      cara_melamar:
        "Drop CV fisik Anda di resepsionis Gedung Plaza Mandiri Jakarta selambat-lambatnya sebelum tanggal deadline. Tuliskan kode posisi 'BACKEND-2026' di pojok kanan atas amplop lamaran Anda.",
    },
  ]);

  const hasil = lowongan.filter((item) =>
    item.posisi.toLowerCase().includes(search.toLowerCase())
  );

  const handleLamarPekerjaan = async () => {
    const konfirmasi = window.confirm(
      `Apakah Anda yakin ingin melamar posisi ${selectedLowongan.posisi} di ${selectedLowongan.perusahaan}? Pastikan Anda telah membaca Tata Cara Melamar.`
    );

    if (!konfirmasi) return;

    setIsSubmitting(true);

    try {
      // Simulasi delay jaringan API
      await new Promise((resolve) => setTimeout(resolve, 1500));

      alert("Selamat! Lamaran Anda berhasil diproses ke dalam sistem.");
      setSelectedLowongan(null);
    } catch (error) {
      alert("Terjadi kesalahan. Gagal mengirim lamaran.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container-fluid py-4">
      <h2 className="fw-bold mb-1">Lowongan Kerja</h2>
      <p className="text-muted mb-4">
        Temukan lowongan kerja terbaru untuk alumni Universitas Nurul Huda.
      </p>

      {/* Search */}
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body">
          <div className="input-group">
            <span className="input-group-text bg-primary text-white border-0">
              <FaSearch />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Cari posisi pekerjaan..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Card Lowongan */}
      <div className="row">
        {hasil.length > 0 ? (
          hasil.map((item) => (
            <div className="col-lg-4 mb-4" key={item.id}>
              <div
                className="card shadow-sm border-0 h-100"
                style={{
                  borderRadius: "15px",
                }}
              >
                <div className="card-body">
                  <span className="badge bg-primary mb-3 px-3 py-2 rounded-pill">
                    {item.jenis}
                  </span>
                  <h4 className="fw-bold">{item.posisi}</h4>
                  <p className="text-muted">
                    {item.deskripsi.substring(0, 80)}...
                  </p>
                  <hr />
                  <p className="mb-2">
                    <FaBuilding className="text-primary me-2" />
                    {item.perusahaan}
                  </p>
                  <p className="mb-2">
                    <FaMapMarkerAlt className="text-danger me-2" />
                    {item.lokasi}
                  </p>
                  <p className="mb-2">
                    <FaMoneyBillWave className="text-success me-2" />
                    {item.gaji}
                  </p>
                  <p className="mb-0">
                    <FaCalendarAlt className="text-warning me-2" />
                    Deadline: <strong>{item.deadline}</strong>
                  </p>
                </div>
                <div className="card-footer bg-white border-0 pt-0 pb-3">
                  <button
                    className="btn btn-primary w-100 rounded-pill py-2 fw-medium"
                    onClick={() => setSelectedLowongan(item)}
                  >
                    <FaBriefcase className="me-2 mb-1" />
                    Lihat Detail
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12">
            <div className="alert alert-warning border-0 shadow-sm" style={{ borderRadius: "10px" }}>
              Lowongan pekerjaan tidak ditemukan.
            </div>
          </div>
        )}
      </div>

      {/* MODAL DETAIL LOWONGAN */}
      {selectedLowongan && (
        <>
          <div
            className="position-fixed top-0 start-0 w-100 h-100"
            style={{
              backgroundColor: "rgba(15, 23, 42, 0.6)",
              zIndex: 1040,
              backdropFilter: "blur(4px)",
            }}
            onClick={() => {
              if (!isSubmitting) setSelectedLowongan(null);
            }}
          ></div>

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
                <div className="modal-header border-0 pb-0 px-4 pt-4">
                  <button
                    type="button"
                    className="btn-close shadow-none"
                    onClick={() => setSelectedLowongan(null)}
                    disabled={isSubmitting}
                    style={{
                      backgroundColor: "#f1f5f9",
                      borderRadius: "50%",
                      padding: "12px",
                    }}
                  ></button>
                </div>

                <div className="modal-body px-4 px-md-5 pb-4 pt-1">
                  
                  {/* Hero Section */}
                  <div className="d-flex align-items-center mb-4 mt-2">
                    <div
                      className="bg-primary bg-opacity-10 text-primary d-flex justify-content-center align-items-center me-4"
                      style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "20px",
                        fontSize: "32px",
                        flexShrink: 0,
                      }}
                    >
                      <FaBuilding />
                    </div>
                    <div>
                      <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill mb-2 fw-medium">
                        {selectedLowongan.jenis}
                      </span>
                      <h3 className="fw-bold mb-1" style={{ color: "#1e293b" }}>
                        {selectedLowongan.posisi}
                      </h3>
                      <h6 className="text-muted mb-0 fw-normal" style={{ fontSize: "16px" }}>
                        {selectedLowongan.perusahaan}
                      </h6>
                    </div>
                  </div>

                  {/* Highlight Info Box */}
                  <div
                    className="bg-light p-4 mb-4"
                    style={{ borderRadius: "16px", border: "1px solid #e2e8f0" }}
                  >
                    <div className="row g-3 text-center text-md-start">
                      <div className="col-md-4 d-flex flex-column">
                        <span className="text-muted mb-1" style={{ fontSize: "13px" }}>
                          <FaMapMarkerAlt className="me-2 text-danger" />
                          Lokasi
                        </span>
                        <strong style={{ color: "#334155", fontSize: "15px" }}>
                          {selectedLowongan.lokasi}
                        </strong>
                      </div>
                      
                      <div className="col-md-4 d-flex flex-column border-md-start border-md-end px-md-4">
                        <span className="text-muted mb-1" style={{ fontSize: "13px" }}>
                          <FaMoneyBillWave className="me-2 text-success" />
                          Gaji
                        </span>
                        <strong style={{ color: "#334155", fontSize: "15px" }}>
                          {selectedLowongan.gaji}
                        </strong>
                      </div>
                      
                      <div className="col-md-4 d-flex flex-column ps-md-4">
                        <span className="text-muted mb-1" style={{ fontSize: "13px" }}>
                          <FaCalendarAlt className="me-2 text-warning" />
                          Batas Lamaran
                        </span>
                        <strong style={{ color: "#334155", fontSize: "15px" }}>
                          {selectedLowongan.deadline}
                        </strong>
                      </div>
                    </div>
                  </div>

                  {/* Deskripsi & Tata Cara Melamar */}
                  <div className="mb-2">
                    <h5 className="fw-bold mb-3" style={{ color: "#1e293b", fontSize: "18px" }}>
                      Deskripsi Pekerjaan
                    </h5>
                    <p
                      className="text-muted mb-4"
                      style={{ lineHeight: "1.8", fontSize: "15px", textAlign: "justify" }}
                    >
                      {selectedLowongan.deskripsi}
                    </p>

                    {/* BOX TATA CARA MELAMAR */}
                    <div 
                      className="p-4" 
                      style={{ 
                        backgroundColor: "#f8fafc", // Abu-abu kebiruan sangat terang
                        border: "1px solid #cbd5e1", 
                        borderLeft: "4px solid #0d6efd", // Garis biru aksen di kiri
                        borderRadius: "12px" 
                      }}
                    >
                      <h6 className="fw-bold text-primary d-flex align-items-center mb-2">
                        <FaInfoCircle className="me-2" /> Tata Cara Melamar
                      </h6>
                      <p className="mb-0" style={{ color: "#475569", lineHeight: "1.6", fontSize: "14.5px", textAlign: "justify" }}>
                        {selectedLowongan.cara_melamar}
                      </p>
                    </div>

                  </div>
                </div>

                <div className="modal-footer border-0 px-4 px-md-5 pb-4 pt-2 d-flex justify-content-end gap-2">
                  <button
                    type="button"
                    className="btn btn-light fw-medium px-4 py-2 rounded-pill"
                    onClick={() => setSelectedLowongan(null)}
                    disabled={isSubmitting}
                    style={{ color: "#64748b", border: "1px solid #e2e8f0" }}
                  >
                    Tutup
                  </button>
                  
                  <button
                    type="button"
                    className="btn btn-primary fw-medium px-4 py-2 rounded-pill shadow-sm d-flex align-items-center"
                    onClick={handleLamarPekerjaan}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <FaSpinner className="fa-spin me-2" /> Mengirim...
                      </>
                    ) : (
                      <>
                        <FaBriefcase className="me-2" /> Lamar Sekarang
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Lowongan;