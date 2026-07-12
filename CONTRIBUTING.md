# Contributing

Thank you for your interest in contributing to the Car Dealership Inventory System.

## Getting Started

Clone the repository

```bash
git clone <repository-url>
```

Navigate to the project

```bash
cd Car_Dealership_Inventory_System
```

## Backend

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

uvicorn app.main:app --reload
```

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

## Branch Naming

Please create a new branch before making changes.

Example

```
feature/add-vehicle

bugfix/login

documentation/readme
```

---

## Commit Messages

Examples

```
feat: implement vehicle search

fix: resolve JWT authentication issue

docs: update README
```

---

## Pull Requests

Before creating a Pull Request ensure:

- Code compiles successfully
- Application runs correctly
- Manual testing completed
- Documentation updated if required

---

## Coding Standards

- Follow clean coding practices.
- Use meaningful variable names.
- Keep functions small and reusable.
- Add comments only where necessary.

---

Thank you for contributing.