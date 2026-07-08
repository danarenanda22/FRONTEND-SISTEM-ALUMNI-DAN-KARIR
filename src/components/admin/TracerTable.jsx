import { useEffect, useState } from "react";

function TracerTable() {

  // DEFAULT DATA

  const defaultData = [
    {
      id: 1,
      nama: "Budi Santoso",
      pekerjaan: "Frontend Developer",
      perusahaan: "PT Telkom",
      status: "Bekerja",
    },
    {
      id: 2,
      nama: "Siti Aisyah",
      pekerjaan: "UI UX Designer",
      perusahaan: "Bank BCA",
      status: "Bekerja",
    },
  ];

  // STATE

  const [search, setSearch] = useState("");

  const [tracer, setTracer] = useState(() => {

    const savedData =
      localStorage.getItem("tracer");

    return savedData
      ? JSON.parse(savedData)
      : defaultData;
  });

  const [form, setForm] = useState({
    nama: "",
    pekerjaan: "",
    perusahaan: "",
    status: "",
  });

  const [editId, setEditId] = useState(null);

  // LOCAL STORAGE

  useEffect(() => {

    localStorage.setItem(
      "tracer",
      JSON.stringify(tracer)
    );

  }, [tracer]);

  // SUBMIT

  const handleSubmit = () => {

    if (
      !form.nama ||
      !form.pekerjaan ||
      !form.perusahaan ||
      !form.status
    ) {
      alert("Semua field wajib diisi!");
      return;
    }

    // UPDATE

    if (editId) {

      const updatedData = tracer.map(
        (item) =>
          item.id === editId
            ? { ...item, ...form }
            : item
      );

      setTracer(updatedData);

      alert("Data berhasil diupdate");

    } else {

      // TAMBAH

      const newData = {
        id: Date.now(),
        ...form,
      };

      setTracer([
        ...tracer,
        newData,
      ]);

      alert("Data berhasil ditambahkan");
    }

    // RESET

    setForm({
      nama: "",
      pekerjaan: "",
      perusahaan: "",
      status: "",
    });

    setEditId(null);
  };

  // EDIT

  const handleEdit = (item) => {

    setForm({
      nama: item.nama,
      pekerjaan: item.pekerjaan,
      perusahaan: item.perusahaan,
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
        tracer.filter(
          (item) => item.id !== id
        );

      setTracer(filtered);
    }
  };

  // RESET

  const resetData = () => {

    const confirmReset = window.confirm(
      "Reset semua data tracer?"
    );

    if (confirmReset) {

      localStorage.removeItem("tracer");

      setTracer(defaultData);

      alert("Data berhasil direset");
    }
  };

  // SEARCH

  const filteredData = tracer.filter(
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
              data-bs-target="#tracerModal"
            >
              + Tambah Data
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
                <th>Pekerjaan</th>
                <th>Perusahaan</th>
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
                    <td>{item.pekerjaan}</td>
                    <td>{item.perusahaan}</td>

                    <td>

                      <span
                        className={`badge ${
                          item.status === "Bekerja"
                            ? "bg-success"
                            : "bg-warning text-dark"
                        }`}
                      >
                        {item.status}
                      </span>

                    </td>

                    <td>

                      <button
                        className="btn btn-warning btn-sm me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#tracerModal"
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
        id="tracerModal"
        tabIndex="-1"
      >
        <div className="modal-dialog">

          <div className="modal-content">

            <div className="modal-header">

              <h5 className="modal-title">

                {editId
                  ? "Edit Tracer"
                  : "Tambah Tracer"}

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

                <label>Pekerjaan</label>

                <input
                  type="text"
                  className="form-control"
                  value={form.pekerjaan}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      pekerjaan: e.target.value,
                    })
                  }
                />

              </div>

              <div className="mb-3">

                <label>Perusahaan</label>

                <input
                  type="text"
                  className="form-control"
                  value={form.perusahaan}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      perusahaan: e.target.value,
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

                  <option value="Bekerja">
                    Bekerja
                  </option>

                  <option value="Belum Bekerja">
                    Belum Bekerja
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

export default TracerTable;