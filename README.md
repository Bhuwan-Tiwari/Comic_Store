# Comic Store  API

## Overview
This project is a RESTful API built with **Node.js**, **Express.js**, and **Sequelize** (MySQL) for managing a comic book inventory. The API allows you to perform CRUD operations such as adding new comic books, editing existing ones, deleting books from the inventory, and retrieving a list of comic books with features like pagination, sorting, and filtering.

## Features
### Comic Book Management API:
- **Create** a new comic book.
- **Update** the attributes of an existing comic book.
- **Delete** a comic book from the inventory.

### Comic Book List API:
- **Fetch** all available comic books.
- Support for **pagination**.
- **Filtering** based on attributes like author, year, price, and condition.
- **Sorting** by price, year of publication, or alphabetically by name.

### Comic Book Details API:
- **Retrieve** the full details of a specific comic book by ID.

## Tech Stack
- **Node.js** with **Express.js** (Backend Server)
- **Sequelize ORM** (For database modeling and migrations)
- **MySQL** (Database)
- **Postman** (For API testing)

## Getting Started

### Prerequisites
Ensure that you have the following installed on your machine:
- **Node.js** (v14 or above)
- **MySQL** (v5.7 or above)
- **npm** (comes with Node.js)
- **Sequelize CLI** (for running migrations and seeds)

To install Sequelize CLI globally:
```bash
npm install -g sequelize-cli
```

### Project Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Bhuwan-Tiwari/Comic_store
   
   ```

2. **Navigate to the project directory**:
   ```bash
   cd comic-store-api
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Set up environment variables**:
   Create a `.env` file in the root directory and add the following:

   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=comic_store
   DB_DIALECT=mysql
   PORT=3000
   ```

### Database Setup

1. **Create a MySQL database**:
   ```sql
   CREATE DATABASE comic_store;
   ```

2. **Create a Model**  
   To create a new model for the comic book, run the following command:

   ```bash
   npx sequelize-cli model:generate --name Comic --attributes name:string,author:string,yearOfPublication:integer,price:float,discount:float,numberOfPages:integer,condition:string,description:text
   ```

   This command will generate two files:
   - `models/comic.js`: The model definition for the Comic table.
   - `migrations/{timestamp}-create-comic.js`: A migration file to create the comics table with the specified attributes.

3. **Run the Migration**  
   To create the `comics` table in the `comic_store` database, run:
   
   ```bash
   npx sequelize-cli db:migrate
   ```

4. Optionally, seed the database with dummy data:
   ```bash
   npx sequelize-cli db:seed:all
   ```

---

## API Endpoints

### 1. **Create a Comic Book**
   - **Method**: POST
   - **URL**: `/newcomic`
   - **Request Body**:
     ```json
     {
       "name": "Superman: Red Son",
       "author": "Mark Millar",
       "yearOfPublication": 2003,
       "price": 18.5,
       "discount": 3.0,
       "numberOfPages": 160,
       "condition": "new",
       "description": "An alternate universe story where Superman is raised in the Soviet Union."
     }
     ```

### 2. **Edit a Comic Book**
   - **Method**: PUT
   - **URL**: `/comic/:id`
   - **Request Body**:
     ```json
     {
       "price": 19.99,
       "condition": "used",
       "discount": 5
     }
     ```

### 3. **Delete a Comic Book**
   - **Method**: DELETE
   - **URL**: `/comic/:id`

### 4. **Get Comic Book Details**
   - **Method**: GET
   - **URL**: `/comic/:id`

### 5. **Get Comic Book List (with Pagination, Filtering, and Sorting)**
   - **Method**: GET
   - **URL**: `/comics`
   - **Query Parameters**:
     - `page` (default: 1)
     - `limit` (default: 10)
     - `sortBy`: `price`, `yearOfPublication`, or `name`
     - `sortOrder`: `ASC` or `DESC`
     - Filters:
       - `author`
       - `year`
       - `price`
       - `condition`
   
   - **Example Request**:
     ```
     http://localhost:3000/comics?page=1&limit=5&sortBy=price&sortOrder=ASC&author=Mark&year=2003&condition=new
     ```

---

## Project Structure

```bash
comic-store-api/
│
├── config/                   # Database configurations
├── controllers/              # Route handlers (business logic)
│   └── comic-controllers.js   # Controller for comic book operations
│
├── migrations/               # Sequelize migration files
├── middlewares/              # Middleware for request validation
│   └── validateComic.js       # Middleware to validate comic book creation
│
├── models/                   # Sequelize models (Comic.js)
│   └── index.js               # Model loader
│
├── routes/                   # API routes
│   └── comicRoutes.js         # Routes for comic operations
│
├── seeders/                  # Sequelize seed files
├── .env                      # Environment variables file
├── app.js                    # Main entry point for the API
├── README.md                 # This README file
├── package.json              # Project dependencies and scripts
└── ...
```

---

## How to Run the Project

1. **Start the server**:
   ```bash
   npm start
   ```

2. **Access the API**:
   Open Postman or your browser and start sending requests to `http://localhost:3000`.

---

## Testing

- Use **Postman** to test the API endpoints.
- Example collection is provided for testing CRUD, filtering, sorting, and pagination.
