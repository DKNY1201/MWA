/**
 * Created by Bi on 10/2/17.
 */
'use strict';


// Fix the slow function to be asynchronous/non blocking
function slow() {
    process.nextTick(function () {
        for (let i = 0; i <= 5e8; i++ ){}
    });
    if (Math.random() > 0.5) {
        return "Error";
    }
    return {id: 12345};
}
console.log(slow());


// Palindrome String
var isPalindrome = function(str, callback) {
    process.nextTick(() => {
        var strLen = str.length;
        if (strLen === 0 || strLen === 1) {
            return callback(true);
        }

        if (str[0] === str[strLen - 1]) {
            return isPalindrome( str.slice(1, strLen - 1), callback );
        }

        return callback(false);
    })
};

var isPalindrome1 = function(str, callback) {
    setImmediate(() => {
        var strLen = str.length;
        if (strLen === 0 || strLen === 1) {
            return callback(true);
        }

        if (str[0] === str[strLen - 1]) {
            return isPalindrome( str.slice(1, strLen - 1), callback );
        }

        return callback(false);
    })
};

isPalindrome('madam', result => console.log(result));
isPalindrome1('madam1', result => console.log(result));
console.log('Done');