function ActivityCard() {
  return (
    <div className="card shadow-sm">

      <div className="card-header">
        Aktivitas Terbaru
      </div>

      <ul className="list-group list-group-flush">

        <li className="list-group-item">
          ✔ Profil berhasil diperbarui
        </li>

        <li className="list-group-item">
          ✔ Tracer Study telah dikirim
        </li>

        <li className="list-group-item">
          ✔ Melihat lowongan PT Telkom
        </li>

        <li className="list-group-item">
          ✔ Membaca informasi Seminar Karir
        </li>

      </ul>

    </div>
  );
}

export default ActivityCard;