const main = document.getElementById('main');

let seconds = 0;
let minutes = 0;
let hours = 0;

setInterval(function () {
    if (seconds < 10)
    console.log(0 + seconds.toString());
        // if (seconds < 10) {
            // seconds = '0 + seconds';
        // }
    seconds++;
    if (seconds >= 60) {
        minutes++;
        seconds = 0;
        if (minutes >= 60) {
            hours++;
            minutes = 0;
        }
        if (minutes < 10) {
            minutes = 0 + minutes;
        }
    }
     // else if (minutes < 10) {
        // minutes = '0' + minutes;
     // }
     // console.log(seconds.toString());

    main.innerText = hours + ':' + minutes + ':' + seconds;
}, 1000);

function stingDisplay() {
    // body...
    console.log(seconds.toString())
}


