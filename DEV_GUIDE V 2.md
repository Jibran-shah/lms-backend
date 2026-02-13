# 🏛️ Hazara University Rebuild - Core Infrastructure

This repository houses the backend engine for the Hazara University website rebuild. 

## 🛠️ Tech Stack & Security
- **Backend**: Node.js & Express
- **Database**: MongoDB (Local Development)
- **Security**: 
  - **BcryptJS**: For industry-standard password hashing.
  - **JWT**: For secure, stateless user sessions.
  - **Middleware**: A custom `protect` guard to secure admin routes.

## 👨‍💻 Developer Handoff (Lead: Muhammad Faheem)

### For Backend Developers (Bilal):
- **Authorization**: Wrap any route that creates/updates data with the `protect` middleware.
- **Example**: `router.post('/add-program', protect, addProgram);`

### For Frontend Developers:
- **Base URL**: `http://localhost:5000/api`
- **Authentication**: All protected requests require a Bearer Token in the header:
  `Authorization: Bearer <your_jwt_token>`

## 🚀 Roadmap
- [x] Server & DB Architecture
- [x] Secure Auth Engine (Login/Register)
- [ ] News & Announcements Module (Current)