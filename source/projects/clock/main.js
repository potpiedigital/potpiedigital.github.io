const main = document.getElementById('main');

let seconds = 0;
let minutes = 0;
let hours = 0;

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
            minutes = 0 + minutes;
        }
    }
     // else if (minutes < 10) {
        // minutes = '0' + minutes;
     // }
     // console.log(seconds.toString());

    main.innerText = hours + ':' + minutes + ':' + seconds;
}, 1000);

let x = 2;
let y = 3;
let z = 4;
console.log('five is ' + (x+y) + ' and not ' + (2* x+y));
function stingDisplay(argument) {
    // body...
    console.log(x.toString())
}


