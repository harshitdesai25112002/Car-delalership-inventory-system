import { useEffect, useState } from "react";
import API from "../api/axios";

function VehicleTable({ refresh }) {

    const [vehicles, setVehicles] = useState([]);

    const loadVehicles = async () => {

        try {

            const response = await API.get("/vehicles");

            setVehicles(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    useEffect(() => {

        loadVehicles();

    }, [refresh]);

    const deleteVehicle = async (id) => {

        if (!window.confirm("Delete this vehicle?"))
            return;

        try {

            await API.delete(`/vehicles/${id}`);

            alert("Vehicle Deleted");

            loadVehicles();

        } catch (error) {

            alert(
                error.response?.data?.detail ||
                "Delete Failed"
            );

        }

    };

    const purchaseVehicle = async (id) => {

        const quantity = prompt("Enter Quantity");

        if (!quantity)
            return;

        try {

            await API.post(`/vehicles/${id}/purchase`, {
                quantity: Number(quantity)
            });

            alert("Vehicle Purchased");

            loadVehicles();

        } catch (error) {

            alert(
                error.response?.data?.detail ||
                "Purchase Failed"
            );

        }

    };

    const restockVehicle = async (id) => {

        const quantity = prompt("Enter Quantity");

        if (!quantity)
            return;

        try {

            await API.post(`/vehicles/${id}/restock`, {
                quantity: Number(quantity)
            });

            alert("Vehicle Restocked");

            loadVehicles();

        } catch (error) {

            alert(
                error.response?.data?.detail ||
                "Restock Failed"
            );

        }

    };

    return (

        <div className="card shadow p-3">

            <h4>Vehicle Inventory</h4>

            <table className="table table-bordered table-hover">

                <thead>

                    <tr>

                        <th>Make</th>
                        <th>Model</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        vehicles.map(vehicle => (

                            <tr key={vehicle._id}>

                                <td>{vehicle.make}</td>
                                <td>{vehicle.model}</td>
                                <td>{vehicle.category}</td>
                                <td>{vehicle.price}</td>
                                <td>{vehicle.quantity}</td>

                                <td>

                                    <button
                                        className="btn btn-success btn-sm me-2"
                                        onClick={() => purchaseVehicle(vehicle._id)}
                                    >
                                        Purchase
                                    </button>

                                    <button
                                        className="btn btn-warning btn-sm me-2"
                                        onClick={() => restockVehicle(vehicle._id)}
                                    >
                                        Restock
                                    </button>

                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => deleteVehicle(vehicle._id)}
                                    >
                                        Delete
                                    </button>

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default VehicleTable;