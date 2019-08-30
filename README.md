# PWA Tutorial for Beginners by The Net Ninja on YouTube

The Net Ninja teaches the basics on Progressive Web Apps.

This and the following lessons are based on the Net Ninja's Firebase Auth tutorial.

## Auth Lesson 6 - Signing Users Out

YouTube link:  https://youtu.be/eS-yU_6aKEE

The app logs the user in when they create a new account. How does a user logout? The solution is another Firebase method. The Logout link on the navbar has an i.d. called “logout”. We can use this to create an event listener that listens for a click on the link. The event listener prevents the default page refresh and then signs the user out using the __.signOut__ method on the __auth__ constant.

`auth.signOut()`
