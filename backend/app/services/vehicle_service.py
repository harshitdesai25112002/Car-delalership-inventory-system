from bson import ObjectId
from app.database.collections import vehicles_collection


# -----------------------------
# Add Vehicle
# -----------------------------
def add_vehicle(vehicle):

    vehicle_document = {
        "make": vehicle.make,
        "model": vehicle.model,
        "category": vehicle.category,
        "price": vehicle.price,
        "quantity": vehicle.quantity
    }

    result = vehicles_collection.insert_one(vehicle_document)

    return {
        "message": "Vehicle added successfully.",
        "vehicle_id": str(result.inserted_id)
    }


# -----------------------------
# Get All Vehicles
# -----------------------------
def get_all_vehicles():

    vehicles = []

    for vehicle in vehicles_collection.find():

        vehicle["_id"] = str(vehicle["_id"])

        vehicles.append(vehicle)

    return vehicles


# -----------------------------
# Update Vehicle
# -----------------------------
def update_vehicle(vehicle_id, vehicle):

    result = vehicles_collection.update_one(
        {"_id": ObjectId(vehicle_id)},
        {
            "$set": {
                "make": vehicle.make,
                "model": vehicle.model,
                "category": vehicle.category,
                "price": vehicle.price,
                "quantity": vehicle.quantity
            }
        }
    )

    if result.matched_count == 0:
        return {
            "message": "Vehicle not found."
        }

    return {
        "message": "Vehicle updated successfully."
    }


# -----------------------------
# Delete Vehicle
# -----------------------------
def delete_vehicle(vehicle_id):

    result = vehicles_collection.delete_one(
        {"_id": ObjectId(vehicle_id)}
    )

    if result.deleted_count == 0:
        return {
            "message": "Vehicle not found."
        }

    return {
        "message": "Vehicle deleted successfully."
    }


# -----------------------------
# Search Vehicles
# -----------------------------
def search_vehicles(
    make=None,
    model=None,
    category=None,
    min_price=None,
    max_price=None
):

    query = {}

    if make:
        query["make"] = {
            "$regex": make,
            "$options": "i"
        }

    if model:
        query["model"] = {
            "$regex": model,
            "$options": "i"
        }

    if category:
        query["category"] = {
            "$regex": category,
            "$options": "i"
        }

    price_query = {}

    if min_price is not None:
        price_query["$gte"] = min_price

    if max_price is not None:
        price_query["$lte"] = max_price

    if price_query:
        query["price"] = price_query

    vehicles = []

    for vehicle in vehicles_collection.find(query):
        vehicle["_id"] = str(vehicle["_id"])
        vehicles.append(vehicle)

    return vehicles


# -----------------------------
# Purchase Vehicle
# -----------------------------
def purchase_vehicle(vehicle_id, quantity):

    vehicle = vehicles_collection.find_one(
        {"_id": ObjectId(vehicle_id)}
    )

    if not vehicle:
        return {
            "message": "Vehicle not found."
        }

    if vehicle["quantity"] < quantity:
        return {
            "message": "Insufficient stock."
        }

    vehicles_collection.update_one(
        {"_id": ObjectId(vehicle_id)},
        {
            "$inc": {
                "quantity": -quantity
            }
        }
    )

    return {
        "message": "Vehicle purchased successfully."
    }


# -----------------------------
# Restock Vehicle
# -----------------------------
def restock_vehicle(vehicle_id, quantity):

    vehicle = vehicles_collection.find_one(
        {"_id": ObjectId(vehicle_id)}
    )

    if not vehicle:
        return {
            "message": "Vehicle not found."
        }

    vehicles_collection.update_one(
        {"_id": ObjectId(vehicle_id)},
        {
            "$inc": {
                "quantity": quantity
            }
        }
    )

    return {
        "message": "Vehicle restocked successfully."
    }