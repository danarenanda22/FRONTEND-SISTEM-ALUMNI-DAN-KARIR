import { useState, useRef, useEffect } from "react";
import API from "../../api/axios"; 
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaEdit,
  FaSave,
  FaTimes,
  FaCamera,
  FaSpinner,
  FaIdCard
} from "react-icons/fa";

function ProfilAlumni() {
  const [isEditing, setIsEditing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef(null);

  const [profileData, setProfileData] = useState(() => {
    const storedUser = JSON.parse(localStorage.getItem("user")) || {};
    
    // Mengambil nama dari data alumni jika ada, atau dari user, atau default
    const defaultNama = storedUser.alumni?.nama || storedUser.nama || "Alumni Mahasiswa"; 
    
    return {
      nama: defaultNama,
      nim: storedUser.alumni?.nim || "2020001",
      email: storedUser.alumni?.email || storedUser.email || "alumni@alkar.com",
      nohp: storedUser.alumni?.no_hp || "08123456789", 
      prodi: storedUser.alumni?.prodi || "Informatika",
      tahunLulus: storedUser.alumni?.tahun_lulus || "2023",
      alamat: storedUser.alumni?.alamat || "OKU Timur",
      foto: `https://ui-avatars.com/api/?name=${encodeURIComponent(defaultNama)}&background=0D8ABC&color=fff&size=200`
    };
  });

  const [formData, setFormData] = useState(profileData);

  useEffect(() => {
    setFormData(profileData);
  }, [profileData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditClick = () => {
    setFormData(profileData); 
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setFormData(profileData); 
    setIsEditing(false);
  };

  const handleSaveProfile = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const storedUser = JSON.parse(localStorage.getItem("user")) || {};
      const token = localStorage.getItem("token");
      
      // PERBAIKAN: Prioritaskan id_alumni dari relasi objek 'alumni' bawaan login Laravel
      const userId = storedUser.alumni?.id_alumni || storedUser.id_alumni || storedUser.id_user;

      const payload = {
        nama: formData.nama,
        email: formData.email,
        no_hp: formData.nohp, // Pastikan namanya sama dengan yang diminta Laravel
        alamat: formData.alamat
      };

      await API.put(`/alumni/${userId}`, payload, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      // Update data di localStorage agar sinkron dengan dashboard
      storedUser.nama = formData.nama;
      storedUser.email = formData.email;
      
      // Update juga di dalam objek alumni-nya
      if (!storedUser.alumni) storedUser.alumni = {};
      storedUser.alumni.nama = formData.nama;
      storedUser.alumni.email = formData.email;
      storedUser.alumni.no_hp = formData.nohp;
      storedUser.alumni.alamat = formData.alamat;
      
      localStorage.setItem("user", JSON.stringify(storedUser));

      const newAvatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(formData.nama)}&background=0D8ABC&color=fff&size=200`;
      const newProfileData = { ...formData, foto: newAvatarUrl };
      
      setProfileData(newProfileData);
      setIsEditing(false);      
      alert("Profil berhasil diperbarui di Database!");

    } catch (error) {
      console.error("Detail Error API:", error.response ? error.response.data : error.message);
      const errorMsg = error.response?.data?.message || "Terjadi kesalahan saat menyimpan ke database.";
      alert(errorMsg + " (Cek Console untuk detail)");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileData({ ...profileData, foto: imageUrl });
      setFormData({ ...formData, foto: imageUrl });
    }
  };

  return (
    <div className="container-fluid py-4">
      <h2 className="fw-bold mb-1">Profil Alumni</h2>
      <p className="text-muted mb-4">Kelola informasi data diri Anda di sini.</p>

      <div className="row g-4">
        <div className="col-xl-4 col-lg-5">
          <div className="card shadow-sm border-0 text-center h-100" style={{ borderRadius: "16px" }}>
            <div className="card-body p-4 d-flex flex-column align-items-center justify-content-center">
              <div className="position-relative mb-4">
                <img
                  src={profileData.foto}
                  alt="Foto Profil"
                  className="rounded-circle object-fit-cover shadow-sm border border-4 border-white"
                  style={{ width: "150px", height: "150px" }}
                />
              </div>
              <h4 className="fw-bold mb-1" style={{ color: "#1e293b" }}>{profileData.nama}</h4>
              <p className="text-muted mb-1">{profileData.prodi}</p>
              <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill mb-4">
                Alumni {profileData.tahunLulus}
              </span>
              <hr className="w-100 text-muted mb-4" />
              <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} className="d-none" />
              <button className="btn btn-outline-primary w-100 rounded-pill py-2 fw-medium d-flex justify-content-center align-items-center" onClick={handleUploadClick}>
                <FaCamera className="me-2" /> Unggah Foto Baru
              </button>
            </div>
          </div>
        </div>

        <div className="col-xl-8 col-lg-7">
          <div className="card shadow-sm border-0" style={{ borderRadius: "16px" }}>
            <div className="card-header bg-white border-0 p-4 pb-0 d-flex justify-content-between align-items-center">
              <h5 className="fw-bold mb-0 text-primary">Biodata Lengkap</h5>
              {!isEditing ? (
                <button className="btn btn-primary rounded-pill px-4 py-2 fw-medium shadow-sm d-flex align-items-center" onClick={handleEditClick}>
                  <FaEdit className="me-2" /> Edit Profil
                </button>
              ) : (
                <button className="btn btn-light text-danger border-0 rounded-pill px-4 py-2 fw-medium d-flex align-items-center" onClick={handleCancelClick} disabled={isSubmitting}>
                  <FaTimes className="me-2" /> Batal
                </button>
              )}
            </div>
            
            <div className="card-body p-4">
              <form onSubmit={handleSaveProfile}>
                <div className="row g-4">
                  <div className="col-md-6">
                    <label className="form-label text-muted small fw-medium">Nama Lengkap</label>
                    <div className="input-group">
                      <span className="input-group-text bg-light border-end-0 text-muted"><FaUser /></span>
                      <input type="text" name="nama" className={`form-control border-start-0 ${!isEditing ? 'bg-light text-muted' : 'bg-white'}`} value={formData.nama} onChange={handleChange} disabled={!isEditing} required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-muted small fw-medium">NIM (Tidak dapat diubah)</label>
                    <div className="input-group">
                      <span className="input-group-text bg-light border-end-0 text-muted"><FaIdCard /></span>
                      <input type="text" className="form-control bg-light text-muted border-start-0" value={formData.nim} disabled />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-muted small fw-medium">Alamat Email</label>
                    <div className="input-group">
                      <span className="input-group-text bg-light border-end-0 text-muted"><FaEnvelope /></span>
                      <input type="email" name="email" className={`form-control border-start-0 ${!isEditing ? 'bg-light text-muted' : 'bg-white'}`} value={formData.email} onChange={handleChange} disabled={!isEditing} required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-muted small fw-medium">Nomor WhatsApp / HP</label>
                    <div className="input-group">
                      <span className="input-group-text bg-light border-end-0 text-muted"><FaPhone /></span>
                      <input type="text" name="nohp" className={`form-control border-start-0 ${!isEditing ? 'bg-light text-muted' : 'bg-white'}`} value={formData.nohp} onChange={handleChange} disabled={!isEditing} required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-muted small fw-medium">Program Studi</label>
                    <div className="input-group">
                      <span className="input-group-text bg-light border-end-0 text-muted"><FaGraduationCap /></span>
                      <input type="text" className="form-control bg-light text-muted border-start-0" value={formData.prodi} disabled />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-muted small fw-medium">Tahun Lulus</label>
                    <div className="input-group">
                      <span className="input-group-text bg-light border-end-0 text-muted"><FaGraduationCap /></span>
                      <input type="text" className="form-control bg-light text-muted border-start-0" value={formData.tahunLulus} disabled />
                    </div>
                  </div>
                  <div className="col-12">
                    <label className="form-label text-muted small fw-medium">Alamat Domisili Lengkap</label>
                    <div className="input-group">
                      <span className="input-group-text bg-light border-end-0 text-muted align-items-start pt-2"><FaMapMarkerAlt /></span>
                      <textarea name="alamat" className={`form-control border-start-0 ${!isEditing ? 'bg-light text-muted' : 'bg-white'}`} rows="3" value={formData.alamat} onChange={handleChange} disabled={!isEditing} required></textarea>
                    </div>
                  </div>
                </div>
                {isEditing && (
                  <div className="d-flex justify-content-end mt-4 pt-3 border-top">
                    <button type="submit" className="btn btn-success px-5 py-2 fw-medium rounded-pill shadow-sm d-flex align-items-center" disabled={isSubmitting}>
                      {isSubmitting ? <><FaSpinner className="fa-spin me-2" /> Menyimpan...</> : <><FaSave className="me-2" /> Simpan Perubahan</>}
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilAlumni;