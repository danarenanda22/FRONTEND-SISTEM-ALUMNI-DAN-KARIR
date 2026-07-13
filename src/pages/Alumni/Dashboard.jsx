import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaBriefcase,
  FaNewspaper,
  FaCheckCircle,
  FaUserCircle,
  FaClipboardList,
  FaArrowRight,
  FaMapMarkerAlt,
  FaBuilding,
  FaClock
} from "react-icons/fa";

function DashboardAlumni() {
  const location = useLocation();

  // State awal diset default ke "Alumni Mahasiswa"
  const [userData, setUserData] = useState({
    nama: "Alumni Mahasiswa",
    prodi: "Informatika",
    statusTracer: "Belum Mengisi",
    profilLengkap: 85,
  });

  const [stats] = useState({
    lowonganAktif: 12,
    informasiKampus: 5,
  });

  const [lowonganTerbaru] = useState([
    {
      id: 1,
      posisi: "Frontend Web Developer",
      perusahaan: "Arkadia Tech",
      lokasi: "Remote",
      jenis: "Full Time"
    },
    {
      id: 2,
      posisi: "UI/UX Designer",
      perusahaan: "PT Digital Creative",
      lokasi: "Jakarta Selatan",
      jenis: "Contract"
    }
  ]);

  const [tanggal, setTanggal] = useState("");
  
  useEffect(() => {
    // Membaca data user dari localStorage jika sudah login/diperbarui
    const storedUser = JSON.parse(localStorage.getItem("user"));
    
    if (storedUser && storedUser.nama) {
      setUserData(prevState => ({
        ...prevState,
        nama: storedUser.nama
      }));
    }

    // Mengatur format tanggal hari ini
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    setTanggal(new Date().toLocaleDateString('id-ID', options));
    
  }, [location]);

  return (
    <div className="container-fluid py-4" style={{ backgroundColor: "#0f172a", minHeight: "100vh", color: "#e2e8f0" }}>
      
      {/* HEADER SECTION */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 pb-2 border-bottom border-secondary border-opacity-25">
        <div>
          <h2 className="fw-bold mb-1" style={{ color: "#f8fafc" }}>Dashboard</h2>
          <p className="mb-0" style={{ color: "#94a3b8" }}>Selamat datang kembali, {userData.nama}</p>
        </div>
        <div className="mt-3 mt-md-0 px-4 py-2 rounded-pill" style={{ backgroundColor: "#1e293b", border: "1px solid #334155" }}>
          <FaClock className="me-2 text-primary" />
          <span style={{ fontSize: "14px", color: "#cbd5e1" }}>{tanggal}</span>
        </div>
      </div>

      {/* STATISTIC CARDS */}
      <div className="row g-4 mb-4">
        <div className="col-xl-3 col-sm-6">
          <div className="card h-100 border-0" style={{ backgroundColor: "#1e293b", borderRadius: "16px", border: "1px solid #334155" }}>
            <div className="card-body p-4 d-flex align-items-center">
              <div className="rounded-circle d-flex justify-content-center align-items-center me-3 flex-shrink-0" style={{ width: "55px", height: "55px", backgroundColor: "rgba(59, 130, 246, 0.1)", color: "#3b82f6", fontSize: "22px" }}>
                <FaBriefcase />
              </div>
              <div>
                <h3 className="fw-bold mb-0" style={{ color: "#f8fafc" }}>{stats.lowonganAktif}</h3>
                <span style={{ color: "#94a3b8", fontSize: "13px" }}>Lowongan Aktif</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-sm-6">
          <div className="card h-100 border-0" style={{ backgroundColor: "#1e293b", borderRadius: "16px", border: "1px solid #334155" }}>
            <div className="card-body p-4 d-flex align-items-center">
              <div className="rounded-circle d-flex justify-content-center align-items-center me-3 flex-shrink-0" style={{ width: "55px", height: "55px", backgroundColor: "rgba(245, 158, 11, 0.1)", color: "#f59e0b", fontSize: "22px" }}>
                <FaNewspaper />
              </div>
              <div>
                <h3 className="fw-bold mb-0" style={{ color: "#f8fafc" }}>{stats.informasiKampus}</h3>
                <span style={{ color: "#94a3b8", fontSize: "13px" }}>Informasi Kampus</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-sm-6">
          <div className="card h-100 border-0" style={{ backgroundColor: "#1e293b", borderRadius: "16px", border: "1px solid #334155" }}>
            <div className="card-body p-4 d-flex align-items-center">
              <div className="rounded-circle d-flex justify-content-center align-items-center me-3 flex-shrink-0" style={{ width: "55px", height: "55px", backgroundColor: "rgba(16, 185, 129, 0.1)", color: "#10b981", fontSize: "22px" }}>
                <FaCheckCircle />
              </div>
              <div>
                <h5 className="fw-bold mb-0" style={{ color: "#10b981" }}>{userData.statusTracer}</h5>
                <span style={{ color: "#94a3b8", fontSize: "13px" }}>Status Tracer Study</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-sm-6">
          <div className="card h-100 border-0" style={{ backgroundColor: "#1e293b", borderRadius: "16px", border: "1px solid #334155" }}>
            <div className="card-body p-4 d-flex align-items-center">
              <div className="rounded-circle d-flex justify-content-center align-items-center me-3 flex-shrink-0" style={{ width: "55px", height: "55px", backgroundColor: "rgba(239, 68, 68, 0.1)", color: "#ef4444", fontSize: "22px" }}>
                <FaUserCircle />
              </div>
              <div>
                <h3 className="fw-bold mb-0" style={{ color: "#f8fafc" }}>{userData.profilLengkap}%</h3>
                <span style={{ color: "#94a3b8", fontSize: "13px" }}>Profil Lengkap</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-xl-8">
          <div className="card border-0 mb-4" style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #172554 100%)", borderRadius: "20px" }}>
            <div className="card-body p-4 p-md-5 d-flex flex-column flex-md-row align-items-center justify-content-between gap-4">
              <div>
                <span className="badge bg-white text-primary mb-2 px-3 py-2 rounded-pill">Prioritas</span>
                <h4 className="fw-bold text-white mb-2">Pembaruan Data Karir Alumni</h4>
                <p className="mb-0" style={{ color: "#93c5fd", fontSize: "15px", maxWidth: "500px" }}>
                  Bantu Universitas mengevaluasi lulusan Program Studi {userData.prodi} dengan mengisi kuesioner Tracer Study. Data Anda sangat berharga bagi kami.
                </p>
              </div>
              <Link to="/alumni/tracer-study" className="btn btn-primary rounded-pill px-4 py-3 fw-bold d-flex align-items-center flex-shrink-0 shadow-lg border-0" style={{ backgroundColor: "#3b82f6" }}>
                <FaClipboardList className="me-2" /> Isi Sekarang
              </Link>
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="fw-bold mb-0" style={{ color: "#f8fafc" }}>Rekomendasi Lowongan</h5>
            <Link to="/alumni/lowongan" className="text-decoration-none fw-medium" style={{ color: "#3b82f6", fontSize: "14px" }}>
              Lihat Semua <FaArrowRight className="ms-1" />
            </Link>
          </div>
          
          <div className="row g-3">
            {lowonganTerbaru.map((item) => (
              <div className="col-md-6" key={item.id}>
                <div className="card h-100 border-0" style={{ backgroundColor: "#1e293b", borderRadius: "16px" }}>
                  <div className="card-body p-4">
                    <span className="badge px-3 py-2 rounded-pill mb-3" style={{ backgroundColor: "rgba(59, 130, 246, 0.1)", color: "#3b82f6" }}>
                      {item.jenis}
                    </span>
                    <h5 className="fw-bold mb-2" style={{ color: "#f8fafc" }}>{item.posisi}</h5>
                    
                    <div className="d-flex flex-column gap-2 mb-4" style={{ color: "#94a3b8", fontSize: "14px" }}>
                      <span className="d-flex align-items-center"><FaBuilding className="me-2 text-secondary" /> {item.perusahaan}</span>
                      <span className="d-flex align-items-center"><FaMapMarkerAlt className="me-2 text-secondary" /> {item.lokasi}</span>
                    </div>

                    <Link to="/alumni/lowongan" className="btn w-100 rounded-pill py-2 fw-medium" style={{ backgroundColor: "#0f172a", color: "#cbd5e1", border: "1px solid #334155" }}>
                      Lihat Detail
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-xl-4">
          <div className="card border-0 mb-4" style={{ backgroundColor: "#1e293b", borderRadius: "20px" }}>
            <div className="card-body p-4">
              <h6 className="fw-bold text-uppercase mb-4" style={{ color: "#64748b", fontSize: "12px", letterSpacing: "1px" }}>Status Profil</h6>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span style={{ color: "#e2e8f0", fontWeight: "500" }}>Kelengkapan Data</span>
                <span className="fw-bold" style={{ color: "#3b82f6" }}>{userData.profilLengkap}%</span>
              </div>
              <div className="progress mb-4" style={{ height: "8px", backgroundColor: "#0f172a", borderRadius: "10px" }}>
                <div className="progress-bar" role="progressbar" style={{ width: `${userData.profilLengkap}%`, backgroundColor: "#3b82f6", borderRadius: "10px" }}></div>
              </div>
              <Link to="/alumni/profil" className="btn w-100 rounded-pill py-2 fw-medium" style={{ backgroundColor: "rgba(255,255,255,0.05)", color: "#f8fafc" }}>
                Perbarui Profil Saya
              </Link>
            </div>
          </div>

          <div className="card border-0" style={{ backgroundColor: "#1e293b", borderRadius: "20px" }}>
            <div className="card-body p-4">
              <h6 className="fw-bold text-uppercase mb-4" style={{ color: "#64748b", fontSize: "12px", letterSpacing: "1px" }}>Informasi Kampus</h6>
              
              <div className="d-flex align-items-start mb-4 border-bottom border-secondary border-opacity-25 pb-3">
                <div className="rounded-circle d-flex justify-content-center align-items-center mt-1 me-3 flex-shrink-0" style={{ width: "40px", height: "40px", backgroundColor: "rgba(245, 158, 11, 0.1)", color: "#f59e0b" }}>
                  <FaNewspaper />
                </div>
                <div>
                  <h6 className="fw-bold mb-1" style={{ color: "#f8fafc", fontSize: "15px" }}>Job Fair Terpadu 2026</h6>
                  <p className="mb-1" style={{ color: "#94a3b8", fontSize: "13px", lineHeight: "1.5" }}>Hadirilah Job Fair tahunan yang diadakan oleh pusat karir.</p>
                </div>
              </div>

              <div className="d-flex align-items-start mb-2">
                <div className="rounded-circle d-flex justify-content-center align-items-center mt-1 me-3 flex-shrink-0" style={{ width: "40px", height: "40px", backgroundColor: "rgba(16, 185, 129, 0.1)", color: "#10b981" }}>
                  <FaNewspaper />
                </div>
                <div>
                  <h6 className="fw-bold mb-1" style={{ color: "#f8fafc", fontSize: "15px" }}>Pelatihan E-Commerce</h6>
                  <p className="mb-1" style={{ color: "#94a3b8", fontSize: "13px", lineHeight: "1.5" }}>Pendaftaran pelatihan pembuatan bisnis digital telah dibuka.</p>
                </div>
              </div>
              
              <Link to="/alumni/informasi" className="btn btn-link text-decoration-none w-100 text-center mt-3 p-0" style={{ color: "#3b82f6", fontSize: "14px" }}>
                Lihat Semua Informasi
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardAlumni;