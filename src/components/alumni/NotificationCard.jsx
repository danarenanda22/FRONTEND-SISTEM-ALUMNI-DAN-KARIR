function NotificationCard() {
  return (
    <div className="card shadow-sm">

      <div className="card-header">
        Notifikasi
      </div>

      <div className="card-body">

        <div className="alert alert-warning">
          Ada lowongan baru dari PT Bank Mandiri.
        </div>

        <div className="alert alert-info">
          Seminar Nasional akan dimulai minggu depan.
        </div>

      </div>

    </div>
  );
}

export default NotificationCard;