function GantiPassword() {
  return (
    <div className="container-fluid">

      <h2 className="mb-4">
        Ganti Password
      </h2>

      <div
        className="card shadow-sm p-4"
        style={{ maxWidth: "600px" }}
      >

        <div className="mb-3">
          <label className="form-label">
            Password Lama
          </label>

          <input
            type="password"
            className="form-control"
            placeholder="Masukkan password lama"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            Password Baru
          </label>

          <input
            type="password"
            className="form-control"
            placeholder="Masukkan password baru"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            Konfirmasi Password
          </label>

          <input
            type="password"
            className="form-control"
            placeholder="Ulangi password baru"
          />
        </div>

        <button className="btn btn-primary">
          Simpan Password
        </button>

      </div>

    </div>
  );
}

export default GantiPassword;