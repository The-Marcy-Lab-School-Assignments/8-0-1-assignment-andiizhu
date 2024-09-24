# Build a Static Web Server Using Express!

In this assignment, you will be tasked with creating and deploying a simple Express server. The server will have four GET endpoints, two that serve HTML and two that serve raw data. One of those data endpoints will use query parameters.

**Table of Contents**

- [Short Responses](#short-responses)
- [Starter Code](#starter-code)
- [Grading](#grading)
- [Part 1 — Setup](#part-1--setup)
- [Part 2 — Write the Middleware](#part-2--write-the-middleware)
- [Part 3 — Deploy](#part-3--deploy)
- [Bonus Challenge:](#bonus-challenge)

## Short Responses

Do them first!!

## Starter Code

You will be given a blank repo for this one! You are building a server from scratch and will go through all the steps to set up a new Express project.

## Grading

Your grade on this assignment will be determined by the number of tasks you are able to complete. Tasks appear as a checkbox, like this:

- [ ] example of an incomplete task
- [x] example of an completed task

Feel free to mark these tasks as complete/incomplete, however your instructor will likely modify your tasks when grading.

This assignment has 12 tasks:

- 5 setup tasks
- 6 server application tasks
- 1 deployment task

**Setup Technical Requirements**

Before continuing, make sure that these tasks are completed!

- [x] Has a Vite+React project folder with a built `dist/` folder
- [x] The vite project `.gitignore` file does NOT include `dist`
- [x] Has a `server` folder with an `index.js` file and a `package.json` file inside
- [x] `package.json` has `express` installed as a dependency and `nodemon` as a dev dependency
- [x] `package.json` has a `"dev"` script that uses `nodemon` and a `"start"` script that uses `node`

**Server Application Technical Requirements**

- [x] In `index.js`, the `express()` function is used to create an `app`
- [x] The `path` module is imported
- [x] The `__dirname` variable is used to generate an absolute path to the `dist/` folder of your React application
- [x] The `express.static()` middleware serves the static assets in the React application's `dist/` folder.
- [x] A middleware controller prints the request method, url, and time of request for every request sent to the server, and then invokes the `next()` middleware in the chain.
- [x] The `app` listens on an available port (I recommend `8080`)

**Deployment Technical Requirements**

- [x] Your GitHub page has a link to the deployed server in the About section.
      Deployment Link: https://eight-0-1-assignment-andiizhu.onrender.com

## Part 1 — Setup

**Create a Vite+React Project**

- In the root of your repo, run the command `npm create vite@latest` and create a React application.
- Keep the provided counter application. (You can change it up later though).
- Run `npm run build` to generate the `dist` folder. This is going to be the folder containing the static assets (HTML, CSS, and JS files) that your server will serve.
- ‼️ Edit the `.gitignore` file that comes with your Vite project and remove `dist`. This will allow you to push your `dist` folder to the repo.

**Create your server files:**

- Back in the root of your repo, create a `server` folder and `cd` into it.
- Run `npm init -Y` to create a `package.json` file.
- Create an `index.js` file in the `server` folder.

**Configure package.json**

- Run `npm i express` to install express
- Run `npm i -D nodemon` to install Nodemon as a dev dependency
- Modify the `package.json` file with the following `"scripts"`:

```json
"scripts": {
  "dev": "nodemon index.js",
  "start": "node index.js"
},
```

While working on your server, use `npm run dev` to run the server and have it restart whenever you make changes.

When deploying, you will use the `npm start` command to start the server using the normal `node` command.

## Part 2 — Write the Middleware

Now that you have a built React project in the `dist/` folder, we want to build a server that can serve those static assets.

In `server/index.js`, write a server application using Express with the `logRoutes` middleware and the `serveStatic` middleware. Use the [lecture notes](https://github.com/The-Marcy-Lab-School/8-0-1-express-middleware) to guide you!

When you visit the index of your server (http://localhost:8080, or whatever port number you chose), you should get the built React app back as a response.

Any time that you send a request to the server, the request method, url, and time of request should be printed in the server's terminal.

## Part 3 — Deploy

When you're done, push your code to github and [follow these steps to deploy using Render](https://github.com/The-Marcy-Lab-School/render-deployment-instructions). Then, add the deployed link to your GitHub About section. Click on the gear icon to set the Website url (see below)

![](./images/deployed-github.png)

## Bonus Challenge:

Find your first React assignment (the Language Greeter App) and copy it into this assignment. Run `npm run build` to generate the `dist` folder and update your server to serve your app instead of the default counter app.
