import { useContext } from "react";

import { AuthContext }
from "../../context/AuthContext";

import { useNavigate }
from "react-router-dom";

function Topbar() {

  const { user, logout } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {

    logout();

    navigate("/login");
  };

  return (
    <div className="bg-white shadow-sm p-3 d-flex justify-content-between align-items-center">

      <h5 className="mb-0">
        Dashboard Admin
      </h5>

      <div className="d-flex align-items-center gap-3">

        <span>
          {user?.name}
        </span>

        <button
          className="btn btn-danger btn-sm"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default Topbar;