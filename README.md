# PWA Tutorial for Beginners by The Net Ninja on YouTube

The Net Ninja teaches the basics on Progressive Web Apps.

This and the following lessons are based on the Net Ninja's Firebase Auth tutorial.

## Auth Lesson 3 – HTML Template Setup

YouTube link: https://youtu.be/5VxqV8FhlVg

The Net Ninja adds a method on the __auth__ constant called __onAuthStateChanged__ in auth.js. This method listens for changes in the status of the auth state. He passes an arrow function into it that logs the user object into the console when the auth state changes. This means that the user object will appear in the console when a user logs in. When the user logs out, the listener will put “null” in the console. In the video, the Net Ninja changes the function to log “user logged in” or “user logged out” to show the user status.
