import { useState } from "react";

function Profile() {
  const [profile, setProfile] = useState({
    nama: "Budi Santoso",
    nim: "2020001",
    email: "budi@gmail.com",
    telepon: "08123456789",
    prodi: "Informatika",
    tahun: "2023",
    alamat: "OKU Timur",
  });

  const [password, setPassword] = useState({
    lama: "",
    baru: "",
    konfirmasi: "",
  });

  const [foto, setFoto] = useState(
    "https://i.pravatar.cc/300"
  );

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handlePassword = (e) => {
    setPassword({
      ...password,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    alert("Profil berhasil diperbarui!");
  };

  const handleGantiPassword = () => {
    if (
      password.baru !== password.konfirmasi
    ) {
      alert("Konfirmasi password tidak cocok!");
      return;
    }

    alert("Password berhasil diganti!");

    setPassword({
      lama: "",
      baru: "",
      konfirmasi: "",
    });
  };

  const handleFoto = (e) => {
    const file = e.target.files[0];

    if (file) {
      setFoto(URL.createObjectURL(file));
    }
  };

  return (
    <div className="container-fluid">

      <div className="mb-4">
        <h1 className="fw-bold">
          Profile Alumni
        </h1>

        <p className="text-muted">
          Kelola profil akun alumni
        </p>
      </div>

      <div className="row g-4">

        {/* FORM PROFIL */}

        <div className="col-lg-8">

          <div className="card border-0 shadow-sm">

            <div className="card-body p-4">

              <h3 className="fw-bold mb-4">
                Biodata Alumni
              </h3>

              <div className="row">

                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    Nama
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    name="nama"
                    value={profile.nama}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    NIM
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    name="nim"
                    value={profile.nim}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    Email
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={profile.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    Telepon
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    name="telepon"
                    value={profile.telepon}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    Program Studi
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    name="prodi"
                    value={profile.prodi}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    Tahun Lulus
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    name="tahun"
                    value={profile.tahun}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-12 mb-3">
                  <label className="form-label">
                    Alamat
                  </label>

                  <textarea
                    rows="4"
                    className="form-control"
                    name="alamat"
                    value={profile.alamat}
                    onChange={handleChange}
                  />
                </div>

              </div>

              <button
                className="btn btn-primary px-4"
                onClick={handleSave}
              >
                Simpan Profil
              </button>

            </div>

          </div>

        </div>

        {/* SIDEBAR */}

        <div className="col-lg-4">

          {/* FOTO */}

          <div className="card border-0 shadow-sm mb-4">

            <div className="card-body text-center p-4">

              <img
                src={foto}
                alt="Profile"
                className="rounded-circle mb-3"
                width="140"
                height="140"
                style={{
                  objectFit: "cover",
                }}
              />

              <h3 className="fw-bold">
                {profile.nama}
              </h3>

              <p className="text-muted">
                {profile.prodi}
              </p>

              <input
                type="file"
                className="form-control"
                onChange={handleFoto}
              />

            </div>

          </div>

          {/* PASSWORD */}

          <div className="card border-0 shadow-sm">

            <div className="card-body p-4">

              <h3 className="fw-bold mb-4">
                Ganti Password
              </h3>

              <div className="mb-3">

                <label className="form-label">
                  Password Lama
                </label>

                <input
                  type="password"
                  className="form-control"
                  name="lama"
                  value={password.lama}
                  onChange={handlePassword}
                />

              </div>

              <div className="mb-3">

                <label className="form-label">
                  Password Baru
                </label>

                <input
                  type="password"
                  className="form-control"
                  name="baru"
                  value={password.baru}
                  onChange={handlePassword}
                />

              </div>

              <div className="mb-4">

                <label className="form-label">
                  Konfirmasi Password
                </label>

                <input
                  type="password"
                  className="form-control"
                  name="konfirmasi"
                  value={password.konfirmasi}
                  onChange={handlePassword}
                />

              </div>

              <button
                className="btn btn-danger w-100"
                onClick={handleGantiPassword}
              >
                Ganti Password
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;