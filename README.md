# PWA Tutorial for Beginners by The Net Ninja on YouTube

The Net Ninja teaches the basics on Progressive Web Apps.

This and the following lessons are based on the Net Ninja's Firebase Auth tutorial.

## Auth Lesson 11 – Conditional Menu Links

YouTube link: https://youtu.be/8iCNwJ9qS-0

The GameGuidez app in the video has a navbar that displays all the links. The Net Ninja explains that he wants only certain links to be visible depending on the state of the user logon. In his index.js file he creates a function expression called __setupUI__ that uses an __if__ condition to test for the existence of a logged-in user. If a user is logged in, the links with the __.logged-out__ class will have their display set to “none” and the links with the __.logged-in__ class will have their display set to “block”, __else__ the link displays will have the opposite settings. In my own index.js file, I made an identical function expression but named it __displayMenuLinks__. The __auth.onAuthStateChanged__ function in auth.js calls __displayMenuLinks__ in its own __if … else__ condition.
