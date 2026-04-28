# Basic MERN 01 Product Store

A simple full-stack e-commerce product management application built with the MERN stack (MongoDB, Express, React, Node.js).

---

## 🌗 Features Overview

- **Light Theme & Dark Theme:** Instantly switch between light and dark modes for a comfortable viewing experience.
- **Database:** Uses MongoDB for storing product data, supporting both local and cloud (MongoDB Atlas) setups.

### Screenshots

| Light Theme | Dark Theme | Database |
|-------------|------------|----------|
| ![Light Theme](Frontend/public/screenshots/light-theme.png) | ![Dark Theme](Frontend/public/screenshots/dark-theme.png) | ![Database](Frontend/public/screenshots/database.png) |

> Place your screenshots in the `Frontend/public/screenshots/` folder with the above file names for them to appear on the GitHub repository front page.

---

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - Database (with Mongoose ODM)
- **dotenv** - Environment variables

### Frontend
- **React** - UI library
- **Vite** - Build tool
- **Chakra UI** - Component library
- **Zustand** - State management
- **React Router** - Routing

## 📁 Project Structure

```
Basic_MERN_01_Product_Store/
├── Backend/
│   ├── config/
│   │   └── db.js           # Database connection
│   ├── controllers/
│   │   └── product.controller.js
│   ├── models/
│   │   └── product.model.js
│   ├── routes/
│   │   └── product.route.js
│   └── server.js           # Entry point
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   └── ProductCard.jsx
│   │   ├── pages/
│   │   │   ├── CreatePage.jsx
│   │   │   └── HomePage.jsx
│   │   ├── store/
│   │   │   └── product.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js installed
- MongoDB installed (or use MongoDB Atlas)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/tn-deshappriya/Basic_MERN_01_Product_Store.git
   cd Basic_MERN_01_Product_Store
   ```

2. **Install backend dependencies**
   ```bash
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd Frontend
   npm install
   ```

4. **Configure environment variables**

   Create a `.env` file in the Backend directory:
   ```env
   PORT=3001
   MONGO_URI=mongodb://localhost:27017/product-store
   ```

### Running the Application

1. **Start the backend server**
   ```bash
   # From root directory
   npm run dev
   ```
   Server runs on `http://localhost:3001`

2. **Start the frontend**
   ```bash
   # From Frontend directory
   cd Frontend
   npm run dev
   ```
   Frontend runs on `http://localhost:5173`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| POST | `/api/products` | Create a new product |
| PUT | `/api/products/:id` | Update a product |
| DELETE | `/api/products/:id` | Delete a product |

## 📝 Product Schema

| Field | Type | Required |
|-------|------|----------|
| name | String | Yes |
| price | Number | Yes |
| image | String | Yes |
| createdAt | Date | Auto |
| updatedAt | Date | Auto |

## 🎨 Features

- View all products on the home page
- Create new products with name, price, and image URL
- Edit existing products
- Delete products
- Responsive UI with Chakra UI

## 📄 License

ISC