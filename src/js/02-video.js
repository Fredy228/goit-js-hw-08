import Vimeo from "@vimeo/player";
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
const playerCurrentTime = Number(localStorage.getItem("videoplayer-current-time")) ;

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

    player.on('timeupdate', throttle(setTimeLocalstorage, 1000));

    function setTimeLocalstorage({seconds}) {
        localStorage.setItem("videoplayer-current-time", seconds);
    };

    player.setCurrentTime(playerCurrentTime).then(function(seconds) {
        // seconds = the actual time that the player seeked to
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;
    
            default:
                // some other error occurred
                break;
        }
    });
