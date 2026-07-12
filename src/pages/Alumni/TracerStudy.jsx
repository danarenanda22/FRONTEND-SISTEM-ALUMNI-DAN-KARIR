import { useState } from "react";
import API from "../../api/axios"; 
import {
  FaBriefcase,
  FaUserGraduate,
  FaIdCard,
  FaBuilding,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaSave,
  FaCheckCircle,
  FaExclamationTriangle,
  FaSpinner,
  FaGraduationCap
} from "react-icons/fa";

function TracerStudy() {
  // State ini akan selalu kembali menjadi 'false' setiap kali web di-refresh
  const [isFilled, setIsFilled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    nama: "Budi Santoso", 
    nim: "2020001",
    prodi: "Informatika",
    tahunLulus: "2023",
    statusPekerjaan: "",
    namaPerusahaan: "",
    posisiPekerjaan: "",
    lokasiKerja: "",
    gajiPertama: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isFilled) return;
    setIsSubmitting(true);

    try {
      const token = localStorage.getItem("token");
      const user = JSON.parse(localStorage.getItem("user"));
      const userId = user?.id_user || user?.id_alumni || 1;

      let statusEnum = "";
      if (formData.statusPekerjaan === "Bekerja") statusEnum = "bekerja";
      else if (formData.statusPekerjaan === "Wirausaha") statusEnum = "wirausaha";
      else if (formData.statusPekerjaan === "Melanjutkan Studi") statusEnum = "melanjutkan_studi";
      else if (formData.statusPekerjaan === "Belum Bekerja") statusEnum = "belum_bekerja";

      const today = new Date().toISOString().split('T')[0];

      const payload = {
        id_alumni: userId, 
        status_pekerjaan: statusEnum,
        nama_perusahaan: formData.namaPerusahaan || "Tidak Ada",
        pekerjaan: formData.posisiPekerjaan || "Tidak Ada",
        gaji: formData.gajiPertama || "-",
        lokasi_kerja: formData.lokasiKerja || "-",
        tanggal_isi: today
      };

      await API.post("/tracer-studi", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      
      alert("Terima kasih! Data Tracer Study Anda berhasil disimpan ke database.");
      
      // Mengubah tampilan menjadi "Sudah Mengisi" HANYA SELAMA HALAMAN INI DIBUKA
      setIsFilled(true); 

    } catch (error) {
      console.error("Detail Error API:", error.response ? error.response.data : error.message);
      const errorMsg = error.response?.data?.message || "Gagal menyimpan data ke database.";
      alert(errorMsg + " (Cek Console untuk detailnya)");
    } finally {
      setIsSubmitting(false);
    }
  };

  const showJobFields = 
    formData.statusPekerjaan === "Bekerja" || 
    formData.statusPekerjaan === "Wirausaha";

  return (
    <div className="container-fluid py-4">
      <h2 className="fw-bold mb-1">Tracer Study</h2>
      <p className="text-muted mb-4">
        Silakan isi form tracer study berikut untuk pembaruan data karir Anda.
      </p>

      {/* PANEL STATUS TRACER STUDY */}
      <div 
        className={`card border-0 shadow-sm mb-4 ${isFilled ? 'bg-success bg-opacity-10' : 'bg-warning bg-opacity-10'}`}
        style={{ borderRadius: "16px" }}
      >
        <div className="card-body p-4 d-flex align-items-center justify-content-between">
          <div>
            <h5 className="fw-bold mb-2 text-dark">Status Tracer Study</h5>
            {isFilled ? (
              <span className="badge bg-success px-3 py-2 rounded-pill fs-6">
                <FaCheckCircle className="me-2 mb-1" /> Sudah Mengisi
              </span>
            ) : (
              <span className="badge bg-danger px-3 py-2 rounded-pill fs-6 shadow-sm">
                <FaExclamationTriangle className="me-2 mb-1" /> Belum Mengisi
              </span>
            )}
          </div>
          <div 
            className={`d-none d-md-flex justify-content-center align-items-center rounded-circle ${isFilled ? 'bg-success text-white' : 'bg-danger text-white'}`}
            style={{ width: "60px", height: "60px", fontSize: "28px" }}
          >
            <FaBriefcase />
          </div>
        </div>
      </div>

      {/* FORM TRACER STUDY */}
      <div className="card shadow-sm border-0" style={{ borderRadius: "16px" }}>
        <div className="card-body p-4 p-md-5">
          <h4 className="fw-bold mb-4" style={{ color: "#1e293b" }}>Form Tracer Study</h4>
          
          {isFilled && (
            <div className="alert alert-success mb-4 border-0 shadow-sm" style={{ borderRadius: "10px" }}>
              <FaCheckCircle className="me-2" />
              <strong>Terima kasih!</strong> Anda telah mengisi form Tracer Study. Data sudah direkam ke dalam database.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <fieldset disabled={isFilled}>
              
              {/* Bagian 1: Data Diri */}
              <h6 className="fw-bold text-primary mb-3 border-bottom pb-2">
                <FaUserGraduate className="me-2" /> Data Alumni
              </h6>
              <div className="row g-3 mb-5">
                <div className="col-md-6">
                  <label className="form-label text-muted small fw-medium">
                    Nama Lengkap <span className="text-danger">*</span>
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0 text-muted"><FaIdCard /></span>
                    <input 
                      type="text" 
                      className="form-control border-start-0" 
                      name="nama"
                      placeholder="Masukkan nama lengkap"
                      value={formData.nama} 
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="form-label text-muted small fw-medium">
                    NIM <span className="text-danger">*</span>
                  </label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="nim"
                    placeholder="Contoh: 2021001"
                    value={formData.nim} 
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label text-muted small fw-medium">
                    Program Studi <span className="text-danger">*</span>
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0 text-muted"><FaGraduationCap /></span>
                    <input 
                      type="text" 
                      className="form-control border-start-0" 
                      name="prodi"
                      placeholder="Contoh: Informatika"
                      value={formData.prodi} 
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="form-label text-muted small fw-medium">
                    Tahun Lulus <span className="text-danger">*</span>
                  </label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="tahunLulus"
                    placeholder="Contoh: 2024"
                    value={formData.tahunLulus} 
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>

              {/* Bagian 2: Kuesioner Karir */}
              <h6 className="fw-bold text-primary mb-3 border-bottom pb-2">
                <FaBriefcase className="me-2" /> Kuesioner Pekerjaan Saat Ini
              </h6>
              <div className="row g-4 mb-4">
                <div className="col-12">
                  <label className="form-label fw-medium text-dark">
                    Status Saat Ini <span className="text-danger">*</span>
                  </label>
                  <select 
                    className="form-select form-select-lg fs-6" 
                    name="statusPekerjaan"
                    value={formData.statusPekerjaan}
                    onChange={handleChange}
                    required
                  >
                    <option value="">-- Pilih Status Pekerjaan --</option>
                    <option value="Bekerja">Bekerja (Karyawan/Pegawai)</option>
                    <option value="Wirausaha">Wirausaha / Pemilik Bisnis</option>
                    <option value="Melanjutkan Studi">Melanjutkan Studi (S2/Profesi)</option>
                    <option value="Belum Bekerja">Belum Bekerja / Sedang Mencari Kerja</option>
                  </select>
                </div>

                {showJobFields && (
                  <>
                    <div className="col-md-6">
                      <label className="form-label fw-medium text-dark">
                        {formData.statusPekerjaan === "Wirausaha" ? "Nama Usaha / Bisnis" : "Nama Perusahaan"} <span className="text-danger">*</span>
                      </label>
                      <div className="input-group">
                        <span className="input-group-text bg-white text-muted"><FaBuilding /></span>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="namaPerusahaan"
                          placeholder="Contoh: PT Telkom Indonesia"
                          value={formData.namaPerusahaan}
                          onChange={handleChange}
                          required={showJobFields}
                        />
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <label className="form-label fw-medium text-dark">
                        {formData.statusPekerjaan === "Wirausaha" ? "Bidang Usaha" : "Posisi Pekerjaan"} <span className="text-danger">*</span>
                      </label>
                      <input 
                        type="text" 
                        className="form-control" 
                        name="posisiPekerjaan"
                        placeholder="Contoh: Frontend Developer"
                        value={formData.posisiPekerjaan}
                        onChange={handleChange}
                        required={showJobFields}
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-medium text-dark">
                        Lokasi Kerja / Usaha
                      </label>
                      <div className="input-group">
                        <span className="input-group-text bg-white text-muted"><FaMapMarkerAlt /></span>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="lokasiKerja"
                          placeholder="Contoh: Jakarta Selatan"
                          value={formData.lokasiKerja}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-medium text-dark">
                        Rentang Pendapatan / Gaji Pertama <span className="text-danger">*</span>
                      </label>
                      <div className="input-group">
                        <span className="input-group-text bg-white text-muted"><FaMoneyBillWave /></span>
                        <select 
                          className="form-select" 
                          name="gajiPertama"
                          value={formData.gajiPertama}
                          onChange={handleChange}
                          required={showJobFields}
                        >
                          <option value="">-- Pilih Rentang --</option>
                          <option value="< Rp3.000.000">Kurang dari Rp 3.000.000</option>
                          <option value="Rp3.000.000 - Rp5.000.000">Rp 3.000.000 - Rp 5.000.000</option>
                          <option value="Rp5.000.000 - Rp10.000.000">Rp 5.000.000 - Rp 10.000.000</option>
                          <option value="> Rp10.000.000">Lebih dari Rp 10.000.000</option>
                        </select>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {!isFilled && (
                <div className="d-flex justify-content-end mt-4 pt-3 border-top">
                  <button 
                    type="submit" 
                    className="btn btn-primary px-5 py-2 fw-medium rounded-pill shadow-sm d-flex align-items-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <FaSpinner className="fa-spin me-2" /> Menyimpan...
                      </>
                    ) : (
                      <>
                        <FaSave className="me-2" /> Simpan Data Tracer Study
                      </>
                    )}
                  </button>
                </div>
              )}
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TracerStudy;