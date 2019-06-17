if('serviceWorker' in navigator){
  .then(() => console.log('Service worker registered.'))
  .catch(() => console.log('Service worker not registered.'))
}