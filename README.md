# Contact Management App

A simple backend application for managing contacts, built using **Node.js, Express, and MongoDB**. This API allows users to create, retrieve, update, and delete contacts efficiently.

---

## Table of Contents
- [Setup Instructions](#setup-instructions)
- [API Endpoints](#api-endpoints)
- [Design Considerations](#design-considerations)
- [Common Issues and Solutions](#common-issues-and-solutions)

---

## Setup Instructions

### 1. Clone the Repository
```sh
git clone https://github.com/maniyadhav997/contact-managment-app.git
cd contact-managment-app
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the project root and add:
```sh
MONGODB_URI=your_mongodb_connection_string
PORT=4000
```
Replace `your_mongodb_connection_string` with your MongoDB connection string.

### 4. Start the Server
```sh
npm start
```
Server will be running on `http://localhost:4000`.

---

## API Endpoints

### 1. **Get All Contacts**
```http
GET /contacts
```
#### Response Example:
```json
[
  {
    "_id": "65a1bcd2e8c3f4b5e67891a0",
    "name": "John Doe",
    "email": "john@example.com",
    "phoneNumber": "+1234567890",
    "address": "123 Main St, NY"
  }
]
```

### 2. **Create a Contact**
```http
POST /contacts
```
#### Request Body:
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "phoneNumber": "+9876543210",
  "address": "456 Elm St, CA"
}
```
#### Response Example:
```json
{
  "_id": "65a1bcd2e8c3f4b5e67891a1",
  "name": "Jane Doe",
  "email": "jane@example.com",
  "phoneNumber": "+9876543210",
  "address": "456 Elm St, CA"
}
```

### 3. **Update a Contact**
```http
PUT /contacts/:id
```
#### Request Body:
```json
{
  "name": "Jane Smith",
  "email": "janesmith@example.com",
  "phoneNumber": "+9876543210",
  "address": "789 Pine St, CA"
}
```
#### Response Example:
```json
{
  "_id": "65a1bcd2e8c3f4b5e67891a1",
  "name": "Jane Smith",
  "email": "janesmith@example.com",
  "phoneNumber": "+9876543210",
  "address": "789 Pine St, CA"
}
```

### 4. **Delete a Contact**
```http
DELETE /contacts/:id
```
#### Response Example:
```json
{
  "message": "Contact deleted successfully"
}
```

---

## Design Considerations

1. **RESTful API Structure**
   - The API follows REST principles, ensuring clear separation of concerns and scalability.

2. **MongoDB with Mongoose**
   - Chosen for its flexibility and ease of integration with Node.js.

3. **Validation & Error Handling**
   - Uses `express-validator` to validate input.
   - Provides meaningful error messages.

4. **Security Measures**
   - Uses environment variables for sensitive data.
   - Implements CORS policy to allow frontend integration.

5. **Scalability**
   - Designed with modular architecture for future enhancements like authentication and role-based access control.

---

## Common Issues and Solutions

### **1. MongoDB Case Sensitivity Error**
**Error:**
```
db already exists with different case already have: [contactDB] trying to create [contactdb]
```
**Solution:**
- Ensure the database name in `.env` matches exactly.
- Run:
```sh
use contactDB
db.dropDatabase()
```
- Restart the server.

### **2. CORS Errors**
- Ensure the backend allows CORS:
```js
const cors = require('cors');
app.use(cors({ origin: '*' }));
```

### **3. Environment Variables Not Loaded**
- If `.env` variables are not loading:
```sh
npm install dotenv
```
- Add `require('dotenv').config();` at the top of `index.js`.

---

## Contact
For any issues or suggestions, reach out via email: [yadavmani8543@gmail.com]
