// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.  Given a ticket number n, determine if it's lucky or not.

function isLucky(n) {
    var numString = n.toString();
    sum1 = 0;
    sum2 = 0;

    for (var i = 0; i < numString.length / 2; i++) {
        sum1 += Number(numString[i]);
    }

    for (var i = numString.length / 2; i < numString.length; i++) {
        sum2 += Number(numString[i]);
    }

    console.log(sum1);
    console.log(sum2);

    if (sum1 == sum2) return true;
    else return false;

    console.log(numString);
}
