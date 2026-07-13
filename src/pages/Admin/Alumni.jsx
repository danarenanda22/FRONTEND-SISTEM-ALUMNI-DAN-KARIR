import { useState } from "react";
import { 
  FaSearch, 
  FaPlus, 
  FaEdit, 
  FaTrashAlt, 
  FaFilter,
  FaUserGraduate
} from "react-icons/fa";

function DataAlumni() {
  // Simulasi data alumni berdasarkan screenshot dengan tambahan data
  const [alumniData] = useState([
    {
      id: 1,
      nama: "Budi Santoso",
      nim: "2020001",
      prodi: "Informatika",
      tahun: "2024",
      status: "Aktif",
      email: "budi.santoso@alkar.com"
    },
    {
      id: 2,
      nama: "Siti Aisyah",
      nim: "2020002",
      prodi: "Sistem Informasi",
      tahun: "2024",
      status: "Aktif",
      email: "siti.aisyah@alkar.com"
    },
    {
      id: 3,
      nama: "Ahmad Fauzi",
      nim: "2019045",
      prodi: "Informatika",
      tahun: "2023",
      status: "Tidak Aktif",
      email: "ahmad.fauzi@alkar.com"
    }
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="container-fluid py-4" style={{ backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      
      {/* HEADER SECTION */}
      <div className="mb-4">
        <h2 className="fw-bold mb-1" style={{ color: "#1e293b" }}>Data Alumni</h2>
        <p className="text-muted mb-0">Kelola dan pantau data seluruh alumni kampus Anda.</p>
      </div>

      {/* MAIN CARD */}
      <div className="card border-0 shadow-sm" style={{ borderRadius: "16px", overflow: "hidden" }}>
        
        {/* TOOLBAR: Search & Action Buttons */}
        <div className="card-header bg-white border-bottom p-4 d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
          
          {/* Kolom Search */}
          <div className="input-group" style={{ maxWidth: "350px" }}>
            <span className="input-group-text bg-light border-end-0 text-muted px-3">
              <FaSearch />
            </span>
            <input 
              type="text" 
              className="form-control bg-light border-start-0 ps-0" 
              placeholder="Cari nama atau NIM alumni..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ boxShadow: "none" }}
            />
          </div>

          {/* Tombol Aksi */}
          <div className="d-flex gap-2">
            <button className="btn btn-light border text-muted fw-medium d-flex align-items-center rounded-pill px-3 shadow-sm">
              <FaFilter className="me-2" /> Filter
            </button>
            <button className="btn btn-primary fw-medium d-flex align-items-center rounded-pill px-4 shadow-sm">
              <FaPlus className="me-2" /> Tambah Alumni
            </button>
          </div>
        </div>

        {/* TABLE SECTION */}
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="bg-light text-muted" style={{ fontSize: "13px", letterSpacing: "0.5px", textTransform: "uppercase" }}>
                <tr>
                  <th className="px-4 py-3 fw-semibold border-0">Profil Alumni</th>
                  <th className="py-3 fw-semibold border-0">NIM</th>
                  <th className="py-3 fw-semibold border-0">Program Studi</th>
                  <th className="py-3 fw-semibold border-0 text-center">Tahun</th>
                  <th className="py-3 fw-semibold border-0 text-center">Status</th>
                  <th className="px-4 py-3 fw-semibold border-0 text-end">Aksi</th>
                </tr>
              </thead>
              <tbody className="border-top-0">
                {alumniData.map((alumni) => (
                  <tr key={alumni.id}>
                    {/* Kolom Profil (Nama & Email) */}
                    <td className="px-4 py-3">
                      <div className="d-flex align-items-center">
                        <div 
                          className="rounded-circle text-white d-flex justify-content-center align-items-center fw-bold me-3"
                          style={{ width: "40px", height: "40px", backgroundColor: "#3b82f6" }}
                        >
                          {alumni.nama.charAt(0)}
                        </div>
                        <div>
                          <h6 className="mb-0 fw-bold" style={{ color: "#1e293b", fontSize: "15px" }}>{alumni.nama}</h6>
                          <span className="text-muted" style={{ fontSize: "13px" }}>{alumni.email}</span>
                        </div>
                      </div>
                    </td>
                    
                    {/* Kolom NIM */}
                    <td className="py-3 text-muted fw-medium">
                      {alumni.nim}
                    </td>
                    
                    {/* Kolom Prodi */}
                    <td className="py-3">
                      <div className="d-flex align-items-center text-secondary">
                        <FaUserGraduate className="me-2 text-muted opacity-75" />
                        {alumni.prodi}
                      </div>
                    </td>
                    
                    {/* Kolom Tahun */}
                    <td className="py-3 text-center text-muted fw-medium">
                      {alumni.tahun}
                    </td>
                    
                    {/* Kolom Status (Badge) */}
                    <td className="py-3 text-center">
                      {alumni.status === "Aktif" ? (
                        <span className="badge bg-success bg-opacity-10 text-success px-3 py-2 rounded-pill fw-semibold">
                          Aktif
                        </span>
                      ) : (
                        <span className="badge bg-secondary bg-opacity-10 text-secondary px-3 py-2 rounded-pill fw-semibold">
                          Tidak Aktif
                        </span>
                      )}
                    </td>
                    
                    {/* Kolom Aksi (Tombol Icon) */}
                    <td className="px-4 py-3 text-end">
                      <button 
                        className="btn btn-sm btn-light text-primary me-2 rounded-circle" 
                        title="Edit Data"
                        style={{ width: "35px", height: "35px" }}
                      >
                        <FaEdit />
                      </button>
                      <button 
                        className="btn btn-sm btn-light text-danger rounded-circle" 
                        title="Hapus Data"
                        style={{ width: "35px", height: "35px" }}
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FOOTER: Pagination */}
        <div className="card-footer bg-white border-top p-4 d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <span className="text-muted fw-medium" style={{ fontSize: "14px" }}>
            Menampilkan 1 hingga 3 dari 1,250 entri
          </span>
          <nav>
            <ul className="pagination pagination-sm mb-0">
              <li className="page-item disabled">
                <a className="page-link px-3 rounded-start-pill" href="#" tabIndex="-1">Sebelumnya</a>
              </li>
              <li className="page-item active"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item">
                <a className="page-link px-3 rounded-end-pill" href="#">Selanjutnya</a>
              </li>
            </ul>
          </nav>
        </div>

      </div>
    </div>
  );
}

export default DataAlumni;