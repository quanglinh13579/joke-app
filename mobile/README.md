#Jokee - A Single-Serving Joke Website
This is a simple single-page web application built with HTML, CSS, and plain JavaScript. The purpose of the app is to display a joke to the user, allow them to vote on it, and then present the next joke in the list. The application fulfills all the technical and design requirements outlined in the test.

##Key Features
- Single-page Interface: Displays one joke at a time.

- Voting System: Provides "This is Funny!" and "This is not funny." buttons for user interaction.

- Joke Progression: Automatically moves to the next joke in the list after a vote.

- End-of-Jokes Message: Displays the message "That's all the jokes for today! Come back another day!" once all jokes have been viewed.

- Responsive Design: The layout is optimized to display correctly on both desktop and mobile screens.

##Technologies Used
- HTML: Used for the foundational structure of the webpage.

- CSS: Used for styling and layout, including media queries for responsive design.

- JavaScript: Manages the application's logic, including joke display, voting, and content switching.

##How to Run Locally
- You can easily run this project by simply opening the index.html file in your web browser.

- [GitHub Repository](https://github.com/quanglinh13579/joke-app..git)


- Open the index.html file with your preferred web browser (e.g., Google Chrome, Firefox, Safari).

##Technical Analysis
- index.html: The HTML file is well-structured, using semantic tags like `<header>`, `<section>`, and `<main>` to create a clear document hierarchy.


- style.css: The CSS file utilizes Flexbox for layout and incorporates media queries (@media (max-width: 576px)) to ensure the design is fully responsive and provides a good user experience on smaller devices.

- script.js: All application logic is handled in a single JavaScript file. Jokes are stored in an array. The currentJoke variable tracks the joke being displayed. The vote() function handles the logic for moving to the next joke and displaying the final message when the list is exhausted.