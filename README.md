# Blog App Backend

This repository contains the backend of a blog application, built using **Node.js**, **Express.js**, and **MongoDB**. It provides REST APIs to manage blog posts, users.

## Features
- **User Authentication**: Register and log in securely.
- **Blog Management**: Create, read, update, and delete blog posts.
- **Middleware**: For validation and error handling.

## How to Use
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/vaishnaviparabkar90/blog-app-backend.git
   cd blog-app-backend

## 2.**Install Dependencies**:
 ```bash
npm install bcryptjs body-parser cors dotenv express jsonwebtoken mongoose
```

## 3.**Set Up Environment Variables: Create a .env file with the following:**
```bash
MONGO_URI=your_mongodb_connection_string
PORT=your_desired_port
JWT_SECRET=your_jwt_secret
```
## 4.**Run the Application**:

```bash
npm start
```
## 5.**API Endpoints**:
```bash
User: /api/users
Posts: /api/posts
Comments: /api/comments
Use tools like Postman or cURL to interact with the APIs.
```
## 6.**Tech Stack**

Node.js
Express.js
MongoDB (Atlas)


Feel free to fork and contribute to the project. Pull requests are welcome!

For any questions, open an issue or contact me at [parabkarvaishnavi@gmail.com].