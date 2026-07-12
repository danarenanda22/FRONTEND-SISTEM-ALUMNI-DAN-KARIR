import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    const user = await login(
      form.email,
      form.password
    );

    if (!user) {
      alert("Email / Password salah");
      return;
    }

    // ADMIN
    if (user.role === "admin") {
      navigate("/admin/dashboard");
    }

    // ALUMNI
    else if (user.role === "alumni") {
      navigate("/alumni/dashboard");
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
              required
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
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
          >
            Login
          </button>
        </form>

        <div className="mt-4">
          <small className="text-muted">
            Login menggunakan akun yang sudah terdaftar
            di database Laravel.
          </small>
        </div>
      </div>
    </div>
  );
}

export default Login;