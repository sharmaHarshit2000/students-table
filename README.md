# Students Table Project

This project is a simple Students Table application built with React. It was created as part of a technical assignment to demonstrate basic CRUD functionality on the frontend. The application allows users to add, edit, and delete student records directly in the browser.

The project also includes an optional backend built with NestJS and PostgreSQL. However, the frontend works completely on its own and stores data using the browser's local storage.

---

## Live Demo

Frontend (Deployed):
https://students-table-psi.vercel.app

Backend API (Optional):
https://students-table.onrender.com

GitHub Repository:
https://github.com/sharmaHarshit2000/students-table

---

## Features

The application includes the following functionality:

- Display a list of students in a table
- Add a new student with form validation
- Edit existing student information
- Delete a student with a confirmation prompt
- Basic loading state simulation
- Download the student list as an Excel file
- Data persistence using localStorage

Each student record includes:
- Name
- Email
- Age

All fields are required and the email field must follow a valid email format.

---

## Tech Stack

Frontend:
- React
- Vite
- Tailwind CSS

Backend (Optional Bonus):
- NestJS
- PostgreSQL

---

## Project Structure

students-table
│
├── frontend   → React application
└── backend    → NestJS backend (optional)

---

## Running the Project Locally

### 1. Frontend

The frontend works independently and does not require the backend.

Steps:

1. Navigate to the frontend folder
2. Install dependencies
3. Start the development server

Commands:

cd frontend
npm install
npm run dev

After running the command, open the local development URL shown in the terminal.

---

### 2. Backend (Optional)

If you want to run the backend with PostgreSQL:

1. Navigate to the backend folder
2. Install dependencies
3. Add a `.env` file with your PostgreSQL connection string
4. Start the server

Commands:

cd backend
npm install
npm run start:dev

---

## Notes

The assignment requirement was to build a fully working frontend application. The backend was implemented as an additional feature for learning and experimentation.

The frontend automatically stores and retrieves student data from the browser's localStorage so it continues to work even if the backend is not running.

---

## Author

Harshit Sharma
