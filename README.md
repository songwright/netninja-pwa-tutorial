# PWA Tutorial for Beginners by The Net Ninja on YouTube

The Net Ninja teaches the basics on Progressive Web Apps.

## Lesson 25 - Updating the UI

YouTube link: https://youtu.be/ezNvFzc0f30

Now that the app is updating the data from the firestore database, it is necessary to show the data in the UI (user interface). He removes the dummy recipes from the index.html file except for one that will be used as a template for generating recipes. He sets up the real-time listener in db.js to call the ___renderRecipe__ function using as parameters change.doc.data(), the data from the document, and __change.doc.id.__, which is the i.d. of the document. In the ui.js file, He creates a constant called ___renderRecipe__ with a function that takes in the data and i.d. parameters from above. In ___renderRecipe__, he creates a constant called __html__ that contains the HTML template for the recipe. To display a variable in the template string that shows the title of the recipe, he uses __${data.title}__ and for the ingredients he uses __${data.ingredients}__. He creates an attribute in the div called __data-id__ and passes the document i.d. into it: __data-id=”${id}”__. He also puts __data-id=”${id}”__.into the i-tag for the trash icon for later reference when deleting the document.

At the top of the ui.js file, he creates the constant __recipes__ that can point at styles in the DOM that have __.recipes__ as a style. In ___renderRecipe__, he add the line __recipes.innerHTML += html;__ to add recipes from the database to the DOM. The recipes now appear in the app.