import { useState, useEffect } from "react";

function AlumniModal({ show, onClose, onSave, data }) {
  const [form, setForm] = useState({
    nim: "",
    nama: "",
    prodi: "",
    angkatan: "",
    status: "",
  });

  useEffect(() => {
    if (data) {
      setForm(data);
    } else {
      setForm({
        nim: "",
        nama: "",
        prodi: "",
        angkatan: "",
        status: "",
      });
    }
  }, [data]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    onSave(form);
  };

  if (!show) return null;

  return (
    <div
      className="modal fade show d-block"
      style={{ background: "rgba(0,0,0,.5)" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">

          <div className="modal-header">
            <h5>
              {data ? "Edit Alumni" : "Tambah Alumni"}
            </h5>

            <button
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>

          <div className="modal-body">

            <input
              className="form-control mb-3"
              placeholder="NIM"
              name="nim"
              value={form.nim}
              onChange={handleChange}
            />

            <input
              className="form-control mb-3"
              placeholder="Nama"
              name="nama"
              value={form.nama}
              onChange={handleChange}
            />

            <input
              className="form-control mb-3"
              placeholder="Program Studi"
              name="prodi"
              value={form.prodi}
              onChange={handleChange}
            />

            <input
              className="form-control mb-3"
              placeholder="Angkatan"
              name="angkatan"
              value={form.angkatan}
              onChange={handleChange}
            />

            <select
              className="form-select"
              name="status"
              value={form.status}
              onChange={handleChange}
            >
              <option value="">Pilih Status</option>
              <option>Bekerja</option>
              <option>Kuliah</option>
              <option>Wirausaha</option>
              <option>Belum Bekerja</option>
            </select>

          </div>

          <div className="modal-footer">

            <button
              className="btn btn-secondary"
              onClick={onClose}
            >
              Batal
            </button>

            <button
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Simpan
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}

export default AlumniModal;