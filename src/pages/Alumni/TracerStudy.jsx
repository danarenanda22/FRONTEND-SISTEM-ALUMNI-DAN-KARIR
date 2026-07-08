function TracerStudy() {
  return (
    <div className="container-fluid">

      <h2 className="mb-4">
        Tracer Study
      </h2>

      <div className="card shadow-sm">

        <div className="card-body">

          <form>

            <div className="mb-3">

              <label className="form-label">
                Status Pekerjaan
              </label>

              <select className="form-select">

                <option>-- Pilih --</option>
                <option>Bekerja</option>
                <option>Wirausaha</option>
                <option>Belum Bekerja</option>
                <option>Melanjutkan Studi</option>

              </select>

            </div>

            <div className="mb-3">

              <label className="form-label">
                Nama Perusahaan
              </label>

              <input
                type="text"
                className="form-control"
                placeholder="Masukkan nama perusahaan"
              />

            </div>

            <div className="mb-3">

              <label className="form-label">
                Jabatan
              </label>

              <input
                type="text"
                className="form-control"
                placeholder="Masukkan jabatan"
              />

            </div>

            <div className="mb-3">

              <label className="form-label">
                Gaji
              </label>

              <input
                type="number"
                className="form-control"
                placeholder="Masukkan gaji"
              />

            </div>

            <button className="btn btn-primary">
              Simpan
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default TracerStudy;