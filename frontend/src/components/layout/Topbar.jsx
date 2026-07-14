import {
    FaBars,
    FaBell,
    FaUserCircle,
    FaChevronDown
} from "react-icons/fa";

import { useLocation } from "react-router-dom";

function Topbar({ collapsed, toggleSidebar }) {

    const location = useLocation();

    const getPageTitle = () => {

        const path = location.pathname;

        if (path.includes("/dashboard/home")) return "Dashboard";

        if (path.includes("/dashboard/vehicles")) return "Vehicles";

        if (path.includes("/dashboard/purchase")) return "Purchase";

        if (path.includes("/dashboard/users")) return "Employee Management";

        if (path.includes("/dashboard/settings")) return "Settings";

        return "Dashboard";

    };

    return (

        <header className="topbar">

            {/* Left Section */}

            <div className="topbar-left">

                <button
                    className="menu-toggle"
                    onClick={toggleSidebar}
                >

                    <FaBars />

                </button>

                <div className="page-info">

                    <h2>{getPageTitle()}</h2>

                    <span>
                        Welcome back to DriveHub
                    </span>

                </div>

            </div>

            {/* Right Section */}

            <div className="topbar-right">

                <button className="notification-btn">

                    <FaBell />

                    <span className="notification-dot"></span>

                </button>

                <div className="profile-section">

                    <FaUserCircle className="profile-avatar" />

                    <div className="profile-info">

                        <h4>Harshit Desai</h4>

                        <span>Administrator</span>

                    </div>

                    <FaChevronDown className="profile-arrow" />

                </div>

            </div>

        </header>

    );

}

export default Topbar;