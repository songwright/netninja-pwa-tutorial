# PWA Tutorial for Beginners by The Net Ninja on YouTube

The Net Ninja teaches the basics on Progressive Web Apps.

## Lesson 22 - Site Audit Refresh

YouTube link: https://youtu.be/1tkK-OVno84

The Net Ninja performs a Lighthouse audit for the progressive web app. Lighthouse audits are in the Dev Tools. In the video, he points out that an error appears in the console in offline mode, “An unknown error occurred when fetching the script.” This happens because it can’t find the service worker, since it was not cached. If we cached the service worker, a new one would never get updated. We don’t want the service worker to be cached, so this is fine.