import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';

const video = document.querySelector("video");
const buttonPlayPause = document.querySelector("#playPause");
const buttonMuteUmute = document.querySelector("#muteUnmute");

const player = new MediaPlayer({ el: video, plugins: [
  new AutoPlay(),
  new AutoPause()
] });

buttonPlayPause.onclick = () => player.togglePlay();
buttonMuteUmute.onclick = () => player.toggleMute();
