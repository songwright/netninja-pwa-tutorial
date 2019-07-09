# PWA Tutorial for Beginners by The Net Ninja on YouTube

The Net Ninja teaches the basics on Progressive Web Apps.

## Lesson 19 - Offline Fallback Page

YouTube link: https://youtu.be/KLQELCvb-B0

The Net Ninja uses the contact page as a template for a fallback page. He adds the URL for the page to the array of static assets in the service worker file sw.js. He also changes the fetch listener in sw.js by adding a __.catch__ with an __if__ statement that uses __chaches.match__ to return the fallback. He puts a __Boolean and__ in the activate event listener so that the listener does not delete the dynamic cache when a new service worker gets registered.