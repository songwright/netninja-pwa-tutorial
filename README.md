# PWA Tutorial for Beginners by The Net Ninja on YouTube

The Net Ninja teaches the basics on Progressive Web Apps.

## Lesson 24 - Realtime Data

YouTube link: https://youtu.be/JP3L0jIXvrY

In the beginning of the video, the Net Ninja comments out the fetch listener in the service worker so that it won’t interfere with the code he’ll be putting in for the database. In the file db.js, the Net Ninja uses the __db__ constant to interact with the database and accesses a method on __db__ called __.collection__, with __recipes__ passed in as an argument. He uses a method called __.onSnapshot__ to set up a real time listener with snapshot as a parameter. In a callback function, he uses the method __.docChanges__ on the parameter __snapshot__ to get changes to the database. At this point, he just looks at documents being added or removed from the database. These appear as arrays in the console log. On __.docChanges__ he puts the method __.forEach__ and uses a callback function to log each change into the console individually instead of in an array. There is a __.data__ method that you can use on the doc property of the document to get data. Logging the data shows the contents of the fields in the documents in the console. The __.id__ method will show the unique i.d. of each document.

He removes the console.log line and adds __if__ statements for checking the type of each document, added or removed. Added recipes will be added to the web page. Removed documents will be removed from the web page.