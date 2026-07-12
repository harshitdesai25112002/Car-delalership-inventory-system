from typing import Optional

from fastapi import APIRouter, Depends, Query

from app.dependencies.auth import (
    get_current_user,
    get_current_admin
)

from app.schemas.vehicle_schema import (
    VehicleCreate,
    VehicleUpdate,
    PurchaseRequest,
    RestockRequest
)

from app.services.vehicle_service import (
    add_vehicle,
    get_all_vehicles,
    update_vehicle,
    delete_vehicle,
    search_vehicles,
    purchase_vehicle,
    restock_vehicle
)

router = APIRouter(
    prefix="/api/vehicles",
    tags=["Vehicles"]
)


# -------------------------
# Add Vehicle
# -------------------------
@router.post("")
def create_vehicle(
    vehicle: VehicleCreate,
    current_user=Depends(get_current_user)
):
    return add_vehicle(vehicle)


# -------------------------
# Get All Vehicles
# -------------------------
@router.get("")
def list_vehicles(
    current_user=Depends(get_current_user)
):
    return get_all_vehicles()


# -------------------------
# Update Vehicle
# -------------------------
@router.put("/{vehicle_id}")
def update_vehicle_api(
    vehicle_id: str,
    vehicle: VehicleUpdate,
    current_user=Depends(get_current_user)
):
    return update_vehicle(
        vehicle_id,
        vehicle
    )


# -------------------------
# Delete Vehicle
# Admin Only
# -------------------------
@router.delete("/{vehicle_id}")
def delete_vehicle_api(
    vehicle_id: str,
    current_user=Depends(get_current_admin)
):
    return delete_vehicle(vehicle_id)


# -------------------------
# Search Vehicles
# -------------------------
@router.get("/search")
def search_vehicle_api(
    make: Optional[str] = Query(None),
    model: Optional[str] = Query(None),
    category: Optional[str] = Query(None),
    min_price: Optional[float] = Query(None),
    max_price: Optional[float] = Query(None),
    current_user=Depends(get_current_user)
):

    return search_vehicles(
        make,
        model,
        category,
        min_price,
        max_price
    )


# -------------------------
# Purchase Vehicle
# -------------------------
@router.post("/{vehicle_id}/purchase")
def purchase_vehicle_api(
    vehicle_id: str,
    purchase: PurchaseRequest,
    current_user=Depends(get_current_user)
):

    return purchase_vehicle(
        vehicle_id,
        purchase.quantity
    )


# -------------------------
# Restock Vehicle
# Admin Only
# -------------------------
@router.post("/{vehicle_id}/restock")
def restock_vehicle_api(
    vehicle_id: str,
    restock: RestockRequest,
    current_user=Depends(get_current_admin)
):

    return restock_vehicle(
        vehicle_id,
        restock.quantity
    )