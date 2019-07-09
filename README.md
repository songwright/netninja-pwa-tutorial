# PWA Tutorial for Beginners by The Net Ninja on YouTube

The Net Ninja teaches the basics on Progressive Web Apps.

## Lesson 18 - Dynamic Caching

YouTube link: https://youtu.be/ChXgikdQJR8

The site needs another cache for pages that the user may need offline, but are not essential to the shell. This includes the Contact Us and About pages. These pages can still be browsed when the app is offline, but they won’t take up space in the static cache. They will be stored in the dynamic cache. The Net Ninja creates the dynamic cache by first adding a __.then__ method to the fetch request in the fetch listener. This promise gets the fetch response and uses it to add the asset resulting from the response to the cache. He creates a new variable, __dynamicCacheName__, which is equal to “site-dynamic-v1,” and passes it into __caches__ with the __.open__ method. A __.then__ method will put the fetch request URL (__evt.request.url__) and a copy of the response into the cache, using __.put__. We use a copy (using __.clone__) because if we use the original response, it won’t get returned to the browser. Then the original response gets returned to the browser. If, in the future, the app is offline, an asset that was stored in the dynamic cache during browsing will still be available to the user.