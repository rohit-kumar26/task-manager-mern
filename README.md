# Task Manager MERN Application

This project is a simple Task Manager application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to manage tasks, including creating, reading, updating, and deleting tasks.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js**: Download and install from [Node.js Official Website](https://nodejs.org/).
- **MongoDB**: Download and install from [MongoDB Official Website](https://www.mongodb.com/try/download/community).

## Getting Started

Follow these instructions to set up and run the application locally.

### 1. Clone the Repository

```bash
git clone https://github.com/rohit-kumar26/task-manager-mern.git
cd task-manager-mern
```

### 2. Install Dependencies

#### Backend

Navigate to the `backend` folder and install the required dependencies:

```bash
cd backend
npm install
```

#### Frontend

Navigate to the `frontend` folder and install the required dependencies:

```bash
cd ../frontend
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the `backend` folder and add the following environment variables:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```
Replace `your_mongodb_connection_string` with your actual MongoDB connection URI.

### 4. Run the Application

#### Backend

Navigate to the `backend` folder and start the backend server:

```bash
cd backend
npm run dev
```

#### Frontend

Navigate to the `frontend` folder and start the frontend development server:

```bash
cd ../frontend
npm start
```

### 5. Access the Application

Once both the backend and frontend servers are running, open your browser and navigate to:

```
http://localhost:3000
```

## Folder Structure

```
.
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── .env
│   ├── index.js
│   └── package.json
├── frontend
│   ├── public
│   ├── src
│   ├── .env
│   ├── package.json
│   └── README.md
└── README.md
```

## Features

- Add multiple tasks.
- View all tasks.
- Edit a task.
- Delete a task.

## Troubleshooting

- Ensure MongoDB is running locally or remotely and that the connection string in `.env` is correct.
- Use `npm install` in both the `backend` and `frontend` directories to resolve missing dependencies.
