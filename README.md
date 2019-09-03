# PWA Tutorial for Beginners by The Net Ninja on YouTube

The Net Ninja teaches the basics on Progressive Web Apps.

Auth Lesson 14 – Showing User Info

YouTube link: https://youtu.be/N5-veJg7ktk

In the video, the Net Ninja focuses on showing user information in the “Account details” popup, if a user is logged in. He displays the token of a logged-in user in an object in the console and shows where the e-mail address of the user is stored in a property called “email.” This could be displayed in the account details. The `<div>` in the Account modal has a class called “account-details.” The Net Ninja creates a constant in his index.js file called __accountDetails__ that connect to this class. This creates a link to the modal. In his index.js file, he writes the HTML code for the account details message and uses the __.innerHTML__ method to connect it to __accountDetails__. Now, when a user is logged in, clicking on the Account link will show the user’s e-mail address in the modal.
