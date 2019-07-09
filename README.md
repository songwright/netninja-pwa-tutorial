# PWA Tutorial for Beginners by The Net Ninja on YouTube

The Net Ninja teaches the basics on Progressive Web Apps.

## Lesson 21 - Limiting Cache Size

YouTube link: https://youtu.be/CHBoXdVdPi0

The size of the cache can get out of control if nothing ever gets deleted from the chache. There is a way to limit the size of the cache. The Net Ninja creates a function in the service worker file sw.js called __limitCacheSize__. It takes two parameters, __name__ and __size__. A __.open__ method on __chaches__ takes __name__ and returns the cache that it opens. A __.then__ uses a callback function to get the keys out of the cache. The keys are URL’s like the ones in the static assets or dynamic resources. Another __.then__ uses an __if__ statement to compare the __length__ of keys, i.e., the total number of assets, to __length__. If that number is bigger then the __size__ parameter, __cache.delete__ will delete the first key in the array (__keys[0]__). Another __.then__ calls back the __limitCacheSize__ function itself so it can go through the cycle again until the __keys.length__ is not greater than __size__.

The Net Ninja adds a line to the fetch listener, in the part that puts a clone of the fetch request into the cache, that calls __limitCacheSize__, using __dynamicCacheName__ and a number as parameters. Every time things get added to the cache, this will check the number of items and delete the oldest ones.