
// testing functions
function assert(condition, message) {
    if (!condition) {
        console.log(message);
    }
}

// assert (true===true, 'condition should be true');
// assert (true===false, 'true should not equal false');
function numberAsString(num) {
    if (num < 10) {
        return '0' + num.toString();
    }
    return num.toString();
}
assert(numberAsString(2)==='02', 'numberAsString(2) should return \'02\'');
assert(numberAsString(10)==='10', 'numberAsString(10) should return \'10\'');
