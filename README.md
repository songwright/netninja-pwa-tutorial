# PWA Tutorial for Beginners by The Net Ninja on YouTube

The Net Ninja teaches the basics on Progressive Web Apps.

Auth Lesson 15 – Firestore Users Collection

YouTube link: https://youtu.be/qWy9ylc3f9U

In the video, the Net Ninja discusses how to create a collection on Firebase for user information. This is useful if you want to store information on users such as biographies, usernames, ages, favorites, etc., depending on the needs of the application. The Firebase collection will use the same user i.d.’s that Firebase auth uses.

Extra information doesn’t need to be transmitted back and forth between the app server and the user’s browser. It can be stored in Firebase until needed.

In the video, the Net Ninja says that this extra information will be a user bio. In my own app, I will use a username. The user will enter the username when he or she first signs up. The app will use Firebase authentication to create that user with e-mail address and password, retrieve a user credential from a successful response from Firebase, and then use that information to create a new document representing that user in a users collection in Firebase. The document will be connected to that user by the user’s i.d. In the video, the Net Ninja adds an input element in this index.html for the user to enter a “one-line bio” in the sign-up modal. In my own app, I made this an input for a username.

In his auth.js file, adds a __return__ line that __returns__ a promise so that he would be able to attach a __.then__ to it later. In the __return__, he uses a method called __.doc__ on the __db__ constant which he uses to get the unique i.d. (__uid__) for the user account that the user just created. He uses another method called __.set__ to create a property called __bio__ that will send the value of __bio__ to Firebase to use in the users collection. In my PWA, this property is called __username__. The __.then__ method that he attaches to this gets the __querySelector__ for the modal copied and pasted into it. This way, the modal waits for the asynchronous function enclosing it to finish before it renders the modal. To allow all this to work, he goes to Firebase and changes the rules so that anyone can read and write without authentication. The Net Ninja creates a new user and then shows that the new user exists in the authentication tab. In the database tab, there is a new collection called “users” that has a document created by the new user. The __uid__ for that document is the same as the user’s __uid__ in authentication.

In his index.js file, the Net Ninja adds an element in the Account Details modal that displays the user’s bio. In my PWA, it displays the username.