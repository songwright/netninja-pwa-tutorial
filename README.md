# PWA Tutorial for Beginners by The Net Ninja on YouTube

The Net Ninja teaches the basics on Progressive Web Apps.

## Lesson 28 - Deleting Recipes

YouTube link: https://youtu.be/zdb8_a0DXTg

The Net Ninja creates a way to delete a recipe by clicking on the trashcan icon. It would be inefficient to put an event listener on each trashcan icon. Instead, he puts a click listener on the div for all the recipes that uses a function to check if the event that was clicked on was the trashcan icon. This way, there is only one click listener for the whole div. Also, when creating a new recipe, there is no need to create a new click listener. This works through event delegation. One event listener on the whole div containing the recipes works for all the trashcan icons, no matter how manner there are.

In the db.js, he stores the recipes div in a constant called __recipeContainer__.

```const recipeContainer = document.querySelector('.recipes');```

He attaches a click listener to __recipeContainer__ and puts a callback function in it that logs the event object in the console. He also updates the dynamic cache version to v5. (When did he bump it up to v4? I don’t know.) He updates the service worker in the browser and refreshes the page. Clicking on the trashcan icon makes an object appear in the console. The object is the click event, called “MouseEvent” in the console. He expands it to show that there is a property called “target: i.materials.icons.” Inside this, at the bottom, is a property called “tagName: “I”.” We only want to delete a recipe when the __tagName__ is “I.” He creates an if check that iterates on the event to look at first the __target__ in the event and then the __tagName__ in the __target__.

```if(evt.target.tagName === "I")```

He then creates a constant called __id__ that gets the i.d. from the style attribute in the event target. The __id__ is the i.d. of the document in the firestore database. Now, when you click on the trashcan icon, the recipe gets removed from the firestore database. This won’t show up, however, in the DOM until the page is refreshed, so the Net Ninja adds a line in db.js that invokes a function called __removeRecipe__ which uses the i.d. of the recipe that was just removed. It does this by getting the __id__ property from the __doc__ property on the __change__ parameter that the __.forEach__ is cycling through.

In ui.js, he creates the __removeRecipe__ function. He uses a template string with backticks to get the i.d. from the class of the div. He uses __.remove__, which is a DOM method, on the recipe constant to remove the recipe. He updates the static cache version to v4 because ui.js is in the array of static cache assets. Because the db.js has been updated, he updates the dynamic cache to v7 (When did he update it to v6? I don’t know.) In the video, the Net Ninja shows that deleting a recipe also works when the app is offline. The firestore database gets updated when the app goes back online and synchronizes the IndexedDB in the browser with firestore.