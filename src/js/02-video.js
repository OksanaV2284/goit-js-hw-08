import Player from '@vimeo/player';

var throttle = require('lodash.throttle');
console.log(throttle);
// var throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const KEY_LOCAL = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(function (currentTime) {
    const stopTime = JSON.stringify(currentTime.seconds);
    localStorage.setItem(KEY_LOCAL, stopTime);
    // console.log('played the video!');
  }, 1000)
);

const startTime = JSON.parse(localStorage.getItem(KEY_LOCAL));
let startMoving = startTime;
player
  .setCurrentTime(startMoving)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
