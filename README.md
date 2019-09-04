# PWA Tutorial for Beginners by The Net Ninja on YouTube

The Net Ninja teaches the basics on Progressive Web Apps.

This and the following lessons are based on the Net Ninja's Firebase Auth tutorial.

## Auth Lesson 13 – Firestore Realtime Listener

YouTube link:  https://youtu.be/-FbJaAztM_k

In the video, the Net Ninja replaces the combined methods __.get().then()__ that he uses on __db.collection('guides')__ in his first listener in auth.js with __.onSnapshot()__. This puts a realtime listener on the database within the enclosing listener, which listens for changes in the auth state. In my PWA, viewing recipes doesn’t depend on having a user logged in. The __.onSnapshot()__ in the database listener in my db.js file listens for added or removed documents and renders recipes accordingly, without regard for auth state. Therefore, I have no need to update my PWA code to conform to the codes in this video.
