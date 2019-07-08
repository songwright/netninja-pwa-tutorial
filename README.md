# PWA Tutorial for Beginners by The Net Ninja on YouTube

The Net Ninja teaches the basics on Progressive Web Apps.

## Lesson 5 - iOS Support

YouTube link: https://youtu.be/jy6hX48pRHw

Some web app manifest properties are not currently supported in iOS, namely the icons and the theme color. A link tag needs to be added to the HTML head to show iOS where the home screen icon is. The Net Ninja adds a link that uses “apple-touch-icon” for the relationship. The href needs to be the location of the icon. In the video, he uses "/icons/icon-96x96.png" as the location of the icon. This is an error. The real location is "/img/icons/icon-96x96.png". He adds a meta tag that puts the color of the status bar in the top of the app on iOS devices.