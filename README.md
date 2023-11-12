# JWT_project

A project to practice authentication with JWT. In the backend of the application, I used Node.js along with Express, and for the database, I used MongoDB. To test the API, don't forget to start the local server. A tool I recommend is Postman, where you can make your requests in the best possible way!

The main idea behind creating this API was to complement a friend's project, a to-do list. 
I implemented a registration and login system along with JWT authentication to secure the tasks route, preventing non-logged-in users from accessing it. The purpose of registration is to ensure that each user has their own set of tasks, which will be implemented in the future.

Please note: Create a .env file (using the dotenv library in JavaScript) to store your secret key and establish a connection to a database. We use dotenv for environment variables and do not push it to GitHub for security reasons, to avoid sharing sensitive data. Thank you for your understanding!




