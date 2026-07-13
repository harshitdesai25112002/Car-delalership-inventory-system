import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";

import DashboardLayout from "./components/layout/DashboardLayout";

import DashboardHome from "./pages/dashboard/DashboardHome";
import VehicleList from "./pages/dashboard/VehicleList";
import AddVehicle from "./pages/dashboard/AddVehicle";
import EditVehicle from "./pages/dashboard/EditVehicle";
import Purchase from "./pages/dashboard/Purchase";
import Users from "./pages/dashboard/Users";
import Settings from "./pages/dashboard/Settings";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                {/* Authentication */}

                <Route
                    path="/"
                    element={<Login />}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />

                {/* Dashboard */}

                <Route
                    path="/dashboard"
                    element={<DashboardLayout />}
                >

                    <Route
                        index
                        element={<Navigate to="home" replace />}
                    />

                    <Route
                        path="home"
                        element={<DashboardHome />}
                    />

                    <Route
                        path="vehicles"
                        element={<VehicleList />}
                    />

                    <Route
                        path="add-vehicle"
                        element={<AddVehicle />}
                    />

                    <Route
                        path="edit-vehicle/:id"
                        element={<EditVehicle />}
                    />

                    <Route
                        path="purchase"
                        element={<Purchase />}
                    />

                    <Route
                        path="users"
                        element={<Users />}
                    />

                    <Route
                        path="settings"
                        element={<Settings />}
                    />

                </Route>

            </Routes>

        </BrowserRouter>

    );

}

export default App;