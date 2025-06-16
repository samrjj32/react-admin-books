# React Admin Books Management

A books management application built with React Admin, providing a clean interface for managing books and authors.

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later) or yarn

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/react-admin-books.git
cd react-admin-books
```

### 2. Install Dependencies

Install all the required dependencies by running:

```bash
npm install
# or
yarn install
```

### 4. Run the Application

Start both the JSON server and the React admin application with a single command:

```bash
# This will start both the JSON server and the React-admin app
npm run dev
```

The application will be available at [http://localhost:5173](http://localhost:5173)

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
