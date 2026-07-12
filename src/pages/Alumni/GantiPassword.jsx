import { useState } from "react";
import {
  FaLock,
  FaSave,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

function GantiPassword() {

  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [password, setPassword] = useState({
    lama: "",
    baru: "",
    konfirmasi: "",
  });

  const handleChange = (e) => {
    setPassword({
      ...password,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.baru !== password.konfirmasi) {
      alert("Konfirmasi password tidak sama!");
      return;
    }

    alert("Password berhasil diubah.");

    setPassword({
      lama: "",
      baru: "",
      konfirmasi: "",
    });
  };

  return (
    <div className="container-fluid py-4">

      <h2 className="fw-bold">
        Ganti Password
      </h2>

      <p className="text-muted mb-4">
        Silakan ubah password akun Anda.
      </p>

      <div className="card shadow-sm border-0">

        <div className="card-body">

          <form onSubmit={handleSubmit}>

            <div className="row">
            {/* Password Lama */}
<div className="col-12 mb-3">

  <label className="form-label fw-semibold">
    Password Lama
  </label>

  <div className="input-group">

    <span className="input-group-text">
      <FaLock />
    </span>

    <input
      type={showOld ? "text" : "password"}
      className="form-control"
      name="lama"
      value={password.lama}
      onChange={handleChange}
      placeholder="Masukkan password lama"
    />

    <button
      type="button"
      className="btn btn-outline-secondary"
      onClick={() => setShowOld(!showOld)}
    >
      {showOld ? <FaEyeSlash /> : <FaEye />}
    </button>

  </div>

</div>

{/* Password Baru */}
<div className="col-12 mb-3">

  <label className="form-label fw-semibold">
    Password Baru
  </label>

  <div className="input-group">

    <span className="input-group-text">
      <FaLock />
    </span>

    <input
      type={showNew ? "text" : "password"}
      className="form-control"
      name="baru"
      value={password.baru}
      onChange={handleChange}
      placeholder="Masukkan password baru"
    />

    <button
      type="button"
      className="btn btn-outline-secondary"
      onClick={() => setShowNew(!showNew)}
    >
      {showNew ? <FaEyeSlash /> : <FaEye />}
    </button>

  </div>

</div>

{/* Konfirmasi Password */}
<div className="col-12 mb-4">

  <label className="form-label fw-semibold">
    Konfirmasi Password Baru
  </label>

  <div className="input-group">

    <span className="input-group-text">
      <FaLock />
    </span>

    <input
      type={showConfirm ? "text" : "password"}
      className="form-control"
      name="konfirmasi"
      value={password.konfirmasi}
      onChange={handleChange}
      placeholder="Ulangi password baru"
    />

    <button
      type="button"
      className="btn btn-outline-secondary"
      onClick={() => setShowConfirm(!showConfirm)}
    >
      {showConfirm ? <FaEyeSlash /> : <FaEye />}
    </button>

  </div>

</div>
              {/* Informasi */}
              <div className="col-12 mb-4">

                <div className="alert alert-info mb-0">

                  <strong>Catatan :</strong>

                  <ul className="mb-0 mt-2">

                    <li>Password minimal 8 karakter.</li>

                    <li>Gunakan kombinasi huruf dan angka.</li>

                    <li>Jangan bagikan password kepada siapa pun.</li>

                  </ul>

                </div>

              </div>

              {/* Tombol */}
              <div className="col-12 text-end">

                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  <FaSave className="me-2" />
                  Simpan Password
                </button>

              </div>

            </div>

          </form>

        </div>

      </div>

    </div>

  );

}

export default GantiPassword;