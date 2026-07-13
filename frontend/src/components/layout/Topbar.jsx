import { FaBell, FaUserCircle } from "react-icons/fa";

function Topbar(){

    return(

        <header className="topbar">

            <div>

                <h2>Dashboard</h2>

                <p>Welcome Back 👋</p>

            </div>

            <div className="topbar-right">

                <FaBell/>

                <FaUserCircle/>

            </div>

        </header>

    )

}

export default Topbar;