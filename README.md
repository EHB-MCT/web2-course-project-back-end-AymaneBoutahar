[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=21640145)
# Ragna ✨
This is the back-end for the ragna coaching plaform. It makes use of CRUD functionality to manage coaches using a database on MongoDB

Hosted Back-end URL: https://web2-course-project-back-end-87lu.onrender.com/

## Up & running
This Api is built with Node, Express and MongoDB.

## Sources 🗃️
- https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
Used to update dynamic text content in HTML elements (e.g. login and form feedback messages).

- https://www.mongodb.com/docs/drivers/node/v6.11/usage-examples/insertOne/
Used to insert new user and coach documents into the MongoDB collections.

- https://www.mongodb.com/docs/manual/reference/method/db.collection.findOne/
Used to check whether a user already exists during login and registration.

- https://www.mongodb.com/docs/drivers/node/current/crud/delete/
Used to delete a coach document from the MongoDB collection via the DELETE endpoint.

- https://www.mongodb.com/docs/manual/reference/method/db.collection.updateOne/
Used to update coach data (price, intro, facts) through the PUT endpoint.

- https://www.npmjs.com/package/bcrypt#to-check-a-password
Used to securely compare hashed passwords during login.

- https://www.w3schools.com/js/js_window_location.asp
Used to redirect unauthenticated users to the login page.

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
Used to convert string input values into numbers (e.g. coach price).

- https://www.w3schools.com/jsref/met_win_prompt.asp
Used to prompt the user for new values when editing a coach.

- https://www.w3schools.com/jsref/jsref_slice_array.asp
Used to display only a limited number of coaches (e.g. coaches of the month).

- https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
Used to access coach IDs stored in HTML data attributes for edit and delete actions.

- https://chatgpt.com/share/695519b7-534c-8006-93cc-dc88a7708029
Used to generate initial mock data for the MongoDB database.

- https://chatgpt.com/share/69552c0c-9a24-8006-a339-be78b2b905fa
Used as guidance when implementing the DELETE endpoint in the backend API.

- https://chatgpt.com/share/69553846-5614-8006-9424-7eecf07450e4
Used as guidance when implementing the UPDATE endpoint in the backend API.

- https://chatgpt.com/share/69554f0f-de58-8006-8fc1-92695c131fb0
Used to help structure front-end logic for handling coach fun facts.

- https://chatgpt.com/share/69555e24-2c4c-8006-8a69-8687305337af
Used to render an array of fun facts dynamically into HTML.

- https://chatgpt.com/share/6956b9d8-5ccc-8006-a8e9-d9f2406c2829
Used to render a limited number of elements on the homepage.
