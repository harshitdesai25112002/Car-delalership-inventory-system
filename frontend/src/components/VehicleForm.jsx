import { useState } from "react";
import API from "../api/axios";

function VehicleForm({ loadVehicles }) {

    const [vehicle, setVehicle] = useState({
        make: "",
        model: "",
        category: "",
        price: "",
        quantity: ""
    });

    const handleChange = (e) => {

        setVehicle({
            ...vehicle,
            [e.target.name]: e.target.value
        });

    };

    const addVehicle = async (e) => {

        e.preventDefault();

        try {

            await API.post("/vehicles", {
                make: vehicle.make,
                model: vehicle.model,
                category: vehicle.category,
                price: Number(vehicle.price),
                quantity: Number(vehicle.quantity)
            });

            alert("Vehicle Added Successfully");

            setVehicle({
                make: "",
                model: "",
                category: "",
                price: "",
                quantity: ""
            });

            loadVehicles();

        } catch (error) {

            alert(
                error.response?.data?.detail ||
                "Unable to Add Vehicle"
            );

        }

    };

    return (

        <div className="card p-4 shadow mb-4">

            <h4>Add Vehicle</h4>

            <form onSubmit={addVehicle}>

                <div className="row">

                    <div className="col-md-4 mb-3">
                        <input
                            className="form-control"
                            placeholder="Make"
                            name="make"
                            value={vehicle.make}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="col-md-4 mb-3">
                        <input
                            className="form-control"
                            placeholder="Model"
                            name="model"
                            value={vehicle.model}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="col-md-4 mb-3">
                        <input
                            className="form-control"
                            placeholder="Category"
                            name="category"
                            value={vehicle.category}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="col-md-6 mb-3">
                        <input
                            className="form-control"
                            type="number"
                            placeholder="Price"
                            name="price"
                            value={vehicle.price}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="col-md-6 mb-3">
                        <input
                            className="form-control"
                            type="number"
                            placeholder="Quantity"
                            name="quantity"
                            value={vehicle.quantity}
                            onChange={handleChange}
                            required
                        />
                    </div>

                </div>

                <button className="btn btn-primary">
                    Add Vehicle
                </button>

            </form>

        </div>

    );

}

export default VehicleForm;