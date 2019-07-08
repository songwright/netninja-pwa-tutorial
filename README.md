# PWA Tutorial for Beginners by The Net Ninja on YouTube

The Net Ninja teaches the basics on Progressive Web Apps.

## Lesso 10 - The 'Activate' Event

YouTube link: https://youtu.be/AmWj52zw9R8

The Net Ninja writes a listener in sw.js that listens for the “activate” event that comes from the browser when it activates the service worker. From within the listener, he puts a callback function that logs the event in the console. When a new service worker gets installed, it goes into “waiting to activate.” All current instances of the page continue using the old service worker. The new service worker only activates after all instances of the page are closed and a new instance opens.