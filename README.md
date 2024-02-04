# Express Starter Kit

## Overview
This is a simple demo backend for use as a starting point when initializing a backend project. It includes essential dependencies and configurations to kickstart your development process.

## Features
- Express.js server
- Nodemon for development hot-reloading
- Middleware support with body-parser, cors, and dotenv
- Authentication with JSON Web Tokens (jsonwebtoken)
- Password hashing with bcrypt
- Database connectivity with mysql2
- Data validation with Joi and Joi Date
- CSV parsing with csv-parser
- File uploading with multer
- Date manipulation with Moment.js

## Getting Started
1. Clone this repository to your local machine.
2. Install dependencies using `npm install`.
3. Set up your environment variables by creating a `.env` file and filling in the necessary values.
4. Create an `uploads` folder in the root directory for storing public files.
5. Run the development server using `npm run dev`.

## Project Structure
- `server.js`: Main entry point for the server.
- `configs/`: Configuration files for database, authentication, etc.
- `controllers/`: Logic for handling different routes.
- `middleware/`: Custom middleware functions.
- `routes/`: API routes organized by resource or functionality.
- `uploads/`: Public folder for storing uploaded files.
- `validation/`: Validation schemas and functions.

## Configuration
- Adjust the `.env` file for environment-specific configurations.
- Customize the routes, controllers, and middleware based on your project requirements.
- Configure the `configs` folder for specific settings.

## Dependencies
- Express.js: Web application framework
- Nodemon: Development server with auto-reloading
- Body-parser: Middleware for parsing request bodies
- Cors: Middleware for enabling Cross-Origin Resource Sharing
- Dotenv: Load environment variables from a .env file
- Jsonwebtoken: Authentication and authorization with JSON Web Tokens
- Bcrypt: Password hashing for enhanced security
- Joi: Schema validation library
- @joi/date: Joi extension for validating dates
- Moment.js: Library for date and time manipulation
- Multer: Middleware for handling file uploads
- Mysql2: MySQL database connectivity
- Csv-parser: CSV parsing library

## Author
[Almas](https://www.linkedin.com/in/khalmas38/)
