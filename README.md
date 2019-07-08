# PWA Tutorial for Beginners by The Net Ninja on YouTube

The Net Ninja teaches the basics on Progressive Web Apps.

## Lesson 3 - The Web App Manifest

YouTube link: https://youtu.be/AlEdGOLhuM8

The first real step to make a progressive web app is to make a web app manifest file. This is a single JSON file that provides information about the app to the browser. The manifest.json file must always have that name and it must be in the root directory. The manifest.json will contain information such as the name and short name of the app as well as the location of the app’s icons.

In the index.html, the Net Ninja puts a new link in the head for the manifest.json. The “rel” value needs to be “manifest.” The href is equal to “/manifest.json”. He puts this link into the heads of the about.html and contact.html.

In the Application tab of Chrome dev tools, information from the manifest appears.
