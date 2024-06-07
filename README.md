# To-Do Application

This is a simple To-Do application built with React for the frontend and Node.js for the backend.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/HirunaD/To-Do-List-Application.git
   ```

2. Navigate to the project directory:

   ```bash
   cd todo-dashboard
   ```

3. Install frontend dependencies:

   ```bash
   cd frontend
   npm install
   ```

4. Install backend dependencies:

   ```bash
   cd ../backend
   npm install
   ```

## Usage

1. Start the frontend development server:

   ```bash
   cd ../frontend
   npm run dev
   ```

   This command will start the frontend development server and open the application in your default web browser. If it doesn't open automatically, you can access the application at `http://localhost:5173` in your browser.

2. Start the backend server:

   ```bash
   cd ../backend
   nodemon server.js
   ```

   This command will start the backend server using Nodemon, which will automatically restart the server when changes are detected in the source files.

## Unit Testing

Unit tests have been written for this application to ensure code quality and functionality. The tests are written using Selenium-webdriver and Mocha.

To run the unit tests, use the following commands:

1. Navigate to the frontend directory and run the tests:

   ```bash
   cd frontend
   npm test
   ```

   This will run the unit tests for the frontend components and generate a test report.
