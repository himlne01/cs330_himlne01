/* jshint esversion: 8 */
/* jshint node: true */
'use strict';

function first() {
    console.log(1);
}

function second() {
    return 2;
} 
//console.log(second) returns [function]

function printWithTimeout() {
    setTimeout(function() {
        console.log(4);
    }, 500);
}

function printImmediately() {
    console.log(5);
}

//printWithTimeout();
//printImmediately();

function sleep(duration, f) {
    console.log(`I slept for ${duration} seconds`);
    f();
}

function rudeAwakening() {
    console.log("And I woke up.");
}

// sleep(6, rudeAwakening);
// sleep(9, function() {console.log("And woke up happy.");});

function outsider() {
    let duration = 7;
    function insider() {
        console.log(`I slept for ${duration} minutes.`);
    }
    insider();
}

// outsider();

function done(activity) {
    return function() {
        console.log(`Done ${activity}.`);
    };
}

// sleep(5, done("sleeping"));

var doneBound = function(activity) {
    console.log(`Done with ${activity}`);
};

// doneBound; Nothing
// sleep(5, doneBound.bind(this, "sleeping"));

var add1 = (function () {
    var counter =0;
    return function() {counter += 1; return counter;};
})(); 

console.log(add1());
console.log(add1());
console.log(add1());

function makeAdder(x) {
    return function (y) {
        console.log(`${x} + ${y} = ${x + y}`);
        return x + y;
    };
}

var add4 = makeAdder(4);
var add744 = makeAdder(744);
console.log(add4(330));
console.log(add744(330));

// twitter_object.get("search/tweets", params, function(err, data, response) {
//     if (!err) {
//         Process(data);
//     }
// });


