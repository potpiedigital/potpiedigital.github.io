
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



const mainSeconds = document.getElementById('seconds');
const mainMinutes = document.getElementById('minutes');
const mainHours = document.getElementById('hours');

const now = new Date();

let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

function numberAsString(num) {
    if (num < 10) {
        return '0' + num.toString();
    }
    return num.toString();
}
function updateElement(element,text) {
    element.innerText=text;
}
if (hours>=13){
    hours = hours - 12;
}
updateElement(mainSeconds, numberAsString(seconds));
updateElement(mainMinutes, numberAsString(minutes));
updateElement(mainHours, numberAsString(hours));

setInterval(function () {
    seconds++;
    if (seconds >=60){
        minutes++;
        seconds=0;
        if (minutes>=60){
            hours++;
            minutes=0;
            if (hours>=13){
                hours = hours - 12;
            }
            updateElement(mainHours,numberAsString(hours));
        }
        updateElement(mainMinutes,numberAsString(minutes));
    }
    updateElement(mainSeconds,numberAsString(seconds));
},1000);

// new fucntion update (hours, minutes, seconds just as numbers )
// updates the correct elements at the correct time.

