# PWA Tutorial for Beginners by The Net Ninja on YouTube

The Net Ninja teaches the basics on Progressive Web Apps.

## Lesson 8 - Registering a Service Worker

YouTube link: https://youtu.be/6s697AJdlB8

The Net Ninja creates the service worker file, sw.js, in the root directory. This is so that it can use the scope for the whole app directory. In the js folder he makes a file called app.js, which will run the code that registers the service worker. He puts links to this file in the HTML files. In app.js, he uses an __if__ check to check if the __serviceWorker__ property exists on the navigator object in the browser. This is necessary because some browsers don’t have the __serviceWorker__ property. If the property is there, app.js will use the .register property on the __serviceWorker__ property to register the service worker. Because this is an asynchronous function, he puts a __.then__ on it to call a callback function if the promise resolves. The function logs “Service worker registered.” in the console. It also logs the registration object that he passes in as a parameter called ‘reg’. A __.catch__ after that will log an error if the promise doesn’t resolve. The error object is called ‘err’.

Service workers only work over secure connections, but it works on the local host because the local host is an exception.
