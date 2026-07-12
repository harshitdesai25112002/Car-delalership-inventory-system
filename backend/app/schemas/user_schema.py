from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from pydantic import BaseModel, EmailStr, Field

class UserRegister(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    password: str = Field(..., min_length=8)
    admin_code: Optional[str] = None

class UserResponse(BaseModel):
    message: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str