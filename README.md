# 📚 React Admin Books Management

A clean and simple Book & Author Management Dashboard built using **[React Admin](https://marmelab.com/react-admin/)**, backed by a local **JSON Server**. Perfect for demoing admin dashboards with RESTful APIs.

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-4.x-blue?logo=typescript)
![License](https://img.shields.io/badge/license-MIT-green)

---

## 🚀 Features

- Manage books and authors from a responsive admin panel
- JSON Server backend with mock data
- Filtering, pagination, and sorting
- Edit, delete, and add resources
- Built with `React Admin`, `Material UI`, `TypeScript`, and `Vite`

---

## ✅ Prerequisites

- [Node.js](https://nodejs.org/) (v14 or newer)
- npm (v6+) or yarn

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/samrjj32/react-admin-books.git
cd react-admin-books


### 4. Run the Application

The project uses concurrently to run both the React Admin frontend and the JSON Server together.

command:

```bash
# This will start both the JSON server and the React-admin app
npm run dev
```

The application will be available at [http://localhost:5173](http://localhost:5173) 
and Json-server at [http://localhost:3001](http://localhost:3001)

## Project Structure

- `/src` - Source code
  - `/authors` - Author-related components
  - `/books` - Book-related components
  - `/components` - Common components
  - `App.tsx` - Main application component
  - `main.tsx` - Application entry point
- `/public` - Static assets
- `books.json` - Mock data for the JSON server

## Data Provider

The application uses [ra-data-simple-rest] as the data provider, which works with REST APIs using simple GET parameters for filters and sorting.

```

```
