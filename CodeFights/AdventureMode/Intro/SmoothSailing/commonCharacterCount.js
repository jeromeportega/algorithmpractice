// Given two strings, find the number of common characters between them.

function commonCharacterCount(s1, s2) {
    letterCount1 = {};
    letterCount2 = {};
    var sum = 0;

    for (var i = 0; i < s1.length; i++) {
        if (s1[i] in letterCount1) letterCount1[s1[i]]++;
        else letterCount1[s1[i]] = 1;
    }

    for (var i = 0; i < s2.length; i++) {
        if (s2[i] in letterCount2) letterCount2[s2[i]]++;
        else letterCount2[s2[i]] = 1;
    }

    for (key in letterCount1) {
        if (key in letterCount2) {
            if (letterCount1[key] > letterCount2[key]) sum += letterCount2[key];
            else if (letterCount1[key] < letterCount2[key]) sum += letterCount1[key];
            else sum += letterCount1[key];
        }
    }

    return sum;
}
