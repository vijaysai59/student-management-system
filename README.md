# student-management-system
1️⃣ Project Setup

First, the project environment is prepared by installing the required software such as:

Node.js

MongoDB

Visual Studio Code

After installing the tools, the project folder is created and dependencies are installed using npm.

2️⃣ Server Initialization

The backend server is created using Node.js and Express framework.

The main server file (server.js) performs the following tasks:

Initializes the Express application

Connects to the MongoDB database

Enables middleware like JSON parsing and CORS

Loads API routes

3️⃣ Database Connection

The system connects to the database using Mongoose, which is a library used to interact with MongoDB.

A connection file (db.js) is created to establish the connection between the server and the database.

When the server starts, the database connection is established automatically.

4️⃣ Data Models Creation

Models define the structure of the data stored in the database.

Two main models are created:

User Model

username

password

Student Model

name

email

course

age

These models create collections inside MongoDB.

5️⃣ Authentication System

To secure the application, a login system is implemented.

The process includes:

User Registration

Password encryption using bcrypt

User Login verification

Token generation using JWT

Only authenticated users can access the student database.

6️⃣ API Routes Implementation

Routes are created to handle different operations.

Student routes perform CRUD operations:

Add Student

View Student

Update Student

Delete Student

These routes interact with the database through the models.

7️⃣ Middleware Security

Authentication middleware is added to protect the student routes.

The middleware checks:

Whether the user token is valid

Whether the user is authenticated

If the token is valid, the request proceeds to the next function.

8️⃣ Running the Application

The application server is started using:

node server.js

Once the server runs successfully, it listens on a specific port (for example, 5000).

9️⃣ API Testing

The APIs are tested using tools such as:

Postman

Thunder Client

Using these tools, requests are sent to test registration, login, and student management operations.

Final Workflow of the System

1️⃣ User registers in the system
2️⃣ User logs in with username and password
3️⃣ System generates an authentication token
4️⃣ User accesses student management APIs
5️⃣ Student data is stored and retrieved from MongoDB
6️⃣ Admin can perform CRUD operations on student records
