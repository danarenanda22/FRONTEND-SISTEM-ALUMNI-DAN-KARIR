function RecentActivity() {
  return (
    <div className="card border-0 shadow-sm mt-4">
      <div className="card-body">

        <h5 className="fw-bold mb-4">
          Aktivitas Terbaru
        </h5>

        <ul className="list-group list-group-flush">

          <li className="list-group-item">
            Alumni baru mendaftar
          </li>

          <li className="list-group-item">
            Lowongan baru ditambahkan
          </li>

          <li className="list-group-item">
            Informasi terbaru dipublikasikan
          </li>

          <li className="list-group-item">
            Tracer Study diperbarui
          </li>

        </ul>

      </div>
    </div>
  );
}

export default RecentActivity;