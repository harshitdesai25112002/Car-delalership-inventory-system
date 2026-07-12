from fastapi import FastAPI
from app.core.config import settings
from app.database.mongodb import client
from app.api.auth import router as auth_router
from app.api.vehicles import router as vehicle_router


app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION
)


@app.on_event("startup")
def startup_db():
    try:
        client.admin.command("ping")
        print("MongoDB Connected Successfully!")
    except Exception as e:
        print("MongoDB Connection Failed")
        print(e)


@app.get("/")
def root():
    return {
        "message": "Welcome to Car Dealership Inventory API"
    }

app.include_router(auth_router)
app.include_router(vehicle_router)