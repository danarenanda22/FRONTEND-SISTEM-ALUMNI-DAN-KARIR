import "./LaporanTable.css";

function LaporanTable() {
  return (
    <div className="card shadow-sm">

      <div className="card-header d-flex justify-content-between align-items-center">

        <h5 className="mb-0">
          Data Laporan
        </h5>

        <div>

          <button className="btn btn-success me-2">
            Export Excel
          </button>

          <button className="btn btn-danger">
            Export PDF
          </button>

        </div>

      </div>

      <div className="card-body">

        <table className="table table-hover">

          <thead className="table-dark">

            <tr>
              <th>No</th>
              <th>Jenis Laporan</th>
              <th>Total Data</th>
              <th>Status</th>
            </tr>

          </thead>

          <tbody>

            <tr>
              <td>1</td>
              <td>Data Alumni</td>
              <td>1.245</td>
              <td>
                <span className="badge bg-success">
                  Tersedia
                </span>
              </td>
            </tr>

            <tr>
              <td>2</td>
              <td>Tracer Study</td>
              <td>860</td>
              <td>
                <span className="badge bg-success">
                  Tersedia
                </span>
              </td>
            </tr>

            <tr>
              <td>3</td>
              <td>Lowongan</td>
              <td>52</td>
              <td>
                <span className="badge bg-success">
                  Tersedia
                </span>
              </td>
            </tr>

            <tr>
              <td>4</td>
              <td>Informasi</td>
              <td>18</td>
              <td>
                <span className="badge bg-success">
                  Tersedia
                </span>
              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default LaporanTable;