const gifs = require("./gifs.json"); // requires and runs `gifs.json` and store the data to a variable
const express = require("express"); // requires and runs the express package and set it to a variable
const path = require("path"); // requires the path module, and sets it to a variable

const pathToDistFolder = path.join(__dirname, "../vite-project/dist"); // creates a reference to an absolute path from the current path with the dist folder in the vite-project

const app = express(); // starts the express application by calling it and storing it as `app`.

const logRoutes = (req, res, next) => {
	// middleware to log the time
	const time = new Date().toLocaleString(); // creates a variable to store the current time, uses `toLocaleString()` to make it a string and a readable format
	console.log(`${req.method}: ${req.originalUrl} - ${time}`); // console.log the statement
	next(); // passes to next middleware or controller function
};

const serveStatic = express.static(pathToDistFolder); // uses Express's static middleware to serve static files from the `pathToDistFolder`. `express.static` makes the static files in the vite-project available to the client's browser.

const serveData = (req, res, next) => res.send(gifs); // controller
const serveHello = (req, res, next) => {
	// controller
	const name = req.query.name || "stranger"; // if name is not provided in the request, set to "stranger"
	res.send(`hello ${name}`); // response sent out
};

app.use(logRoutes); // makes `logRoutes` a middleware function for all requests, logging the method, URL, and time
app.use(serveStatic); // makes `serveStatic` a middleware function, that serves the static files from the `dist` folder in the vite-project, in this case index.html in the dist folder.

app.get("/api/hello", serveHello); // GET route for `/api/hello` endpoint and runs the `serveHello` controller
app.get("/api/data", serveData); // GET route for `api/data` endpoint and runs the `serveData` controller

const port = 8000; // sets the port
app.listen(port, () => {
	// listens on the port, and logs message when the server is running.
	console.log(`Server is now running on http:..localhost:${port}`);
});
