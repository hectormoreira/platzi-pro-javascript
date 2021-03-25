import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';
import AdsPlugin from './plugins/Ads';

const video = document.querySelector("video");
const buttonPlayPause: HTMLElement = document.querySelector("#playPause");
const buttonMuteUnmute: HTMLElement = document.querySelector("#muteUnmute");

const player = new MediaPlayer({ el: video, plugins: [
  new AutoPlay(),
  new AutoPause(),
  new AdsPlugin(),
] });

buttonPlayPause.onclick = () => player.togglePlay();
buttonMuteUnmute.onclick = () => player.toggleMute();

if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/sw.js').catch(error => {
    console.log(error);
  });
}