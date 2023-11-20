# Inventory Tracker App

The Inventory Tracker App is a full-stack application designed to help businesses manage their inventory efficiently. The application includes a React-based frontend for users to interact with the system, and a Flask-based backend to handle data storage and retrieval.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: The app provides a secure user authentication system for managing access to the inventory.

- **Product Management**: Users can view a list of products, add new products, edit existing ones, and delete products.

- **Customer Management**: The application allows users to view a list of customers, add new customers, and view customer details.

- **Review Management**: Users can view and update product reviews.

## Technologies Used

- **Frontend**: React is used to build the user interface, providing an interactive and responsive experience.

- **Backend**: Flask, a micro web framework for Python, is used to handle server-side logic and communicate with the database.

- **Database**: SQLAlchemy is employed for database management, and SQLite is used as the relational database.

- **Styling**: Tailwind CSS is used for styling to create a clean and modern user interface.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/damoxify/inventory-tracker-app.git
   ```

2. Navigate to the project folder:

   ```bash
   cd inventory-tracker-app
   ```

3. Install dependencies for both frontend and backend:

   ```bash
   # Frontend (React)
   cd frontend
   npm install

   # Backend (Flask)
   cd ../backend
   pip install 
   ```

## Usage

1. Start the Flask backend server:

   ```bash
   # Inside the backend folder
   flask run
   ```

2. Start the React frontend server:

   ```bash
   # Inside the frontend folder
   npm start
   ```

3. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to access the Inventory Tracker App.

## Folder Structure

The project has the following folder structure:

- **server**: Contains the Flask backend code, database models, and routes.
- **client**: Contains the React frontend code, components, and styles.

## Contributing

If you'd like to contribute to the project, please follow the [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).