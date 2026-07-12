from typing import Optional

from bson import ObjectId
from app.database.collections import vehicles_collection


def add_vehicle(vehicle) -> dict:

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


def get_all_vehicles():

    vehicles = []

    for vehicle in vehicles_collection.find():

        vehicle["_id"] = str(vehicle["_id"])

        vehicles.append(vehicle)

    return vehicles

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

    if result.modified_count == 0:
        return {
            "message": "Vehicle not found or no changes made."
        }

    return {
        "message": "Vehicle updated successfully."
    }


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

    # Price Range Search
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