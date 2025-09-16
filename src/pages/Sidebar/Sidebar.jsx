import { NavLink } from 'react-router-dom';
import {
  FaTachometerAlt,
  FaUser,
  FaFileAlt,
  FaLightbulb,
  FaPrint,
  FaKey,
  FaSignOutAlt
} from 'react-icons/fa';
import './Sidebar.css';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="user-panel">
        <div className="avatar">BS</div>
        <div className="user-info">
          <span className="name">Budi Santoso, S.Pd</span>
          <span className="role">Guru Matematika</span>
        </div>
      </div>

      <nav className="nav-menu">
        <NavLink to="/dashboard" end className="nav-item">
          <FaTachometerAlt className="icon" />
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/profile" className="nav-item">
          <FaUser className="icon" />
          <span>Profile Saya</span>
        </NavLink>
        <NavLink to="/dokumen" className="nav-item">
          <FaFileAlt className="icon" />
          <span>Dokumen Saya</span>
        </NavLink>
        <NavLink to="/usulan" className="nav-item">
          <FaLightbulb className="icon" />
          <span>Usulan</span>
        </NavLink>
        <NavLink to="/cetak" className="nav-item">
          <FaPrint className="icon" />
          <span>Cetak Biodata</span>
        </NavLink>
        <NavLink to="/ganti-password" className="nav-item">
          <FaKey className="icon" />
          <span>Ganti Password</span>
        </NavLink>
      </nav>

      <button className="logout-btn">
        <FaSignOutAlt className="icon" />
        <span>Logout</span>
      </button>
    </aside>
);
}
