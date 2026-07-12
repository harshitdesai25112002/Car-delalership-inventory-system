# Test Report

## Project

**Car Dealership Inventory System**

---

# Testing Summary

The project was tested manually using:

- FastAPI Swagger UI
- React Frontend
- MongoDB Compass
- Google Chrome

---

# Environment

| Component | Version |
|----------|----------|
| Python | 3.12 |
| FastAPI | Latest |
| React | 19 |
| Vite | Latest |
| MongoDB | 8.2 |
| Bootstrap | 5 |
| Operating System | Windows 11 |

---

# Backend Testing

## User Registration

### Objective

Verify that a new user can register successfully.

### Test Data

```
Name:
John Doe

Email:
john@test.com

Password:
Password123
```

### Expected Result

- User created successfully
- Password stored in hashed format
- User document inserted into MongoDB

### Result

✅ Passed

---

## Duplicate Registration

### Expected

System should reject duplicate email addresses.

### Result

✅ Passed

---

## User Login

### Objective

Verify JWT token generation.

### Expected

- Login successful
- JWT generated
- Token returned

### Result

✅ Passed

---

## Invalid Login

### Expected

Invalid credentials should return an error.

### Result

✅ Passed

---

## JWT Authentication

### Objective

Verify protected endpoints.

### Expected

- Access with valid token
- Reject invalid or missing token

### Result

✅ Passed

---

# Vehicle Module

## Add Vehicle

### Expected

Vehicle should be stored in MongoDB.

### Result

✅ Passed

---

## View Vehicles

### Expected

Display all available vehicles.

### Result

✅ Passed

---

## Update Vehicle

### Expected

Vehicle details updated successfully.

### Result

✅ Passed

---

## Delete Vehicle

### Expected

Admin user can delete vehicles.

### Result

✅ Passed

---

## Search Vehicle

### Search Criteria Tested

- Make
- Model
- Category
- Price Range

### Result

✅ Passed

---

## Purchase Vehicle

### Expected

Quantity decreases after purchase.

### Result

✅ Passed

---

## Restock Vehicle

### Expected

Quantity increases after restocking.

### Result

✅ Passed

---

# Frontend Testing

## Login Page

| Test | Status |
|------|--------|
| Page Loads | ✅ |
| Email Validation | ✅ |
| Password Validation | ✅ |
| Login API Integration | ✅ |
| JWT Storage | ✅ |

---

## Dashboard

| Test | Status |
|------|--------|
| Dashboard Loads | ✅ |
| Navbar | ✅ |
| Logout | ✅ |

---

## Vehicle Management

| Test | Status |
|------|--------|
| Add Vehicle | ✅ |
| Display Vehicles | ✅ |
| Purchase | ✅ |
| Restock | ✅ |
| Delete | ✅ |

---

# Database Testing

Verified using MongoDB Compass.

Collections

```
users

vehicles
```

Checks Performed

- User inserted successfully
- Password stored as bcrypt hash
- Vehicles inserted successfully
- Quantity updated correctly
- Deleted records removed successfully

Result

✅ Passed

---

# API Testing

The REST API was tested using:

- FastAPI Swagger UI
- React Frontend

Verified

- Request Validation
- JWT Authentication
- Response Codes
- MongoDB Operations

Result

✅ Passed

---

# Security Testing

| Test | Status |
|------|--------|
| Password Hashing | ✅ |
| JWT Authentication | ✅ |
| Protected Routes | ✅ |
| Admin Authorization | ✅ |

---

# Known Limitations

The following improvements are planned:

- Unit Testing
- Integration Testing
- Automated API Testing
- End-to-End Frontend Testing
- Performance Testing
- Dockerized Test Environment

---

# Overall Result

| Module | Status |
|--------|--------|
| Authentication | ✅ Passed |
| Authorization | ✅ Passed |
| Vehicle CRUD | ✅ Passed |
| Search | ✅ Passed |
| Purchase | ✅ Passed |
| Restock | ✅ Passed |
| MongoDB Integration | ✅ Passed |
| React Integration | ✅ Passed |

---

# Final Outcome

The application successfully satisfies the functional requirements of the assessment by providing:

- User Authentication
- JWT Authorization
- Vehicle Inventory Management
- Inventory Purchase and Restocking
- MongoDB Persistence
- React Frontend Integration
- Secure API Communication

**Overall Project Status**

# ✅ PASS