import { useEffect, useState } from "react";
import {
  FaUsers,
  FaClipboardCheck,
  FaBriefcase,
  FaNewspaper,
  FaFilePdf,
  FaFileExcel,
} from "react-icons/fa";

function Laporan() {

  const [alumni, setAlumni] = useState([]);
  const [tracer, setTracer] = useState([]);
  const [lowongan, setLowongan] = useState([]);
  const [informasi, setInformasi] = useState([]);

  useEffect(() => {

    setAlumni(
      JSON.parse(localStorage.getItem("alumni")) || []
    );

    setTracer(
      JSON.parse(localStorage.getItem("tracer")) || []
    );

    setLowongan(
      JSON.parse(localStorage.getItem("lowongan")) || []
    );

    setInformasi(
      JSON.parse(localStorage.getItem("informasi")) || []
    );

  }, []);

  const exportPDF = () => {
    alert("Export PDF berhasil");
  };

  const exportExcel = () => {
    alert("Export Excel berhasil");
  };

  return (

    <div className="container-fluid py-4">

      <div className="d-flex justify-content-between align-items-center mb-4">

        <div>

          <h2 className="fw-bold">
            Laporan Sistem
          </h2>

          <p className="text-muted">
            Statistik Sistem Informasi Alumni dan Karir
          </p>

        </div>

        <div>

          <button
            className="btn btn-danger me-2"
            onClick={exportPDF}
          >

            <FaFilePdf className="me-2"/>

            Export PDF

          </button>

          <button
            className="btn btn-success"
            onClick={exportExcel}
          >

            <FaFileExcel className="me-2"/>

            Export Excel

          </button>

        </div>

      </div>
      <div className="row mb-4">

<div className="col-md-3">

<div className="card shadow-sm border-0">

<div className="card-body text-center">

<FaUsers size={35} className="text-primary"/>

<h5 className="mt-3">

Total Alumni

</h5>

<h2>

{alumni.length}

</h2>

</div>

</div>

</div>

<div className="col-md-3">

<div className="card shadow-sm border-0">

<div className="card-body text-center">

<FaClipboardCheck
size={35}
className="text-success"
/>

<h5 className="mt-3">

Tracer Study

</h5>

<h2>

{tracer.length}

</h2>

</div>

</div>

</div>

<div className="col-md-3">

<div className="card shadow-sm border-0">

<div className="card-body text-center">

<FaBriefcase
size={35}
className="text-warning"
/>

<h5 className="mt-3">

Lowongan

</h5>

<h2>

{lowongan.length}

</h2>

</div>

</div>

</div>

<div className="col-md-3">

<div className="card shadow-sm border-0">

<div className="card-body text-center">

<FaNewspaper
size={35}
className="text-danger"
/>

<h5 className="mt-3">

Informasi

</h5>

<h2>

{informasi.length}

</h2>

</div>

</div>

</div>

</div>
{/* ====================== DATA ALUMNI ====================== */}

<div className="card shadow-sm border-0 mb-4">

  <div className="card-header bg-primary text-white">

    <h5 className="mb-0">
      Data Alumni
    </h5>

  </div>

  <div className="card-body p-0">

    <table className="table table-hover mb-0">

      <thead>

        <tr>

          <th>No</th>

          <th>Nama</th>

          <th>NIM</th>

        </tr>

      </thead>

      <tbody>

        {alumni.length > 0 ? (

          alumni.map((item, index) => (

            <tr key={index}>

              <td>{index + 1}</td>

              <td>{item.nama}</td>

              <td>{item.nim}</td>

            </tr>

          ))

        ) : (

          <tr>

            <td colSpan="3" className="text-center">

              Belum ada data alumni

            </td>

          </tr>

        )}

      </tbody>

    </table>

  </div>

</div>


{/* ====================== DATA TRACER ====================== */}

<div className="card shadow-sm border-0 mb-4">

  <div className="card-header bg-success text-white">

    <h5 className="mb-0">

      Data Tracer Study

    </h5>

  </div>

  <div className="card-body p-0">

    <table className="table table-hover mb-0">

      <thead>

        <tr>

          <th>No</th>

          <th>Nama</th>

          <th>Status</th>

          <th>Perusahaan</th>

        </tr>

      </thead>

      <tbody>

        {tracer.length > 0 ? (

          tracer.map((item, index) => (

            <tr key={index}>

              <td>{index + 1}</td>

              <td>{item.nama}</td>

              <td>{item.status}</td>

              <td>{item.perusahaan}</td>

            </tr>

          ))

        ) : (

          <tr>

            <td colSpan="4" className="text-center">

              Belum ada data tracer study

            </td>

          </tr>

        )}

      </tbody>

    </table>

  </div>

</div>


{/* ====================== DATA LOWONGAN ====================== */}

<div className="card shadow-sm border-0 mb-4">

  <div className="card-header bg-warning">

    <h5 className="mb-0">

      Data Lowongan

    </h5>

  </div>

  <div className="card-body p-0">

    <table className="table table-hover mb-0">

      <thead>

        <tr>

          <th>No</th>

          <th>Perusahaan</th>

          <th>Posisi</th>

        </tr>

      </thead>

      <tbody>

        {lowongan.length > 0 ? (

          lowongan.map((item, index) => (

            <tr key={index}>

              <td>{index + 1}</td>

              <td>{item.perusahaan}</td>

              <td>{item.posisi}</td>

            </tr>

          ))

        ) : (

          <tr>

            <td colSpan="3" className="text-center">

              Belum ada data lowongan

            </td>

          </tr>

        )}

      </tbody>

    </table>

  </div>

</div>


{/* ====================== DATA INFORMASI ====================== */}

<div className="card shadow-sm border-0">

  <div className="card-header bg-info text-white">

    <h5 className="mb-0">

      Data Informasi

    </h5>

  </div>

  <div className="card-body p-0">

    <table className="table table-hover mb-0">

      <thead>

        <tr>

          <th>No</th>

          <th>Judul</th>

          <th>Kategori</th>

        </tr>

      </thead>

      <tbody>

        {informasi.length > 0 ? (

          informasi.map((item, index) => (

            <tr key={index}>

              <td>{index + 1}</td>

              <td>{item.judul}</td>

              <td>{item.kategori}</td>

            </tr>

          ))

        ) : (

          <tr>

            <td colSpan="3" className="text-center">

              Belum ada data informasi

            </td>

          </tr>

        )}

      </tbody>

    </table>

  </div>

</div>
    </div>

  );

}

export default Laporan;