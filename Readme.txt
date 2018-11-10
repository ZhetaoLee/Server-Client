# Project Documentation

## Project setup
### Since we are using Node.js, make sure Node has already installed on your computer

### Steps:
### 1. Create a folder
### 2. To create a json file, use command: npm init -y
### 3. To install express, use command: npm install express --save
### 4. We use nodemon for looking changes on server-side and nodemon restarts the server for us, 
to install nodemon, use command: npm install nodemon --save-dev

### 5. To install socket.io, use command: npm install socket.io --save

### 6. To use command "npm start" and "npm test", change contexts in "scripts" field in package.json to:
"scripts": {
    "start": "node index.js",
    "test": "node test.js"
},

### 7. Copy index.js, test.js, data.json, and public folder into your directory

## Done!

## Usage instructions

### To start the server, use command: npm start
### To run the test suite, use command: npm test
### To send messages from clients, open browser and type: http://localhost:4000/