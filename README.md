# PWA Tutorial for Beginners by The Net Ninja on YouTube

The Net Ninja teaches the basics on Progressive Web Apps.

## Auth Lesson 12 – Adding Guides

YouTube link: https://youtu.be/rgBDotX_65Q

The Net Ninja talks about how to create guides in his GameGuidez app using the method __db.collection().add()__ in the __createForm__ function expression in his auth.js file. This is different from the way my PWA creates recipes using __db.onSnapshot()__ to detect whether a Firebase document is either “added” or “removed” and then rendering the recipe accordingly. The GameGuidez app can only create new guides using this method. My PWA either renders a recipe that exists as a document in a Firebase collection or it erases a removed recipe from the web page. He also shows you how to use a __.catch__ method to put an error message in the console if you try to create a guide even if you aren’t logged in to the app. My PWA has an equivalent error message method. Therefore, there is no need for me to change the PWA to conform to this video at this point.
