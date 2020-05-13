# ANNI Calendar

Anni Calender is a platform for users [Managers, Human Resources, and the like] to add employee work anniversaries, birthdays, and holidays. This allows users to set up reminders to send a recognition of sorts to their employees. 

# How to Use

Users will first have to create login creditinals and then can sign-in into the Anni platform. The users will see a calendar dashboard and they will have the option to add a new employee or update employee's information. Adding a new employee will be specfically for new hires. Updating employee information will allow users to go in and update any information necessary. 

# Technologies Used
* HTML
* TailwindCSS
* BulmaCSS
* Javascript
* Alpine.js
* ESLint
* mySQL
* Sequelize
* Express.js
* Node.js
* bcrypt.js

# Code Logic 

* Use server.js to run the code in your terminal via Node.js
    * this results in starting up express, the session, and connections to the config file and database

* In the public folder, several HTML files are housed to serve the pages for the Anni platform. Each HTML has an javascript file to help the HTML interactive. BulmaCSS and TailwindCSS are used for the styling of the pages. 

* Three routes serve the connection to the back-end of the application from the front-end. htmlRoutes renders the information displayed on the HTML pages. apiRoutes renders the information when a user inserts new data from the form. loginRoutes renders the users creditials from when a user creates their login information/or logs in. 

* Models folder house the javascript files and the schema and seeds files where the data is being stored when a user inputs employee information in.
