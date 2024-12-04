
# Backend API Documentation

## Overview
This document provides detailed information about the backend API endpoints, including their functionality, request and response formats, and implementation details.

### Current Endpoints
#### 1. `registerUser` Function
Handles user registration by validating input data, hashing passwords, creating a new user in the database, and generating a JWT token for authentication.

**More endpoints will be added as the backend expands.**

## `registerUser` Endpoint
**POST** `/api/register`

### Request Body
| Field       | Type     | Description                              |
|-------------|----------|------------------------------------------|
| `fullname`  | `string` | Full name of the user                   |
| `email`     | `string` | User's email address (must be unique)    |
| `password`  | `string` | User's password                         |
| `socketId`  | `string` | (Optional) Socket ID for real-time use   |

### Example Request
```json
{
  "fullname": "John Doe",
  "email": "john.doe@example.com",
  "password": "securePassword123",
  "socketId": "abcd1234"
}
```

### Response
#### Success (201 Created)
```json
{
  "message": "User registered successfully",
  "user": {
    "_id": "6509305f5e2d9c8162635fa",
    "fullname": "John Doe",
    "email": "john.doe@example.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### Error Responses
- **400 Bad Request**: Input validation error or email already registered
```json
{
  "message": "Validation error message"
}
```
```json
{
  "message": "Email is already registered"
}
```
- **500 Internal Server Error**: Server or database-related issues

... (Other details from the original documentation follow) ...
