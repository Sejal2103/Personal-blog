# Getting Started with Create React App

This project was bootstrapped with [Create React App]

About This Project : 
This project is a personal blogging website developed using React. It allows users to create, edit, and delete their blog posts, and includes a minimal landing page too. The entire webite is responsive in nature so that it can be used smoothly on different devices.

Setting Up the Backend :

This project uses json-server as a mock backend to manage blog posts. Follow these steps to set it up:
1. Install json-server globally (if not already installed) : npm install -g json-server (run in bash)
2. Start json-server with your db.json file (db.json is in data folder) :
   json-server --watch data/db.json --port 5000 or
   cd data, json-server --watch data/db.json --port 5000
This command starts json-server on port 5000. You can change the port number according to your preference.

Axios and JSON-Server
Axios is used in this project to fetch and interact with data from the json-server. The base URL for Axios requests is set to http://localhost:5000, which you can modify in your project's configuration if needed.

### `npm start`

Running the React App :
After setting up the backend, you can run the React app : npm start

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
You may also see any lint errors in the console.




