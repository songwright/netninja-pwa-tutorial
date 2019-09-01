# PWA Tutorial for Beginners by The Net Ninja on YouTube

The Net Ninja teaches the basics on Progressive Web Apps.

This and the following lessons are based on the Net Ninja's Firebase Auth tutorial.

## Auth Lesson 3 – HTML Template Setup

YouTube link: https://youtu.be/d0RK2bpRVgo

In this video, the Net Ninja moves this __db.collection__ function inside the __if__ condition in the __onAuthStateChanged__ function in his auth.js file. If a user is logged in, the guides are displayed on the page. If no one is logged in, no guides are visible.
```
auth.onAuthStateChanged(user => {
  if (user) {
    console.log('user logged in: ', user);
    db.collection('guides').get().then(snapshot => {
      setupGuides(snapshot.docs);
    });
  } else {
    console.log('user logged out');
    setupGuides([]);
  }
})
```
This function also creates the guides that are displayed on his page, or stops displaying them if no one is logged in. This is different from the way my PWA app creates recipes. A function called __renderRecipe__ in the PWA’s ui.js file creates the recipes from data retrieved from the app’s Firebase database. I want anyone to be able to see the recipes, but I want only signed-up users to be able to create recipes. Only an admin should be able to delete other people’s recipes. At this point, anyone can read, create, and delete recipes. Event listeners in the PWA’s db.js file control the creation and deletion of recipes. Those event listeners don’t use auth methods to control who creates or deletes recipes.

In the video, the Net Ninja shows you how to use the database rules on the Firebase website to control the reading and writing of documents. To control who can write recipes, I’ll try changing the rules for my PWA’s database on the Firebase website.
```
service cloud.firestore {

  match /databases/{database}/documents {

    // match docs in the guides collection
    // If a logged on user exists allow write.
    match /recipes/{recipeID} {
      allow read;
      allow write: if request.auth.uid !=null;
    }
  }
}
```
The __allow write__ rule tests for a login by a user. If a user is logged on, the user can create a recipe.