import {
  FaCarSide,
  FaHome,
  FaCar,
  FaShoppingCart,
  FaChartLine,
  FaUsers,
  FaCog,
  FaChevronLeft,
  FaChevronRight,
  FaSignOutAlt,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

function Sidebar({ collapsed, toggleSidebar }) {
  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      {/* Logo */}

      <div className="sidebar-header">
        <div className="sidebar-logo">
          <FaCarSide />
        </div>

        {!collapsed && (
          <div className="sidebar-brand">
            <h2>DriveHub</h2>

            <span>Inventory System</span>
          </div>
        )}
      </div>

      {/* Navigation */}

      <nav className="sidebar-menu">
        <NavLink
          to="/dashboard/home"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <FaHome />
          {!collapsed && <span>Dashboard</span>}
        </NavLink>

        <NavLink
          to="/dashboard/vehicles"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <FaCar />
          {!collapsed && <span>Vehicles</span>}
        </NavLink>

        <NavLink
          to="/dashboard/purchase"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <FaShoppingCart />
          {!collapsed && <span>Purchase</span>}
        </NavLink>

        <NavLink
          to="/dashboard/users"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <FaUsers />
          {!collapsed && <span>Employees</span>}
        </NavLink>

        <NavLink
          to="/dashboard/settings"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <FaCog />
          {!collapsed && <span>Settings</span>}
        </NavLink>
      </nav>

      {/* Footer */}

      <div className="sidebar-footer">
        <button className="collapse-btn" onClick={toggleSidebar}>
          {collapsed ? <FaChevronRight /> : <FaChevronLeft />}
        </button>

        <button className="logout-btn">
          <FaSignOutAlt />

          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
