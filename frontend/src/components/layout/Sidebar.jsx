import {
    FaCar,
    FaChartPie,
    FaUsers,
    FaShoppingCart,
    FaCog,
    FaSignOutAlt
} from "react-icons/fa";

function Sidebar(){

    return(

        <aside className="sidebar">

            <div className="sidebar-logo">

                <FaCar/>

                <h2>DriveHub</h2>

            </div>

            <nav>

                <a href="#">Dashboard</a>

                <a href="#">Vehicles</a>

                <a href="#">Purchase</a>

                <a href="#">Users</a>

                <a href="#">Settings</a>

            </nav>

            <button className="logout-btn">

                <FaSignOutAlt/>

                Logout

            </button>

        </aside>

    )

}

export default Sidebar;