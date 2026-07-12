from app.schemas.user_schema import UserRegister
from app.database.collections import users_collection
from app.core.security import hash_password
from app.core.security import verify_password, create_access_token


def register_user(user: UserRegister) -> dict:

    # Check if email already exists
    existing_user = users_collection.find_one(
        {"email": user.email}
    )

    if existing_user:
        return {
            "message": "Email already registered."
        }

    # Create user document
    role = "user"
    if user.admin_code == "ADMIN123": 
        role = "admin"
        
    user_document = {
        "name": user.name,
        "email": user.email,
        "password": hash_password(user.password),
        "role": role
    }

    users_collection.insert_one(user_document)

    return {
        "message": "User registered successfully."
    }

def login_user(user):

    existing_user = users_collection.find_one(
        {"email": user.email}
    )

    if not existing_user:
        return {
            "message": "Invalid email or password."
        }

    if not verify_password(
        user.password,
        existing_user["password"]
    ):
        return {
            "message": "Invalid email or password."
        }

    token = create_access_token(
        {
            "sub": str(existing_user["_id"]),
            "email": existing_user["email"],
            "role": existing_user["role"]
        }
    )

    return {
        "access_token": token,
        "token_type": "bearer"
    }