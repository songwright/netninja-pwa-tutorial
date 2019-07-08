# PWA Tutorial for Beginners by The Net Ninja on YouTube

The Net Ninja teaches the basics on Progressive Web Apps.

## Lesson 2 - Setting up a Project

YouTube link: https://youtu.be/JQaL5YiSuqE

The Net Ninja uses Visual Studio Code for editing the files in this video. He uses Materialize CSS, a framework like Bootstrap but made by Google instead of Twitter. There is a link to the course files in the video notes:

https://github.com/iamshaunjp/pwa-tutorial

There are more links to YouTube playlists for the Net Ninja’s courses on Firebase Firestore, Materialize, CSS Grid, and CSS Variable. Download his files for this course from Github. It includes folders for the necessary CSS files and image files. The js folder contains a minified JavaScript library needed for Materialize. It also has an empty file called ui.js. This will contain the user interface logic.

In VS Code, the Net Ninja types “doc” to create a bare bones index.html file and sets it up for the project. He explains that you can’t just double-click to open this file because PWA’s need a live server using the HTTP protocol. There is an extension in VS Code called “Live Server” that he uses to serve the files instead of opening them directly from the operating system. In the index.html file, he installs links for Materialize and a Google font in the head, and links to local files. In the body, he applies Materialize styles for the body. For the sections within the body, he copies and pastes sections from his repository: nav, side nav, side form, recipes, and an add button. Icons in the sections use i-class tags from Materialize. The side nav and the side form aren’t visible in the browser until opened with a link. The Net Ninja adds HTML in the index for dummy recipes. They use Materialize styles. At the bottom of the index.html file he adds a link to the ui.js file.

The Net Ninja adds two files in the pages folder, about.html and contact.html, copying and pasting the codes from the repository. In styles.css, he copies and pastes styles from his repository and then explains these styles, which include variables for three colors used throughout the site. He uses CSS grid to format the areas of the recipes.

In the browser, the pages look better, but the icons don’t work yet because he hasn’t added the logic for them in the JavaScript files. In ui.js, he copies and pastes an event listener with a function that uses Materialize to open the menu and the side form from the right and left sides.
