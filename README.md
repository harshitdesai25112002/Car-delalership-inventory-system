# 🚗 Car Dealership Inventory System

![Python](https://img.shields.io/badge/Python-3.12-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-0.115-green)
![React](https://img.shields.io/badge/React-19-61DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-8.2-47A248)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)
![Bootstrap](https://img.shields.io/badge/UI-Bootstrap%205-7952B3)
![License](https://img.shields.io/badge/License-MIT-yellow)

---

# 📌 Project Overview

The **Car Dealership Inventory System** is a full-stack web application developed as part of a technical assessment.

The application enables authenticated users to browse and manage vehicle inventory while providing role-based access for administrators.

The backend is built using **FastAPI** with **MongoDB**, while the frontend is developed using **React (Vite)**.

---

# ✨ Features

## Authentication

- User Registration
- User Login
- Password Hashing using bcrypt
- JWT Authentication
- Protected API Endpoints
- Role-Based Authorization

---

## Vehicle Management

- Add Vehicle
- View All Vehicles
- Search Vehicles
- Update Vehicle
- Delete Vehicle (Admin)
- Purchase Vehicle
- Restock Vehicle (Admin)

Each vehicle contains:

- Make
- Model
- Category
- Price
- Quantity

---

## Frontend

- React Single Page Application
- Login Page
- Dashboard
- Vehicle Management
- Responsive Bootstrap UI
- JWT Authentication

---

# 🛠 Technology Stack

## Backend

- Python 3.12
- FastAPI
- PyMongo
- JWT Authentication
- Passlib
- Bcrypt

## Frontend

- React
- Vite
- Axios
- React Router
- Bootstrap 5

## Database

- MongoDB Community Server
- MongoDB Compass

---

# 📂 Project Structure

```
Car_Dealership_Inventory_System

│
├── backend/
│   ├── app/
│   │
│   ├── api/
│   ├── core/
│   ├── database/
│   ├── schemas/
│   ├── services/
│   └── main.py
│
├── frontend/
│   ├── src/
│   │
│   ├── components/
│   ├── pages/
│   ├── api/
│   ├── styles/
│   └── App.jsx
│
└── README.md
```

---

# 🔐 Authentication

Authentication is implemented using JSON Web Tokens (JWT).

Workflow:

```
User Login

↓

FastAPI validates credentials

↓

JWT Generated

↓

Token stored in Browser

↓

Protected APIs

↓

Authorization Header

Bearer <token>
```

---

# 📡 API Endpoints

## Authentication

| Method | Endpoint |
|---------|-----------|
| POST | /api/auth/register |
| POST | /api/auth/login |

---

## Vehicles

| Method | Endpoint |
|---------|-----------|
| POST | /api/vehicles |
| GET | /api/vehicles |
| GET | /api/vehicles/search |
| PUT | /api/vehicles/{id} |
| DELETE | /api/vehicles/{id} |

---

## Inventory

| Method | Endpoint |
|---------|-----------|
| POST | /api/vehicles/{id}/purchase |
| POST | /api/vehicles/{id}/restock |

---

# 💾 Database

Database Used

- MongoDB

Database Name

```
car_dealership_db
```

Collections

```
users

vehicles
```

---

# ⚙️ Backend Setup

Clone Repository

```bash
git clone <repository-url>
```

Navigate

```bash
cd backend
```

Create Virtual Environment

```bash
python -m venv venv
```

Activate

Windows

```bash
venv\Scripts\activate
```

Install Packages

```bash
pip install -r requirements.txt
```

Run Backend

```bash
uvicorn app.main:app --reload
```

Swagger Documentation

```
http://127.0.0.1:8000/docs
```

---

# ⚙️ Frontend Setup

Navigate

```bash
cd frontend
```

Install Packages

```bash
npm install
```

Run

```bash
npm run dev
```

Open

```
http://localhost:5173
```

---

# 📷 Screenshots

Screenshots will be added after completing the frontend.

Example:

- Login Page
- Dashboard
- Vehicle Management
- Search
- MongoDB Collections
- Swagger API

---

# 🧪 Testing

The following functionalities have been manually tested.

| Test | Status |
|------|--------|
| Register User | ✅ |
| Login User | ✅ |
| JWT Authentication | ✅ |
| Add Vehicle | ✅ |
| View Vehicles | ✅ |
| Purchase Vehicle | ✅ |
| Restock Vehicle | ✅ |
| Delete Vehicle | ✅ |
| Search Vehicle | ✅ |

Detailed testing results are available in:

```
TEST_REPORT.md
```

---

# 🤖 My AI Usage

This project was developed with responsible use of AI assistance as permitted by the assessment guidelines.

### AI Tool Used

- ChatGPT (OpenAI)

### How AI Was Used

AI was used to assist with:

- Project architecture planning
- FastAPI project structure
- React application structure
- JWT authentication implementation
- MongoDB integration guidance
- Debugging runtime issues
- API design suggestions
- Code explanation
- Documentation preparation
- README generation

### Manual Contributions

All code was:

- Reviewed manually
- Integrated manually
- Modified where required
- Debugged locally
- Tested before committing

AI-generated suggestions were treated as development assistance rather than copied solutions.

### Reflection

Using AI significantly improved development efficiency by accelerating debugging, generating boilerplate code, and explaining unfamiliar concepts.

Every implementation was manually verified, tested, and adapted to meet the project requirements.

---

# 🚀 Future Improvements

- Improved UI/UX
- Responsive Dashboard
- Pagination
- Image Upload
- Vehicle Categories
- Order History
- User Profile
- Dark Mode
- Unit Tests
- Integration Tests
- Docker Deployment
- CI/CD Pipeline
- Cloud Deployment

---

# 👨‍💻 Author

**Harshit Desai**

M.Tech Computer Engineering

---

# 📄 License

This project is licensed under the MIT License.

---

# 🙏 Acknowledgements

- FastAPI
- React
- MongoDB
- Bootstrap
- OpenAI ChatGPT