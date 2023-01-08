import Player from '@vimeo/player';
console.log(Player);
var throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
function foo() {
  player.getCurrentTime().then(function (time) {
    console.log('time:', time);
    if (time >= 110) {
      player.pause();
    }
  });
  setTimeout(foo, 1000);
}
player.on('play', function () {
  foo();
});
