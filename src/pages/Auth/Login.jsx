import { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";

import { AuthContext }
from "../../context/AuthContext";

function Login() {

  const navigate = useNavigate();

  const { login } =
    useContext(AuthContext);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {

    e.preventDefault();

    const user = login(
      form.email,
      form.password
    );

    // ADMIN

    if (user?.role === "admin") {

      navigate("/admin/dashboard");

    }

    // ALUMNI

    else if (
      user?.role === "alumni"
    ) {

      navigate("/alumni/dashboard");

    }

    // GAGAL

    else {

      alert("Email / Password salah");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center bg-light"
      style={{ minHeight: "100vh" }}
    >

      <div
        className="card shadow border-0 p-4"
        style={{
          width: "400px",
          borderRadius: "20px",
        }}
      >

        <div className="text-center mb-4">

          <h2 className="fw-bold">
            SI-ALKAR
          </h2>

          <p className="text-muted">
            Sistem Alumni & Karir
          </p>

        </div>

        <form onSubmit={handleLogin}>

          <div className="mb-3">

            <label>Email</label>

            <input
              type="email"
              className="form-control"
              placeholder="Masukkan Email"
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
            />

          </div>

          <div className="mb-4">

            <label>Password</label>

            <input
              type="password"
              className="form-control"
              placeholder="Masukkan Password"
              value={form.password}
              onChange={(e) =>
                setForm({
                  ...form,
                  password: e.target.value,
                })
              }
            />

          </div>

          <button
            className="btn btn-primary w-100"
          >
            Login
          </button>

        </form>

        {/* DEMO AKUN */}

        <div className="mt-4">

          <small className="text-muted">

            <b>Admin</b><br />
            admin@gmail.com<br />
            admin123

            <hr />

            <b>Alumni</b><br />
            alumni@gmail.com<br />
            alumni123

          </small>

        </div>

      </div>

    </div>
  );
}

export default Login;