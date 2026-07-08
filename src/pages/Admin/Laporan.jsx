function Laporan() {

  // AMBIL DATA LOCAL STORAGE

  const alumni =
    JSON.parse(
      localStorage.getItem("alumni")
    ) || [];

  const lowongan =
    JSON.parse(
      localStorage.getItem("lowongan")
    ) || [];

  const users =
    JSON.parse(
      localStorage.getItem("users")
    ) || [];

  const informasi =
    JSON.parse(
      localStorage.getItem("informasi")
    ) || [];

  // EXPORT DUMMY

  const exportPDF = () => {
    alert("Export PDF berhasil");
  };

  const exportExcel = () => {
    alert("Export Excel berhasil");
  };

  return (
    <div className="container-fluid">

      {/* HEADER */}

      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">

        <div>

          <h2 className="fw-bold">
            Laporan Sistem
          </h2>

          <p className="text-muted">
            Statistik data SI-ALKAR
          </p>

        </div>

        <div className="d-flex gap-2">

          <button
            className="btn btn-danger"
            onClick={exportPDF}
          >
            Export PDF
          </button>

          <button
            className="btn btn-success"
            onClick={exportExcel}
          >
            Export Excel
          </button>

        </div>

      </div>

      {/* STATISTIK */}

      <div className="row g-4 mb-4">

        <div className="col-lg-3 col-md-6">

          <div className="card border-0 shadow-sm h-100">

            <div className="card-body">

              <h6 className="text-muted">
                Total Alumni
              </h6>

              <h2 className="fw-bold">
                {alumni.length}
              </h2>

            </div>

          </div>

        </div>

        <div className="col-lg-3 col-md-6">

          <div className="card border-0 shadow-sm h-100">

            <div className="card-body">

              <h6 className="text-muted">
                Total Lowongan
              </h6>

              <h2 className="fw-bold">
                {lowongan.length}
              </h2>

            </div>

          </div>

        </div>

        <div className="col-lg-3 col-md-6">

          <div className="card border-0 shadow-sm h-100">

            <div className="card-body">

              <h6 className="text-muted">
                Total User
              </h6>

              <h2 className="fw-bold">
                {users.length}
              </h2>

            </div>

          </div>

        </div>

        <div className="col-lg-3 col-md-6">

          <div className="card border-0 shadow-sm h-100">

            <div className="card-body">

              <h6 className="text-muted">
                Total Informasi
              </h6>

              <h2 className="fw-bold">
                {informasi.length}
              </h2>

            </div>

          </div>

        </div>

      </div>

      {/* TABEL RINGKAS */}

      <div className="row g-4">

        {/* ALUMNI */}

        <div className="col-lg-6">

          <div className="card border-0 shadow-sm">

            <div className="card-header bg-white">

              <h5 className="mb-0">
                Data Alumni
              </h5>

            </div>

            <div className="card-body">

              <table className="table">

                <thead>

                  <tr>
                    <th>Nama</th>
                    <th>NIM</th>
                  </tr>

                </thead>

                <tbody>

                  {alumni.slice(0, 5).map((item) => (

                    <tr key={item.id}>
                      <td>{item.nama}</td>
                      <td>{item.nim}</td>
                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>

        </div>

        {/* LOWONGAN */}

        <div className="col-lg-6">

          <div className="card border-0 shadow-sm">

            <div className="card-header bg-white">

              <h5 className="mb-0">
                Data Lowongan
              </h5>

            </div>

            <div className="card-body">

              <table className="table">

                <thead>

                  <tr>
                    <th>Perusahaan</th>
                    <th>Posisi</th>
                  </tr>

                </thead>

                <tbody>

                  {lowongan.slice(0, 5).map((item) => (

                    <tr key={item.id}>
                      <td>{item.perusahaan}</td>
                      <td>{item.posisi}</td>
                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Laporan;