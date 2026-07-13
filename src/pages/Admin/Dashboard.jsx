import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaUserGraduate,
  FaClipboardList,
  FaBriefcase,
  FaUsers,
  FaChartBar,
  FaHistory,
  FaClock,
  FaArrowRight
} from "react-icons/fa";

function DashboardAdmin() {
  // Simulasi state data untuk dashboard
  const [stats, setStats] = useState({
    totalAlumni: "1,250",
    tracerStudy: "860",
    lowongan: "45",
    userAktif: "320"
  });

  // Simulasi data aktivitas terbaru
  const activities = [
    { id: 1, text: "Alumni Budi Santoso baru mendaftar", time: "10 menit yang lalu", type: "primary" },
    { id: 2, text: "Lowongan 'Frontend Developer' ditambahkan", time: "1 jam yang lalu", type: "success" },
    { id: 3, text: "Tracer Study diperbarui oleh 5 alumni", time: "3 jam yang lalu", type: "info" },
    { id: 4, text: "Informasi 'Job Fair 2026' dipublikasikan", time: "1 hari yang lalu", type: "warning" },
  ];

  // Simulasi data grafik batang (CSS based)
  const chartData = [
    { year: 2021, value: 40, color: "#3b82f6" },
    { year: 2022, value: 65, color: "#10b981" },
    { year: 2023, value: 90, color: "#f59e0b" },
    { year: 2024, value: 75, color: "#ef4444" },
  ];

  return (
    <div className="container-fluid py-4" style={{ backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      
      {/* HEADER SECTION */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4">
        <div>
          <h2 className="fw-bold mb-1" style={{ color: "#1e293b" }}>Dashboard Admin</h2>
          <p className="text-muted mb-0">Selamat datang di panel kontrol Sistem Informasi Alumni & Karir.</p>
        </div>
        <div className="mt-3 mt-md-0 px-4 py-2 bg-white rounded-pill shadow-sm border">
          <FaClock className="me-2 text-primary" />
          <span className="text-muted fw-medium" style={{ fontSize: "14px" }}>
            {new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </span>
        </div>
      </div>

      {/* STATISTIC CARDS */}
      <div className="row g-4 mb-4">
        {/* Card Total Alumni */}
        <div className="col-xl-3 col-sm-6">
          <div className="card border-0 shadow-sm h-100" style={{ borderRadius: "16px" }}>
            <div className="card-body p-4 d-flex align-items-center justify-content-between">
              <div>
                <p className="text-muted mb-1 fw-medium" style={{ fontSize: "14px" }}>Total Alumni</p>
                <h3 className="fw-bold mb-0" style={{ color: "#1e293b" }}>{stats.totalAlumni}</h3>
              </div>
              <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: "55px", height: "55px", backgroundColor: "rgba(59, 130, 246, 0.1)", color: "#3b82f6", fontSize: "24px" }}>
                <FaUserGraduate />
              </div>
            </div>
          </div>
        </div>

        {/* Card Tracer Study */}
        <div className="col-xl-3 col-sm-6">
          <div className="card border-0 shadow-sm h-100" style={{ borderRadius: "16px" }}>
            <div className="card-body p-4 d-flex align-items-center justify-content-between">
              <div>
                <p className="text-muted mb-1 fw-medium" style={{ fontSize: "14px" }}>Tracer Study</p>
                <h3 className="fw-bold mb-0" style={{ color: "#1e293b" }}>{stats.tracerStudy}</h3>
              </div>
              <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: "55px", height: "55px", backgroundColor: "rgba(16, 185, 129, 0.1)", color: "#10b981", fontSize: "24px" }}>
                <FaClipboardList />
              </div>
            </div>
          </div>
        </div>

        {/* Card Lowongan */}
        <div className="col-xl-3 col-sm-6">
          <div className="card border-0 shadow-sm h-100" style={{ borderRadius: "16px" }}>
            <div className="card-body p-4 d-flex align-items-center justify-content-between">
              <div>
                <p className="text-muted mb-1 fw-medium" style={{ fontSize: "14px" }}>Lowongan Aktif</p>
                <h3 className="fw-bold mb-0" style={{ color: "#1e293b" }}>{stats.lowongan}</h3>
              </div>
              <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: "55px", height: "55px", backgroundColor: "rgba(245, 158, 11, 0.1)", color: "#f59e0b", fontSize: "24px" }}>
                <FaBriefcase />
              </div>
            </div>
          </div>
        </div>

        {/* Card User Aktif */}
        <div className="col-xl-3 col-sm-6">
          <div className="card border-0 shadow-sm h-100" style={{ borderRadius: "16px" }}>
            <div className="card-body p-4 d-flex align-items-center justify-content-between">
              <div>
                <p className="text-muted mb-1 fw-medium" style={{ fontSize: "14px" }}>User Aktif</p>
                <h3 className="fw-bold mb-0" style={{ color: "#1e293b" }}>{stats.userAktif}</h3>
              </div>
              <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: "55px", height: "55px", backgroundColor: "rgba(239, 68, 68, 0.1)", color: "#ef4444", fontSize: "24px" }}>
                <FaUsers />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CHART & ACTIVITY SECTION */}
      <div className="row g-4">
        
        {/* Kolom Grafik */}
        <div className="col-xl-8">
          <div className="card border-0 shadow-sm h-100" style={{ borderRadius: "16px" }}>
            <div className="card-header bg-white border-0 p-4 pb-0 d-flex justify-content-between align-items-center">
              <h5 className="fw-bold mb-0" style={{ color: "#1e293b" }}>
                <FaChartBar className="me-2 text-primary" /> Statistik Lulusan
              </h5>
              <button className="btn btn-sm btn-outline-secondary rounded-pill px-3">Filter Tahun</button>
            </div>
            
            <div className="card-body p-4 d-flex align-items-end justify-content-around mt-4" style={{ height: "300px" }}>
              {/* Grafik Batang CSS Sederhana (Lebih Modern) */}
              {chartData.map((data, index) => (
                <div key={index} className="d-flex flex-column align-items-center" style={{ width: "15%" }}>
                  <div className="w-100 position-relative d-flex align-items-end justify-content-center" style={{ height: "200px", backgroundColor: "#f1f5f9", borderRadius: "8px 8px 0 0", overflow: "hidden" }}>
                    <div 
                      style={{ 
                        width: "100%", 
                        height: `${data.value}%`, 
                        backgroundColor: data.color,
                        transition: "height 1s ease-in-out",
                        borderRadius: "8px 8px 0 0"
                      }}
                    ></div>
                    {/* Tooltip Angka di atas batang */}
                    <span className="position-absolute fw-bold" style={{ bottom: `${data.value + 5}%`, color: "#475569", fontSize: "14px" }}>
                      {data.value}0
                    </span>
                  </div>
                  <span className="mt-3 fw-medium text-muted">{data.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Kolom Aktivitas Terbaru */}
        <div className="col-xl-4">
          <div className="card border-0 shadow-sm h-100" style={{ borderRadius: "16px" }}>
            <div className="card-header bg-white border-0 p-4 pb-0">
              <h5 className="fw-bold mb-0" style={{ color: "#1e293b" }}>
                <FaHistory className="me-2 text-primary" /> Aktivitas Terbaru
              </h5>
            </div>
            <div className="card-body p-4">
              <div className="timeline">
                {activities.map((item) => (
                  <div key={item.id} className="d-flex mb-4 position-relative">
                    <div className={`mt-1 me-3 rounded-circle bg-${item.type} bg-opacity-10 text-${item.type} d-flex justify-content-center align-items-center flex-shrink-0`} style={{ width: "12px", height: "12px", zIndex: 1, border: `2px solid var(--bs-${item.type})` }}></div>
                    <div>
                      <p className="mb-1 fw-medium text-dark" style={{ fontSize: "15px" }}>{item.text}</p>
                      <span className="text-muted" style={{ fontSize: "13px" }}>{item.time}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 pt-3 border-top text-center">
                <Link to="/admin/log" className="text-decoration-none fw-medium d-flex align-items-center justify-content-center text-primary">
                  Lihat Semua Log Aktivitas <FaArrowRight className="ms-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default DashboardAdmin;