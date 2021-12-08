import throttle from 'lodash.throttle';
//get access to iframe
const iframe = document.querySelector('iframe');
//create player instance
const player = new Vimeo.Player(iframe);
//when "play" btn pressed checks if local storage has time save for the play, and plays the video from saved point
player.on('play', function () {
  const savedTime = localStorage.getItem('videoplayer-current-time');

  if (savedTime) {
    player.setCurrentTime(savedTime);
  }
});
//during play, save current video time to local storage
player.on(
  'timeupdate',
  throttle(function ({ seconds }) {
    localStorage.setItem('videoplayer-current-time', seconds);
  }, 1000),
);
//sets local storage value to the value of chosen time play
player.on('seeking', function ({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
});
