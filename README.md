# PWA Tutorial for Beginners by The Net Ninja on YouTube

The Net Ninja teaches the basics on Progressive Web Apps.

This and the following lessons are based on the Net Ninja's Firebase Auth tutorial.

## Auth Lesson 7 – Logging Users In

YouTube link: https://youtu.be/JWeoQn6KB0o

The Net Ninja adds an event listener to a constant called __loginForm__ in auth.js that fires on a submit event. Like the sign up form script, this listener uses a Firebase service as a method on the __auth__ constant which then takes the __email__ and __password__ values from the form when a user submits the form.

`auth.signInWithEmailAndPassword(email, password)`

The user is now logged in to the Firebase database. A __.then__ attached to this promise passes the credential token that Firebase returns into an arrow function. This function uses Materialize CSS to close and reset the form when the user finishes submitting the form.
