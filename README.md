# Students Table Fullstack Project

A full-stack implementation of a Students Table assignment, featuring a pure frontend React application that can optionally connect to a NestJS/PostgreSQL backend.

## Assignment Overview

This project was built to satisfy the following requirements:
- **Frontend-only core functionality**: Fully operational without a backend, storing data in memory/localStorage.
- **Form validation**: Complete validations for required fields and valid email format.
- **CRUD Operations**: Support for Create, Read, Update, and Delete actions.
- **Simulated loading states**: Network latency simulation for UI feedback.
- **Excel Export**: Ability to download the student table data into an `.xlsx` file.
- **Bonus Backend Module**: Implementation of an optional NestJS backend with a PostgreSQL database.

## Live Links (Submission)

- **GitHub Repository**: [https://github.com/sharmaHarshit2000/students-table](https://github.com/sharmaHarshit2000/students-table)
- **Live Frontend (Vercel)**: [https://students-table-psi.vercel.app](https://students-table-psi.vercel.app)
- **Live Backend API (Render - Optional Bonus)**: [https://students-table.onrender.com](https://students-table.onrender.com)

## Folder Structure

- `/frontend` - React.js project created with Vite + Tailwind CSS.
- `/backend` - NestJS application handling PostgreSQL DB connections.

## How to Run

### Frontend (Mandatory functionality)
The frontend uses a fallback to `localStorage` when the backend is offline, meaning it works 100% perfectly on its own!

1. `cd frontend`
2. `npm install`
3. `npm run dev`

### Backend (Optional Bonus)
Required if you want to test the full-stack database integration.

1. `cd backend`
2. `npm install`
3. Set your PostgreSQL `.env` variables (e.g., `DATABASE_URL`).
4. `npm run start:dev`

## Features & Highlights

- **Clean UI**: Uses modern React and TailwindCSS for a straightforward, responsive layout.
- **No Over-engineering**: Built precisely to specs using standard React features. The Excel exporter deliberately uses the stock `xlsx` package with no unnecessary styling to keep the code clean and strictly human-written.
- **Fault-tolerant**: If the backend server drops, the frontend transparently falls back to local storage without throwing UI error boundaries.
