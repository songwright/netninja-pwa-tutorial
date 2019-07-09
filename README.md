# PWA Tutorial for Beginners by The Net Ninja on YouTube

The Net Ninja teaches the basics on Progressive Web Apps.

YouTube link: https://youtu.be/ciu62KLlwGQ

## Lesson 26 - Offline Data

The Net Ninja explains what’s happening so far. The real-time listener is listening for changes in the firestore database (added types and removed types). Whenever the app is loaded or reloaded, the listener gets the changes from the firestore database. The app takes the changes and puts them in the DOM. New changes made to the database will appear in the DOM as they occur. This happens when the app is online. Nothing happens when it is offline. Using the service worker to chache the data is not practical because the service worker might serve old data from the cache. The solution is to use the __IndexedDB__ feature in the browser. __IndexedDB__ can synchronize offline data, i.e., local changes, with firestore.

In the db.js file, the Net Ninja adds a line at the top, __db.enablePersistence()__, which uses firestore’s library to enable offline persistence. He adds a __.catch__ to log two types of failure, one if the browser fails to run properly, the other if the browser does not support persistence. The app will now synchronize with the firestore database when it is online after making offline changes.

Back in the service worker, the Net Ninja uncomments the fetch listener. He adds a line that will make sure that the listener does not cache date from Google firebase.

```if(evt.request.url.indexOf('firestore.googleapis.com') === -1)```

The __.indexOf__ will return a value of -1 if the link to firestore database is not in the fetch request, and then the __if__ statement will allow the rest of the listener to run. The Net Ninja updates the dynamic cache version to v2 because the service worker has been changed and the static cache version to v3 just to catch any changes to static data. After refreshing online, he goes offline to show that the data is still displayed in the app.