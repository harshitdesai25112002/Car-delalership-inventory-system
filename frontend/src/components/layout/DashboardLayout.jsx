import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function DashboardLayout() {

    const [collapsed, setCollapsed] = useState(false);

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    return (

        <div className="dashboard-layout">

            <Sidebar
                collapsed={collapsed}
                toggleSidebar={toggleSidebar}
            />

            <div
                className={`dashboard-main ${
                    collapsed ? "collapsed" : ""
                }`}
            >

                <Topbar
                    collapsed={collapsed}
                    toggleSidebar={toggleSidebar}
                />

                <main className="dashboard-content">

                    <Outlet />

                </main>

            </div>

        </div>

    );

}

export default DashboardLayout;