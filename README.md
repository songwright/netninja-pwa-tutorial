# PWA Tutorial for Beginners by The Net Ninja on YouTube

The Net Ninja teaches the basics on Progressive Web Apps.

This and the following lessons are based on the Net Ninja's Firebase Auth tutorial.

## Auth Lesson 3 – HTML Template Setup

YouTube link: https://youtu.be/wkdCpktUfGg

The app will use the sign up modal to create new users, using their e-mail address and a new password. An event listener needs to be linked to the “Sign up” button on the modal. In the video, the Net Ninja adds an event listener to the auth.js file that listens for a submit event on the sign up form, using the form’s id, “signup-form”. The event listener gets the values of the __email__ and __password__ constants from the form input in the modal when a user submits the form. Using the __auth__ constant, it then uses a Firebase service to create a new user using the __email__ and __password__ constants. When you create a new user, that user will appear in the Users tab of the Authentication section of the Project Overview in Firebase. The Firebase database will create a UID for that new user, which is a hash of random alphanumeric characters. Because the service is asynchronous, you can tack on a __.then__ to do something while the app waiting for the promise to finish. The Net Ninja puts an arrow function in the __.then__ that closes the form and resets the inputs for the form.
