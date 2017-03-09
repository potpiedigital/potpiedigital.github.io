
// testing functions
function assert(condition, message) {
    if (!condition) {
        console.log(message);
    }
}

// assert (true===true, 'condition should be true');
// assert (true===false, 'true should not equal false');
assert(numberAsString(2)==='02', 'numberAsString(2) should return \'02\'');
assert(numberAsString(10)==='10', 'numberAsString(10) should return \'10\'');



// const main = document.getElementById('main');
// const now = new Date();

// let seconds = now.getSeconds();
// let minutes = now.getMinutes();
// let hours = now.getHours();

// function numberAsString(num) {
//     if (num < 10) {
//         return '0' + num.toString();
//     }
//     return num.toString();
// }

// setInterval(function () {
//     seconds++;
//     if (seconds >=60){
//         minutes++;
//         seconds=0;
//     }
//     if (minutes>=60){
//         hours++;
//         minutes=0;
//     }
//     if (hours>=13){
//         hours = hours - 12;
//     }
//     main.innerText = numberAsString(hours) + ':' + numberAsString(minutes) + ':' + numberAsString(seconds);
// }, 1000);


// seconds
const mainSeconds = document.getElementById('seconds');
const now = new Date();
let seconds = now.getSeconds();

function numberAsString(num) {
    if (num < 10) {
        return '0' + num.toString();
    }
    return num.toString();
}

setInterval(function () {
    seconds++;
    if (seconds >=60){
        minutes++;
        seconds=0;
    }
    // if (minutes>=60){
    //     hours++;
    //     minutes=0;
    // }
    // if (hours>=13){
    //     hours = hours - 12;
    // }
    main.innerText = ':' + numberAsString(seconds);
},1000);

// minutes

const mainMinutes = document.getElementById('minutes');
let minutes = now.getMinutes();

function numberAsString(num) {
    if (num < 10) {
        return '0' + num.toString();
    }
    return num.toString();
}

setInterval(function () {
    // seconds++;
    // if (seconds >=60){
    //     minutes++;
    //     seconds=0;
    // }
    if (minutes>=60){
        hours++;
        minutes=0;
    }
    minutes.innerText = numberAsString(minutes) + ':';
},1);

// Hours
const mainHours = document.getElementById('hours');
let hours = now.getHours();

setInterval(function () {
    // seconds++;
    // if (seconds >=60){
    //     minutes++;
    //     seconds=0;
    // }
    // if (minutes>=60){
    //     hours++;
    //     minutes=0;
    // }
    if (hours>=13){
        hours = hours - 12;
    }
    main.innerText = numberAsString(hours) + ':' + numberAsString(minutes) + ':' + numberAsString(seconds);
},1);

