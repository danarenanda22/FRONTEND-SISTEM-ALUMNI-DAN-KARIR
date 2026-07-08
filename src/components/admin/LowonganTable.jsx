import { useEffect, useState } from "react";

function LowonganTable() {

  // DEFAULT DATA

  const defaultData = [
    {
      id: 1,
      perusahaan: "PT Telkom Indonesia",
      posisi: "Frontend Developer",
      lokasi: "Jakarta",
      deadline: "2026-08-20",
      status: "Aktif",
    },
    {
      id: 2,
      perusahaan: "Bank BCA",
      posisi: "UI UX Designer",
      lokasi: "Bandung",
      deadline: "2026-09-01",
      status: "Aktif",
    },
  ];

  // STATE

  const [search, setSearch] = useState("");

  const [lowongan, setLowongan] = useState(() => {

    const savedData =
      localStorage.getItem("lowongan");

    return savedData
      ? JSON.parse(savedData)
      : defaultData;
  });

  const [form, setForm] = useState({
    perusahaan: "",
    posisi: "",
    lokasi: "",
    deadline: "",
    status: "",
  });

  const [editId, setEditId] = useState(null);

  // LOCAL STORAGE

  useEffect(() => {

    localStorage.setItem(
      "lowongan",
      JSON.stringify(lowongan)
    );

  }, [lowongan]);

  // SUBMIT

  const handleSubmit = () => {

    if (
      !form.perusahaan ||
      !form.posisi ||
      !form.lokasi ||
      !form.deadline ||
      !form.status
    ) {
      alert("Semua field wajib diisi!");
      return;
    }

    // UPDATE

    if (editId) {

      const updatedData = lowongan.map(
        (item) =>
          item.id === editId
            ? { ...item, ...form }
            : item
      );

      setLowongan(updatedData);

      alert("Lowongan berhasil diupdate");

    } else {

      // TAMBAH

      const newData = {
        id: Date.now(),
        ...form,
      };

      setLowongan([
        ...lowongan,
        newData,
      ]);

      alert("Lowongan berhasil ditambahkan");
    }

    // RESET

    setForm({
      perusahaan: "",
      posisi: "",
      lokasi: "",
      deadline: "",
      status: "",
    });

    setEditId(null);
  };

  // EDIT

  const handleEdit = (item) => {

    setForm({
      perusahaan: item.perusahaan,
      posisi: item.posisi,
      lokasi: item.lokasi,
      deadline: item.deadline,
      status: item.status,
    });

    setEditId(item.id);
  };

  // DELETE

  const handleDelete = (id) => {

    const confirmDelete = window.confirm(
      "Yakin ingin menghapus lowongan?"
    );

    if (confirmDelete) {

      const filtered =
        lowongan.filter(
          (item) => item.id !== id
        );

      setLowongan(filtered);
    }
  };

  // RESET

  const resetData = () => {

    const confirmReset = window.confirm(
      "Reset semua data lowongan?"
    );

    if (confirmReset) {

      localStorage.removeItem("lowongan");

      setLowongan(defaultData);

      alert("Data berhasil direset");
    }
  };

  // SEARCH

  const filteredData = lowongan.filter(
    (item) =>
      item.perusahaan
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
            placeholder="Cari Lowongan..."
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
              data-bs-target="#lowonganModal"
            >
              + Tambah Lowongan
            </button>

          </div>

        </div>

        {/* TABLE */}

        <div className="table-responsive">

          <table className="table table-bordered align-middle">

            <thead className="table-dark">

              <tr>
                <th>No</th>
                <th>Perusahaan</th>
                <th>Posisi</th>
                <th>Lokasi</th>
                <th>Deadline</th>
                <th>Status</th>
                <th width="180">Aksi</th>
              </tr>

            </thead>

            <tbody>

              {filteredData.length > 0 ? (

                filteredData.map((item, index) => (

                  <tr key={item.id}>

                    <td>{index + 1}</td>
                    <td>{item.perusahaan}</td>
                    <td>{item.posisi}</td>
                    <td>{item.lokasi}</td>
                    <td>{item.deadline}</td>
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
                        data-bs-target="#lowonganModal"
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
        id="lowonganModal"
        tabIndex="-1"
      >
        <div className="modal-dialog">

          <div className="modal-content">

            <div className="modal-header">

              <h5 className="modal-title">

                {editId
                  ? "Edit Lowongan"
                  : "Tambah Lowongan"}

              </h5>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>

            </div>

            <div className="modal-body">

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

                <label>Posisi</label>

                <input
                  type="text"
                  className="form-control"
                  value={form.posisi}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      posisi: e.target.value,
                    })
                  }
                />

              </div>

              <div className="mb-3">

                <label>Lokasi</label>

                <input
                  type="text"
                  className="form-control"
                  value={form.lokasi}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      lokasi: e.target.value,
                    })
                  }
                />

              </div>

              <div className="mb-3">

                <label>Deadline</label>

                <input
                  type="date"
                  className="form-control"
                  value={form.deadline}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      deadline: e.target.value,
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

export default LowonganTable;