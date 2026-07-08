import { useEffect, useState } from "react";

function InformasiTable() {

  // DEFAULT DATA

  const defaultData = [
    {
      id: 1,
      judul: "Wisuda Tahun 2026",
      kategori: "Akademik",
      tanggal: "2026-08-20",
      status: "Aktif",
    },
    {
      id: 2,
      judul: "Seminar Karir Nasional",
      kategori: "Event",
      tanggal: "2026-09-01",
      status: "Aktif",
    },
  ];

  // STATE

  const [search, setSearch] = useState("");

  const [informasi, setInformasi] = useState(() => {

    const savedData =
      localStorage.getItem("informasi");

    return savedData
      ? JSON.parse(savedData)
      : defaultData;
  });

  const [form, setForm] = useState({
    judul: "",
    kategori: "",
    tanggal: "",
    status: "",
  });

  const [editId, setEditId] = useState(null);

  // LOCAL STORAGE

  useEffect(() => {

    localStorage.setItem(
      "informasi",
      JSON.stringify(informasi)
    );

  }, [informasi]);

  // SUBMIT

  const handleSubmit = () => {

    if (
      !form.judul ||
      !form.kategori ||
      !form.tanggal ||
      !form.status
    ) {
      alert("Semua field wajib diisi!");
      return;
    }

    // UPDATE

    if (editId) {

      const updatedData = informasi.map(
        (item) =>
          item.id === editId
            ? { ...item, ...form }
            : item
      );

      setInformasi(updatedData);

      alert("Informasi berhasil diupdate");

    } else {

      // TAMBAH

      const newData = {
        id: Date.now(),
        ...form,
      };

      setInformasi([
        ...informasi,
        newData,
      ]);

      alert("Informasi berhasil ditambahkan");
    }

    // RESET

    setForm({
      judul: "",
      kategori: "",
      tanggal: "",
      status: "",
    });

    setEditId(null);
  };

  // EDIT

  const handleEdit = (item) => {

    setForm({
      judul: item.judul,
      kategori: item.kategori,
      tanggal: item.tanggal,
      status: item.status,
    });

    setEditId(item.id);
  };

  // DELETE

  const handleDelete = (id) => {

    const confirmDelete = window.confirm(
      "Yakin ingin menghapus informasi?"
    );

    if (confirmDelete) {

      const filtered =
        informasi.filter(
          (item) => item.id !== id
        );

      setInformasi(filtered);
    }
  };

  // RESET

  const resetData = () => {

    const confirmReset = window.confirm(
      "Reset semua data informasi?"
    );

    if (confirmReset) {

      localStorage.removeItem("informasi");

      setInformasi(defaultData);

      alert("Data berhasil direset");
    }
  };

  // SEARCH

  const filteredData = informasi.filter(
    (item) =>
      item.judul
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="card border-0 shadow-sm">

      <div className="card-body">

        {/* HEADER */}

        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">

          <input
            type="text"
            className="form-control"
            placeholder="Cari Informasi..."
            style={{ maxWidth: "350px" }}
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

          <div className="d-flex gap-2">

            <button
              className="btn btn-secondary"
              onClick={resetData}
            >
              Reset
            </button>

            <button
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#informasiModal"
            >
              + Tambah Informasi
            </button>

          </div>

        </div>

        {/* TABLE */}

        <div className="table-responsive">

          <table className="table table-bordered align-middle">

            <thead className="table-dark">

              <tr>
                <th>No</th>
                <th>Judul</th>
                <th>Kategori</th>
                <th>Tanggal</th>
                <th>Status</th>
                <th width="180">Aksi</th>
              </tr>

            </thead>

            <tbody>

              {filteredData.length > 0 ? (

                filteredData.map((item, index) => (

                  <tr key={item.id}>

                    <td>{index + 1}</td>
                    <td>{item.judul}</td>
                    <td>{item.kategori}</td>
                    <td>{item.tanggal}</td>

                    <td>

                      <span
                        className={`badge ${
                          item.status === "Aktif"
                            ? "bg-success"
                            : "bg-danger"
                        }`}
                      >
                        {item.status}
                      </span>

                    </td>

                    <td>

                      <button
                        className="btn btn-warning btn-sm me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#informasiModal"
                        onClick={() =>
                          handleEdit(item)
                        }
                      >
                        Edit
                      </button>

                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() =>
                          handleDelete(item.id)
                        }
                      >
                        Hapus
                      </button>

                    </td>

                  </tr>

                ))

              ) : (

                <tr>

                  <td
                    colSpan="6"
                    className="text-center"
                  >
                    Data tidak ditemukan
                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>

      {/* MODAL */}

      <div
        className="modal fade"
        id="informasiModal"
        tabIndex="-1"
      >
        <div className="modal-dialog">

          <div className="modal-content">

            <div className="modal-header">

              <h5 className="modal-title">

                {editId
                  ? "Edit Informasi"
                  : "Tambah Informasi"}

              </h5>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>

            </div>

            <div className="modal-body">

              <div className="mb-3">

                <label>Judul</label>

                <input
                  type="text"
                  className="form-control"
                  value={form.judul}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      judul: e.target.value,
                    })
                  }
                />

              </div>

              <div className="mb-3">

                <label>Kategori</label>

                <input
                  type="text"
                  className="form-control"
                  value={form.kategori}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      kategori: e.target.value,
                    })
                  }
                />

              </div>

              <div className="mb-3">

                <label>Tanggal</label>

                <input
                  type="date"
                  className="form-control"
                  value={form.tanggal}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      tanggal: e.target.value,
                    })
                  }
                />

              </div>

              <div className="mb-3">

                <label>Status</label>

                <select
                  className="form-select"
                  value={form.status}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      status: e.target.value,
                    })
                  }
                >
                  <option value="">
                    Pilih Status
                  </option>

                  <option value="Aktif">
                    Aktif
                  </option>

                  <option value="Nonaktif">
                    Nonaktif
                  </option>

                </select>

              </div>

            </div>

            <div className="modal-footer">

              <button
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Tutup
              </button>

              <button
                className="btn btn-primary"
                onClick={handleSubmit}
                data-bs-dismiss="modal"
              >
                {editId
                  ? "Update"
                  : "Simpan"}
              </button>

            </div>

          </div>

        </div>
      </div>

    </div>
  );
}

export default InformasiTable;