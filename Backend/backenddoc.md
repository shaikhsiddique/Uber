
# Backend API Documentation

## Overview
This document provides detailed information about the backend API endpoints, including their functionality, request and response formats, and implementation details.

---

## Captain Routes

### 1. Register Captain
**Endpoint**:  
**POST** `/register`

**Description**:  
This route allows a new captain to register by providing the necessary details. It creates a new captain in the database and returns a JWT token for authentication.

#### Request Body
| Field       | Type     | Description                              |
|-------------|----------|------------------------------------------|
| `fullname`  | `object` | Full name of the captain (first and last)|
| `email`     | `string` | Captain's email address (must be unique) |
| `password`  | `string` | Captain's password                      |
| `vehicle`   | `object` | Vehicle details (color, plate, capacity, type)|

#### Example Request
```json
{
  "fullname": {"firstname": "John", "lastname": "Doe"},
  "email": "john.doe@example.com",
  "password": "securePassword123",
  "vehicle": {
    "color": "Blue",
    "plate": "XYZ123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

#### Response
**Success (201 Created)**:  
```json
{
  "message": "Captain registered successfully",
  "captain": {
    "_id": "6509305f5e2d9c8162635fa",
    "fullname": {"firstname": "John", "lastname": "Doe"},
    "email": "john.doe@example.com"
  },
  "token": "jwt_token_here"
}
```

**Error Responses**:
- **400 Bad Request**: Validation error or email already registered.
- **500 Internal Server Error**: Server or database-related issues.

---

### 2. Login Captain
**Endpoint**:  
**POST** `/login`

**Description**:  
Allows an existing captain to log in by providing their email and password. Returns a JWT token and captain details upon success.

#### Request Body
```json
{
  "email": "captain@example.com",
  "password": "securepassword"
}
```

#### Response
**Success (200)**:  
```json
{
  "message": "Login successful",
  "captain": {
    "_id": "captain123",
    "fullname": {"firstname": "John", "lastname": "Doe"},
    "email": "captain@example.com"
  },
  "token": "jwt_token_here"
}
```

**Error Responses**:
- **400 Bad Request**: Missing email or password, or invalid credentials.
- **500 Internal Server Error**: Server-related issues.

---

### 3. Get Captain Profile
**Endpoint**:  
**GET** `/profile`

**Description**:  
Fetches the authenticated captain's profile. Requires a valid token for authorization.

#### Response
**Success (200)**:  
```json
{
  "captain": {
    "id": "captain_id",
    "fullname": {"firstname": "John", "lastname": "Doe"},
    "email": "captain@example.com",
    "vehicle": {
      "color": "Blue",
      "plate": "XYZ123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

**Error Responses**:
- **401 Unauthorized**: Missing or invalid token.

---

### 4. Logout Captain
**Endpoint**:  
**GET** `/logout`

**Description**:  
Logs out the captain by blacklisting the provided token and clearing the token cookie.

#### Response
**Success (200)**:  
```json
{
  "message": "Captain logged out successfully"
}
```

**Error Responses**:
- **400 Bad Request**: No token provided.
- **500 Internal Server Error**: Server-related issues.

---

## User Routes

### 1. Register User
**Endpoint**:  
**POST** `/users/register`

**Description**:  
This route allows a new user to register by providing the necessary details. It creates a new user in the database and returns a JWT token for authentication.

#### Request Body
| Field       | Type     | Description                              |
|-------------|----------|------------------------------------------|
| `fullname`  | `string` | Full name of the user                   |
| `email`     | `string` | User's email address (must be unique)    |
| `password`  | `string` | User's password                         |
| `socketId`  | `string` | (Optional) Socket ID for real-time use   |

#### Example Request
```json
{
  "fullname": "John Doe",
  "email": "john.doe@example.com",
  "password": "securePassword123",
  "socketId": "abcd1234"
}
```

#### Response
**Success (201 Created)**:  
```json
{
  "message": "User registered successfully",
  "user": {
    "_id": "6509305f5e2d9c8162635fa",
    "fullname": "John Doe",
    "email": "john.doe@example.com"
  },
  "token": "jwt_token_here"
}
```

**Error Responses**:
- **400 Bad Request**: Validation error or email already registered.
- **500 Internal Server Error**: Server or database-related issues.

---

### 2. Login User
**Endpoint**:  
**POST** `/users/login`

**Description**:  
Allows an existing user to log in by providing their email and password. Returns a JWT token and user details upon success.

#### Request Body
```json
{
  "email": "user@example.com",
  "password": "securepassword"
}
```

#### Response
**Success (200)**:  
```json
{
  "message": "User logged in successfully",
  "user": {
    "_id": "user123",
    "fullname": "John Doe",
    "email": "user@example.com"
  },
  "token": "jwt_token_here"
}
```

**Error Responses**:
- **400 Bad Request**: Missing email or password, or invalid credentials.
- **500 Internal Server Error**: Server-related issues.

---

### 3. Get User Profile
**Endpoint**:  
**GET** `/users/profile`

**Description**:  
Fetches the authenticated user's profile. Requires a valid token for authorization.

#### Response
**Success (200)**:  
```json
{
  "id": "user_id",
  "fullname": "John Doe",
  "email": "john.doe@example.com"
}
```

**Error Responses**:
- **401 Unauthorized**: Missing or invalid token.

---

### 4. Logout User
**Endpoint**:  
**POST** `/users/logout`

**Description**:  
Logs out the user by blacklisting the provided token and clearing the token cookie.

#### Response
**Success (200)**:  
```json
{
  "message": "User logged out successfully"
}
```

**Error Responses**:
- **400 Bad Request**: No token provided.
- **500 Internal Server Error**: Server-related issues.

---

## Middleware

### `authCaptain` and `authUser` Middleware
**Description**:  
Authenticates the user or captain by verifying the token from cookies or the `Authorization` header. If the token is valid, the user/captain is fetched from the database and attached to `req.user` or `req.captain`.

#### Key Flow:
1. Check for the token in cookies or the `Authorization` header.
2. Verify the token.
3. Fetch the user/captain from the database using the decoded token.
4. Attach the user/captain to the request for subsequent route handling.

**Error Responses**:
- **401 Unauthorized**: Missing, invalid, or expired token.
- **500 Internal Server Error**: Issues during verification or database fetch.

---

## Example Usage

**Get Profile Route with Middleware**:  
```javascript
router.get('/users/profile', authUser, getUserProfile);
router.get('/profile', authCaptain, getCaptainProfile);
```
