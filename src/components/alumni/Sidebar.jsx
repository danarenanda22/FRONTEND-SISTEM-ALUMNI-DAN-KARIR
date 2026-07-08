import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaClipboardList,
  FaBriefcase,
  FaNewspaper,
  FaKey,
  FaSignOutAlt,
} from "react-icons/fa";

import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="logo">
        <h3>SI-ALKAR</h3>
        <small>Alumni Panel</small>
      </div>

      <nav>

        <NavLink to="/alumni/dashboard">
          <FaHome />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/alumni/profil">
          <FaUser />
          <span>Profil</span>
        </NavLink>

        <NavLink to="/alumni/tracer-study">
          <FaClipboardList />
          <span>Tracer Study</span>
        </NavLink>

        <NavLink to="/alumni/lowongan">
          <FaBriefcase />
          <span>Lowongan</span>
        </NavLink>

        <NavLink to="/alumni/informasi">
          <FaNewspaper />
          <span>Informasi</span>
        </NavLink>

        <NavLink to="/alumni/ganti-password">
          <FaKey />
          <span>Ganti Password</span>
        </NavLink>

      </nav>

      <div className="sidebar-footer">

        <NavLink to="/">
          <FaSignOutAlt />
          <span>Logout</span>
        </NavLink>

      </div>

    </aside>
  );
}

export default Sidebar;