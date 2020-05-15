## ANNI Calendar

Anni Calendar is a platform for users [Managers, Human Resources, and the like] to add employee work anniversaries, birthdays, and holidays. This allows users to set up reminders to send recognition of sorts to their employees. 

## How to Use:

Users will first have to create login credentials and then can sign-in into the Anni platform. The users will see a calendar dashboard and they will have the option to add a new employee or update employee's information. Adding a new employee will be specifically for new hires. Updating employee information will allow users to go in and update any information necessary.

## Code Logic: 

* Use server.js to run the code in your terminal via Node.js
* This results in starting up express, the session, and connections to the config file and database.

* In the public folder, several HTML files are housed to serve the pages for the Anni platform. Each HTML has a javascript file to help the HTML interactive. TailwindCSS is used for the styling of the pages. 

* Three routes serve the connection to the back-end of the application from the front-end. The HTML route renders the information displayed on the HTML pages. API routes render the information when a user inserts new data from the form. login routes render the users credentials from when a user creates their login information/or logs in. 

* Models folder house the javascript files and the schema and seeds files where the data is being stored when a user inputs employee information in.

# Technologies Used:
* HTML
* CSS
* TailwindCSS
* Javascript
* Alpine.js
* ESLint
* MySQL
* Sequelize
* Express.js
* Node.js
* Bcrypt.js
* Heroku
* JawsDB