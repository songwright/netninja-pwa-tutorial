# PWA Tutorial for Beginners by The Net Ninja on YouTube

The Net Ninja teaches the basics on Progressive Web Apps.

## Lesson 29 – Deploying to Firebase ##

YouTube link: https://youtu.be/e-aAAbY0miY

The Net Ninja explains how to deploy the app to Firebase. Node.js will need to be installed on your computer. You can check your version of Node by typing __node -v__ in a terminal. Version 10 is needed for Firebase. In the Firebase console on Google, there is a Hosting area. Click on Get Started. A modal will tell you to install Firebase Command line tools by type __npm install -g firebase-tools__ in a terminal. This will be a global installation. Next, type in __firebase login__. This will give you a login dialogue. To initiate the project, type __firebase init__. Firebase in the terminal will ask which service you want. Choose hosting. It will then ask which project in your Firebase account you want to host. Choose this one. “What do you want to use as your public directory?” Choose “public,” which is the default. Firebase installs some new files and folders in the app’s directory. All the files that will be published need to be moved to the “public” directory. Delete the index.html file provided by Firebase. Type __Firebase deploy__ to deploy. Firebase will push the public folder to Firebase. It will also provide a URL where you can see the published site. In the Firebase console, the site is visible in hosting.