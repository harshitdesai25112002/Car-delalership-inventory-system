import { useState } from "react";

import Navbar from "../components/Navbar";
import VehicleForm from "../components/VehicleForm";
import VehicleTable from "../components/VehicleTable";
function Dashboard() {

    const [refresh, setRefresh] = useState(false);

    const loadVehicles = () => {

        setRefresh(!refresh);

    };

    return (

        <>
            <Navbar />

            <div className="container mt-4">

                <VehicleForm
                    loadVehicles={loadVehicles}
                />

                <VehicleTable
                    refresh={refresh}
                />

            </div>

        </>

    );

}

export default Dashboard;