# PWA Tutorial for Beginners by The Net Ninja on YouTube

The Net Ninja teaches the basics on Progressive Web Apps.

## Lesson 17 - Cache Versioning

YouTube link: https://youtu.be/g9LfyCZjeKI

The browser fires the install event only when the service worker is changed. That means that if a file in the static cache is changed, the change won’t appear in the browser because the browser is still using the old version of the file, which it is loading from the cache. The browser re-caches the old files during the install event until the service worker file sw.js changes and therefore needs to be re-installed. When an asset in the static assets is changed, the sw.js file also needs to change to get it to be re-installed, which then causes the assets to be re-cached. This loads the new version of the changed file in the static cache. You can do this by changing the value of the constant __staticCacheName__ to something like “site-static-v1,” as in “version 1.” Every time a file in the cache assets gets changed, the version number changes by going up one.

This can create a problem for the fetch listener because if both the old cache version and the new version still exist. It won’t know the difference and may choose the wrong cache. The service worker needs to cycle through the keys (caches) before it can delete the old one, so the Net Ninja writes a __Promise.all__ with __keys__ as the parameter, using the __.filter__ method to find caches that do not have a name that is the value of __staticCacheName__. When the task finds the old cache, the __.map__ method will delete it. __Promise.all__ is necessary because the __.waitUntil__ needs several asynchronous tasks to finish before the activate event. When the array of promises resolves (the __.filter__  and the __.map__), the __Promise.all__ will resolve. Then the result goes to __.waitUntil__.