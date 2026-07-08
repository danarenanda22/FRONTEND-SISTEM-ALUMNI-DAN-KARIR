import { NavLink } from "react-router-dom";

import {
  FaTachometerAlt,
  FaUsers,
  FaClipboardList,
  FaBriefcase,
  FaNewspaper,
  FaFileAlt,
  FaUserCog,
  FaSignOutAlt,
} from "react-icons/fa";

import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">

      {/* Logo */}
      <div className="logo">
        <h3>SI-ALKAR</h3>
        <small>Sistem Alumni & Karir</small>
      </div>

      {/* Menu */}
      <nav className="sidebar-menu">

        <NavLink to="/admin/dashboard">
          <FaTachometerAlt />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/admin/alumni">
          <FaUsers />
          <span>Data Alumni</span>
        </NavLink>

        <NavLink to="/admin/tracer-study">
          <FaClipboardList />
          <span>Tracer Study</span>
        </NavLink>

        <NavLink to="/admin/lowongan">
          <FaBriefcase />
          <span>Lowongan</span>
        </NavLink>

        <NavLink to="/admin/informasi">
          <FaNewspaper />
          <span>Informasi</span>
        </NavLink>

        <NavLink to="/admin/user">
          <FaUserCog />
          <span>User</span>
        </NavLink>

        <NavLink to="/admin/laporan">
          <FaFileAlt />
          <span>Laporan</span>
        </NavLink>

      </nav>

      {/* Footer */}
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