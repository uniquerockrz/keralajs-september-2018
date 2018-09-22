const asyncLib = require('async');

// waterfall

asyncLib.waterfall([
    async function () {
        // step 1   
    },
    async function(){
        // setp 2
    }
], () => {
    // final step
});

// each series
let arr = [ 1, 2, 3, 4, 5 ];

asyncLib.eachSeries(arr, (a) => {
    // step to do with a    
}, () => {
    // final step
});

// forever 

asyncLib.forever(function(){
    // step to run forever   
}, () => {
    // final step
});