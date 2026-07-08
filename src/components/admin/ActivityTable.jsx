function ActivityTable() {
  return (
    <div className="card shadow-sm border-0 mt-4">

      <div className="card-body">

        <h5 className="mb-3">
          Aktivitas Terbaru
        </h5>

        <table className="table">

          <thead>

            <tr>

              <th>No</th>

              <th>Aktivitas</th>

              <th>Waktu</th>

            </tr>

          </thead>

          <tbody>

            <tr>

              <td>1</td>

              <td>Tambah Alumni</td>

              <td>Hari ini</td>

            </tr>

            <tr>

              <td>2</td>

              <td>Update Lowongan</td>

              <td>Kemarin</td>

            </tr>

            <tr>

              <td>3</td>

              <td>Tracer Study Baru</td>

              <td>2 Hari lalu</td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default ActivityTable;