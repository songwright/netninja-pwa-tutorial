# PWA Tutorial for Beginners by The Net Ninja on YouTube

The Net Ninja teaches the basics on Progressive Web Apps.

## Lesson 23 - Firestore Database

YouTube link: https://youtu.be/ZfL61cOUImw

Up to this point, the recipes in the app have been placeholders for the real things, which are supposed to be unique recipes that are stored in a database. The browser has a feature called __IndexedDB__, but rather than work with this directly, you can have it work under the hood while using a __Cloud Firestore__ database. Firestore uses __Google Firebase__ and interacts with __IndexedDB__. This video shows the NetNinja adding a new project in Firebase that will be used for this app. He creates a collection called “recipes” and adds documents for the recipes. Each document has a field and a value, which are like key-value pairs in objects. Firestore creates a unique i.d. for each document.

In the console for the database, on “Project Overview,” he adds an app backend for the recipes app on the front end. This lets him register the app, resulting in code which is called “Firebase SDK.” This code gets added to the index.html. The code has a link to the firebase, but the Net Ninja adds a line for a link to the firestore:

<script src="https://www.gstatic.com/firebasejs/6.2.0/firebase-firestore.js"></script>

The __firebaseConfig__ object contains the codes needed to connect this app to Firebase, including the API key. Under this code, the Net Ninja adds a line to store the database in a constant called __db__ to initialize the database in the front end. He also creates a new file called db.js to store logic for the database.