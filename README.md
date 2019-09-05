# PWA Tutorial for Beginners by The Net Ninja on YouTube

The Net Ninja teaches the basics on Progressive Web Apps.

This and the following lessons are based on the Net Ninja's Firebase Auth tutorial.

## Auth Lesson 16 – More on Firestore Rules

YouTube link: https://youtu.be/B2E30lXp5EI

The Net Ninja changes the rules in the Database tab on his Firestore database. He makes a new set of rules just for the users database in order to prevent random users from tampering with the database. One rule allows the user to create a document in the users database only if a user is logged in. This is necessary when a user first creates an account.
```
    match /users/{userID} {
      allow create: if request.auth.uid != null;
    }
```
Another rule allows a user to read a document in this database only if the i.d. of the document is the same as the user i.d.
```
    match /users/{userID} {
      allow create: if request.auth.uid != null;
      allow read: if request.auth.uid == userID;
    }
```
