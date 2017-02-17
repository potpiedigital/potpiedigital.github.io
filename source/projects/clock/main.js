const main = document.getElementById('main');

let seconds = '0';
let minutes = '0';
let hours = '0';

setInterval(function () {
    seconds++;
    if (seconds >= 60) {
        minutes++;
        seconds = 0;
        if (minutes >= 60) {
            hours++;
            minutes = 0;
        }
        if (minutes < 10) {
            minutes = '0 + minutes';
        }
    }
    main.innerText = hours + ':' + minutes + ':' + seconds;
}, 1000);
