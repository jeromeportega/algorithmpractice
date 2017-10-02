// Given an array of strings, return another array containing all of its longest strings.

function allLongestStrings(inputArray) {
    var max = inputArray[0].length;
    var bigStrings = [];

    for (var i = 1; i < inputArray.length; i++) {
        if (max < inputArray[i].length) max = inputArray[i].length;
    }

    for (var i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length == max) bigStrings.push(inputArray[i]);
    }

    return bigStrings;
}
