# PWA Tutorial for Beginners by The Net Ninja on YouTube

The Net Ninja teaches the basics on Progressive Web Apps.

## Lesson 20 - Conditional Fallbacks

YouTube link: https://youtu.be/K9NXQZxKMko

The fallback page only makes sense as a substitute for unavailable pages, not other resources such as pictures. The Net Ninja adds a line to the __.catch__ block of the fetch listener. The line is an __if__ statement that uses a few methods from the event. The __.request__ method gets the fetch request, the __.url__ gets the URL for that request and __.indexOf__ looks for the string ‘.html’ in the URL and assigns a number to it based on its position in the URL string. If ‘.html’ does not exist in the URL, __.indexOf__  will return a value of -1. The __if__ statement only allows the fallback page to return if the return value of the request URL is greater than -1, meaning that the URL of the rejected promise is an HTML page. It’s possible to do this for different resource types using, for example, checks for PNG files.