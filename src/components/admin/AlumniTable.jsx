import { useEffect, useState } from "react";

function AlumniTable() {

  // DEFAULT DATA

  const defaultData = [
    {
      id: 1,
      nama: "Budi Santoso",
      nim: "2020001",
      prodi: "Informatika",
      tahun: "2024",
      status: "Aktif",
    },
    {
      id: 2,
      nama: "Siti Aisyah",
      nim: "2020002",
      prodi: "Sistem Informasi",
      tahun: "2024",
      status: "Aktif",
    },
  ];

  // STATE

  const [search, setSearch] = useState("");

  const [alumni, setAlumni] = useState(() => {

    const savedData =
      localStorage.getItem("alumni");

    return savedData
      ? JSON.parse(savedData)
      : defaultData;
  });

  const [form, setForm] = useState({
    nama: "",
    nim: "",
    prodi: "",
    tahun: "",
    status: "",
  });

  const [editId, setEditId] = useState(null);

  // LOCAL STORAGE

  useEffect(() => {

    localStorage.setItem(
      "alumni",
      JSON.stringify(alumni)
    );

  }, [alumni]);

  // SUBMIT

  const handleSubmit = () => {

    if (
      !form.nama ||
      !form.nim ||
      !form.prodi ||
      !form.tahun ||
      !form.status
    ) {
      alert("Semua field wajib diisi!");
      return;
    }

    // UPDATE

    if (editId) {

      const updatedData = alumni.map(
        (item) =>
          item.id === editId
            ? { ...item, ...form }
            : item
      );

      setAlumni(updatedData);

      alert("Data berhasil diupdate");

    } else {

      // TAMBAH

      const newData = {
        id: Date.now(),
        ...form,
      };

      setAlumni([
        ...alumni,
        newData,
      ]);

      alert("Data berhasil ditambahkan");
    }

    // RESET

    setForm({
      nama: "",
      nim: "",
      prodi: "",
      tahun: "",
      status: "",
    });

    setEditId(null);
  };

  // EDIT

  const handleEdit = (item) => {

    setForm({
      nama: item.nama,
      nim: item.nim,
      prodi: item.prodi,
      tahun: item.tahun,
      status: item.status,
    });

    setEditId(item.id);
  };

  // DELETE

  const handleDelete = (id) => {

    const confirmDelete = window.confirm(
      "Yakin ingin menghapus data?"
    );

    if (confirmDelete) {

      const filtered =
        alumni.filter(
          (item) => item.id !== id
        );

      setAlumni(filtered);
    }
  };

  // RESET

  const resetData = () => {

    const confirmReset = window.confirm(
      "Reset semua data alumni?"
    );

    if (confirmReset) {

      localStorage.removeItem("alumni");

      setAlumni(defaultData);

      alert("Data berhasil direset");
    }
  };

  // SEARCH

  const filteredData = alumni.filter(
    (item) =>
      item.nama
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
            placeholder="Cari Alumni..."
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
              data-bs-target="#alumniModal"
            >
              + Tambah Alumni
            </button>

          </div>

        </div>

        {/* TABLE */}

        <div className="table-responsive">

          <table className="table table-bordered align-middle">

            <thead className="table-dark">

              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>NIM</th>
                <th>Prodi</th>
                <th>Tahun</th>
                <th>Status</th>
                <th width="180">Aksi</th>
              </tr>

            </thead>

            <tbody>

              {filteredData.length > 0 ? (

                filteredData.map((item, index) => (

                  <tr key={item.id}>

                    <td>{index + 1}</td>
                    <td>{item.nama}</td>
                    <td>{item.nim}</td>
                    <td>{item.prodi}</td>
                    <td>{item.tahun}</td>

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
                        data-bs-target="#alumniModal"
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
                    colSpan="7"
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
        id="alumniModal"
        tabIndex="-1"
      >
        <div className="modal-dialog">

          <div className="modal-content">

            <div className="modal-header">

              <h5 className="modal-title">

                {editId
                  ? "Edit Alumni"
                  : "Tambah Alumni"}

              </h5>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>

            </div>

            <div className="modal-body">

              <div className="mb-3">

                <label>Nama</label>

                <input
                  type="text"
                  className="form-control"
                  value={form.nama}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      nama: e.target.value,
                    })
                  }
                />

              </div>

              <div className="mb-3">

                <label>NIM</label>

                <input
                  type="text"
                  className="form-control"
                  value={form.nim}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      nim: e.target.value,
                    })
                  }
                />

              </div>

              <div className="mb-3">

                <label>Program Studi</label>

                <input
                  type="text"
                  className="form-control"
                  value={form.prodi}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      prodi: e.target.value,
                    })
                  }
                />

              </div>

              <div className="mb-3">

                <label>Tahun Lulus</label>

                <input
                  type="text"
                  className="form-control"
                  value={form.tahun}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      tahun: e.target.value,
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

export default AlumniTable;