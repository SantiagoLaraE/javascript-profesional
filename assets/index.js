import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';

const video = document.querySelector('video');
const btnPlayPause = document.querySelector('#btnPlayPause');
const btnMuteUnmute = document.querySelector('#btnMuteUnmute');

const player = new MediaPlayer({el: video, plugins: [
    new AutoPlay(), new AutoPause(),
]});

btnPlayPause.onclick = () => player.togglePlay();
btnMuteUnmute.onclick = () => player.toggleMute();

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message);
    })
}