# PWA Tutorial for Beginners by The Net Ninja on YouTube

The Net Ninja teaches the basics on Progressive Web Apps.

This and the following lessons are based on the Net Ninja's Firebase Auth tutorial.

## Auth Lesson 4 - Setting up Firebase Locally

YouTube link: https://youtu.be/rOqvU46sdoU

The Net Ninja shows you how to set up the Firebase database on firebase.google.com. In the video, he copies and pastes a code snippet from Firebase to his index.html file. The index.html file in my PWA already has that snippet, so that step was unnecessary. I added a link to Firebase auth:

`<script src="https://www.gstatic.com/firebasejs/6.2.0/firebase-auth.js"></script>`

I also stored the auth service in a constant called __auth__.

`const auth = firebase.auth();`
