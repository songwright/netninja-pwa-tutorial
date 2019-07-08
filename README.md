# PWA Tutorial for Beginners by The Net Ninja on YouTube

The Net Ninja teaches the basics on Progressive Web Apps.

## Lesson 9 - The Install Event

YouTube link: https://youtu.be/JnCEXQo_TiI

In this lesson, Net Ninja writes an event listener in sw.js that listens for the “install” event automatically which the browser emits when the app.js file registers the service worker. From within the listener, he puts a callback function that logs the install event in the console. When a new service worker gets installed, it goes into “waiting” until a new instance of the page gets opened. Until then, the current instance of the page uses the old service worker.