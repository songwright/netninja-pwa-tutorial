# PWA Tutorial for Beginners by The Net Ninja on YouTube

The Net Ninja teaches the basics on Progressive Web Apps.

## Lesson 15 - Pre-Caching Assets

YouTube link: https://youtu.be/kT3qSf7jG5c

The app shell is a collection of assets that the app needs to operate at a basic level. This is called the __shell model__ approach to PWA design. The Net Ninja writes a new line in the install event listener the opens and then cache object with __.open__. A constant gets passed into __.open__, which is the name of a variable called “staticCacheName.” He uses __.then__ to fire when the promise is returned. A callback function in __.then__ uses __.addAll__ to grab all the resources listed in an array. The assets are request URL’s for resources on the web site, such as the index.html file. The Net Ninja includes a URL for the CDN for the Google font that the page uses.

Because the install event could happen very quickly, the browser might stop the service worker completely if it’s doing nothing else. We don’t want this to happen because the saving of the assets is asynchronous and might not finish right away. A method called __.waitUntil__ is needed to force the install event to wait until the promise with the assets is resolved. This creates a cache called “site-static” that appears in the Application tab in the dev tools in Chrome. In the future, when the browser needs files for this page, it will get them from the cache instead of getting them from the server. This is faster than getting assets from the server.