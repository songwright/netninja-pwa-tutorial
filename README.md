# PWA Tutorial for Beginners by The Net Ninja on YouTube

The Net Ninja teaches the basics on Progressive Web Apps.

This and the following lessons are based on the Net Ninja's Firebase Auth tutorial.

## Auth Lesson 17 – Intro to Custom Claims

YouTube link: https://youtu.be/SSiLsIkPQWs

The Net Ninja explains how to turn users in the database into admins. In his app, only admins can create guides. This video shows you how to give special privileges to users to make them admin users. In my PWA, I want all users to be able to create recipes, but they can only delete their own recipes and only an admin can delete all recipes.

Admins get extra privileges with custom claims. Custom claims are extra bits of information that can be associated with a particular user.

Firebase Auth
*	User i.d.
*	E-mail
*	CUSTOM CLAIMS
    * admin: true
    * premium: true

All users get basic data such as the user i.d. and e-mail address. Custom claims can give a user special roles such as “premium” that most users don’t have.

When we send the user token back and forth from the client to the server and vice-versa, we can access that claim on both the server and on the clients. We can use that claim to either protect the database or update the UI on the part of the front end that depends on that claim. For example, we could restrict write access to only users with an admin claim of true. On the front end, we could show admins a UI that is different from what ordinary users see. You set claims on a user to, for example, make someone an admin, you do it on the server (the “back end”). For this you need to use cloud functions.

Cloud Functions
*	Cloud functions run on the server
*	Good for code you don’t want to expose on the client
*	Perform tasks not available to client users
*	Callable from the front-end

Cloud functions only run on the server, but you can call them from the front end with the right credentials. You have to install Firebase tools locally. In the video, the Net Ninja opens a terminal and types:

`npm install firebase-tools -g`

into the terminal. This installs Firebase tools globally on his computer allows him to use Firebase CLI commands. Once the commands are installed, you initialize them in the terminal:

`firebase init functions`

`“Are you ready to proceed?”` Answer yes.

`“Select a default project for this directory:”` Select the PWA from the list.

`“What language would you like to use to write Cloud Functions?”` Choose JavaScript.

`“Do you want to use ESLint to catch probable bugs and enforce style?”` Answer no.

`“Do you want to install the dependencies with npm now?”` Answer yes. Press enter to install.

This will initialize Firebase tools. Firebase will install node modules as well as some extra files, including a file called “index.js” in the “functions” folder. The Net Ninja says that we will change this file later.