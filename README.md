# PWA Tutorial for Beginners by The Net Ninja on YouTube

The Net Ninja teaches the basics on Progressive Web Apps.

This and the following lessons are based on the Net Ninja's Firebase Auth tutorial.

## Auth Lesson 9 - Getting Firestore Data

YouTube link: https://youtu.be/kIVg_yTiO3Q

The Net Ninja shows us how to create a collection in the database area of the Google Firebase website. The guides on the GameGuidez web page in the video are dummy guides in the index.html. The reason for using Firebase is to have the app generate guides using information from a Firestore database. He creates a collection in his Firestore database called “guides” where he stores the fields for the guides and their values in documents. Each document supplies the data for a guide. To retrieve the data, he sets up a method in the auth.js file using the __db__ constant that represents the database in the app.
```
db.collection('guides').get().then(snapshot => {
  setupGuides(snapshot.docs);
});
```
He creates the __setupGuides__ function in his index.js file to append a block of HTML to the web page when the app gets data from the database. The HTML is a list item containing the title and content for a guide.
