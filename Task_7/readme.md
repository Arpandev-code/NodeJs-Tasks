### Task 7 Node.js Application Documentation

#### Overview
Task 7 is a Node.js web application utilizing the [Express framework] and [Sequelize ORM] to manage user and brand data. The application features user authentication and CRUD operations on users and brands, structured according to the [MVC] (Model-View-Controller) design pattern.

#### System Requirements
- [Node.js] (v10 or above)
- [MySQL Database]
- [NPM] (Node Package Manager)

#### Dependencies
- **express**: Web framework for Node.js.
- **sequelize**: ORM for Node.js supporting various SQL dialects.
- **ejs**: Templating engine to generate HTML markup with plain JavaScript.
- **bcrypt**: Library to help hash passwords.
- **express-session**: Middleware to handle sessions.
- **mysql2**: MySQL client for Node.js.
- **nodemon**: Utility that monitors for any changes in the source and automatically restarts the server.

#### Project Structure
```
NodeJsTasks/
│
├── config/
│   └── database.js        # Database configuration and connection
│
├── controllers/
│   ├── authController.js  # Authentication related logic
│   └── userController.js  # User management logic
│
├── models/
│   ├── user.js            # User model definition
│   └── brand.js           # Brand model definition
│
├── public/
│   └── css/
│       └── styles.css     # Stylesheet for the application
│
├── routes/
│   ├── authRoutes.js      # Routes for authentication
│   └── userRoutes.js      # Routes for user management
│
├── views/
│   ├── login.ejs          # Login page template
│   ├── register.ejs       # Registration page template
│   ├── users.ejs          # User listing template
│   └── editUser.ejs       # User edit template
│
├── server.js              # Entry point of the application
└── package.json           # NPM dependencies and scripts
```

#### Key Components

##### Configurations
- **database.js**: Configures and connects to the MySQL database using Sequelize.

##### Models
- **User**: Defines the schema for the users table.
- **Brand**: Defines the schema for the brands table.

##### Controllers
- **authController**: Handles authentication tasks such as login and registration.
- **userController**: Manages CRUD operations for users.

##### Routes
- **authRoutes**: Defines routes for authentication processes.
- **userRoutes**: Defines routes for managing users.

##### Views
- Utilizes EJS templates to render the UI components based on the data passed from the controllers.

#### Setup and Running
1. **Installation**: Run `npm install` to install all dependencies.
2. **Database Setup**: Configure MySQL database settings in `config/database.js`.
3. **Starting the Server**:
   - Development mode: `npm run start` which uses nodemon for hot reload.
   - Production mode: Directly run `node server.js`.

#### Usage
- The application supports basic user authentication (login/register).
- Authenticated users can perform CRUD operations on the user data.
- Users can be associated with brands, and these relationships are managed through the application.

#### Security Features
- Passwords are hashed using bcrypt before storing in the database.
- Sessions are managed through express-session to keep track of user authentication status.

#### Future Enhancements
- Implement more robust error handling and user input validation.
- Extend the brand management features.
- Add more interactive UI elements and improve the front-end design.
- Implement additional security features like CSRF protection and rate limiting.

This documentation provides a comprehensive overview of the Task 7 Node.js application, detailing its structure, setup, and functionality.
        