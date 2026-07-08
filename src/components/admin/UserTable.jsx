import { useEffect, useState } from "react";

function UserTable() {

  // DEFAULT DATA

  const defaultData = [
    {
      id: 1,
      nama: "Administrator",
      email: "admin@gmail.com",
      role: "Admin",
      status: "Aktif",
    },
    {
      id: 2,
      nama: "Budi Santoso",
      email: "budi@gmail.com",
      role: "Alumni",
      status: "Aktif",
    },
  ];

  // STATE

  const [search, setSearch] = useState("");

  const [users, setUsers] = useState(() => {

    const savedData =
      localStorage.getItem("users");

    return savedData
      ? JSON.parse(savedData)
      : defaultData;
  });

  const [form, setForm] = useState({
    nama: "",
    email: "",
    role: "",
    status: "",
  });

  const [editId, setEditId] = useState(null);

  // LOCAL STORAGE

  useEffect(() => {

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );

  }, [users]);

  // SUBMIT

  const handleSubmit = () => {

    if (
      !form.nama ||
      !form.email ||
      !form.role ||
      !form.status
    ) {
      alert("Semua field wajib diisi!");
      return;
    }

    // UPDATE

    if (editId) {

      const updatedData = users.map(
        (item) =>
          item.id === editId
            ? { ...item, ...form }
            : item
      );

      setUsers(updatedData);

      alert("User berhasil diupdate");

    } else {

      // TAMBAH

      const newData = {
        id: Date.now(),
        ...form,
      };

      setUsers([
        ...users,
        newData,
      ]);

      alert("User berhasil ditambahkan");
    }

    // RESET

    setForm({
      nama: "",
      email: "",
      role: "",
      status: "",
    });

    setEditId(null);
  };

  // EDIT

  const handleEdit = (item) => {

    setForm({
      nama: item.nama,
      email: item.email,
      role: item.role,
      status: item.status,
    });

    setEditId(item.id);
  };

  // DELETE

  const handleDelete = (id) => {

    const confirmDelete = window.confirm(
      "Yakin ingin menghapus user?"
    );

    if (confirmDelete) {

      const filtered =
        users.filter(
          (item) => item.id !== id
        );

      setUsers(filtered);
    }
  };

  // RESET

  const resetData = () => {

    const confirmReset = window.confirm(
      "Reset semua data user?"
    );

    if (confirmReset) {

      localStorage.removeItem("users");

      setUsers(defaultData);

      alert("Data berhasil direset");
    }
  };

  // SEARCH

  const filteredData = users.filter(
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
            placeholder="Cari User..."
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
              data-bs-target="#userModal"
            >
              + Tambah User
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
                <th>Email</th>
                <th>Role</th>
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
                    <td>{item.email}</td>

                    <td>

                      <span
                        className={`badge ${
                          item.role === "Admin"
                            ? "bg-primary"
                            : "bg-success"
                        }`}
                      >
                        {item.role}
                      </span>

                    </td>

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
                        data-bs-target="#userModal"
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
        id="userModal"
        tabIndex="-1"
      >
        <div className="modal-dialog">

          <div className="modal-content">

            <div className="modal-header">

              <h5 className="modal-title">

                {editId
                  ? "Edit User"
                  : "Tambah User"}

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

                <label>Email</label>

                <input
                  type="email"
                  className="form-control"
                  value={form.email}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      email: e.target.value,
                    })
                  }
                />

              </div>

              <div className="mb-3">

                <label>Role</label>

                <select
                  className="form-select"
                  value={form.role}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      role: e.target.value,
                    })
                  }
                >
                  <option value="">
                    Pilih Role
                  </option>

                  <option value="Admin">
                    Admin
                  </option>

                  <option value="Alumni">
                    Alumni
                  </option>

                </select>

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

export default UserTable;