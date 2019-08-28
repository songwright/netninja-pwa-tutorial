# PWA Tutorial for Beginners by The Net Ninja on YouTube

The Net Ninja teaches the basics on Progressive Web Apps.

## Lesson 16 - Getting Cached Assets

YouTube link: https://youtu.be/0mAw9Na6hyM

The Net Ninja writes a method called __.respondWith__ on the __evt__ parameter  that responds to fetch events which are going out to servers from the browser by looking in the cache for assets that match a fetch request (__evt.request__). The fetch response will either match one of the assets that’s already in the cache or it’s going to be something that’s not in the static cache called “site-static”, which means that the parameter __cacheRes__ will be empty. Therefore, the __return__ line will then either return to the browser the asset that is stored in the static cache (cacheRes) or return the actual fetch request that originally came from the browser (__fetch(evt.request)__), which will then go out to the server instead of the cache.

In the video, one of the icons fails to load from the cache when the Net Ninja goes into offline mode. It’s the trashcan icon, which should have loaded since the Google font link is listed in the service worker’s array of static cache assets. He points out on the Network tab in Dev Tools that, under All, there is a request for “icon?family=Material+icons.” This is a request for the icon from the Materialize framework he used for the CSS styles. Within the request, there is another URL for the source, which is separate from the font link URL. We can’t get the request if we’re offline, unless we put the icon source URL in the array of assets. Once the new URL is added, and the page is reloaded, the icon can be stored as an asset for offline use.