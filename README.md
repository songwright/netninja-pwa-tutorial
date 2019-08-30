# PWA Tutorial for Beginners by The Net Ninja on YouTube

The Net Ninja teaches the basics on Progressive Web Apps.

This and the following lessons are based on the Net Ninja's Firebase Auth tutorial.

## Auth Lesson 3 - HTML Template Setup

YouTube link: https://youtu.be/lkNvj7fUcRw

The app worked fine for a while, but then I started getting e-mail messages from Firebase telling me that the rules for the database needed to be more secure. That meant that I would have to set up an authorized user who would be able to make changes to the database through the app while prohibiting others from making changes. This happened while I was going through the Net Ninja’s tutorial on React with Redux. After some time went by, I went back and looked at his tutorial for Firebase Auth. I decided to add links and modals to this app like the one in the auth tutorial that would let a user create an account, log in, and make recipes. Only an admin user would be able to delete recipes. This would satisfy the database security requirement for Firebase. Before watching this video, I made a backup branch in the repository for this app so I could go back to that version if I need to later. In this video, the Net Ninja sets up his index.html file by copying and pasting a number of prefabricated elements. I copied the navbar links from there into the navbar in my PWA. One change I had to make was to put the hamburger icon into the list of links to make it line up with the other links. I also put links to the auth.js and index.js scripts in the index.html file and then created those files in a new folder called “scripts.” I copied the modals for the sign up, login, logout, and account modals to index.html and then added an event listener to index.js that starts the logic for the modals and their links.

