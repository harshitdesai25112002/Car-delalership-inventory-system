from pydantic import BaseModel, Field


class VehicleCreate(BaseModel):
    make: str = Field(..., min_length=2)
    model: str = Field(..., min_length=1)
    category: str
    price: float = Field(..., gt=0)
    quantity: int = Field(..., ge=0)


class VehicleUpdate(BaseModel):
    make: str
    model: str
    category: str
    price: float
    quantity: int


class PurchaseRequest(BaseModel):
    quantity: int = Field(..., gt=0)


class RestockRequest(BaseModel):
    quantity: int = Field(..., gt=0)