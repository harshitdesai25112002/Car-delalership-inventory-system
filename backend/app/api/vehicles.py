from fastapi import APIRouter
from app.schemas.vehicle_schema import VehicleCreate
from app.services.vehicle_service import (
    add_vehicle,
    get_all_vehicles,
    update_vehicle,
    delete_vehicle, 
    search_vehicles
)
from typing import Optional
from fastapi import Query
from app.schemas.vehicle_schema import VehicleUpdate

router = APIRouter(
    prefix="/api/vehicles",
    tags=["Vehicles"]
)


@router.post("")
def create_vehicle(vehicle: VehicleCreate):

    return add_vehicle(vehicle)


@router.get("")
def list_vehicles():

    return get_all_vehicles()

@router.put("/{vehicle_id}")
def update_vehicle_api(
    vehicle_id: str,
    vehicle: VehicleUpdate
):

    return update_vehicle(
        vehicle_id,
        vehicle
    )


@router.delete("/{vehicle_id}")
def delete_vehicle_api(vehicle_id: str):

    return delete_vehicle(vehicle_id)


@router.get("/search")
def search_vehicle_api(

    make: Optional[str] = Query(None),
    model: Optional[str] = Query(None),
    category: Optional[str] = Query(None),
    min_price: Optional[float] = Query(None),
    max_price: Optional[float] = Query(None)

):

    return search_vehicles(
        make,
        model,
        category,
        min_price,
        max_price
    )