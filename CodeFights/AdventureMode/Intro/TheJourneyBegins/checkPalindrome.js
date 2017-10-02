// Given the string, check if it is a palindrome.

function checkPalindrome(inputString) {
  var count = 1;
  for (var i = 0; i < inputString.length / 2; i++){
    if (inputString[i] == inputString[inputString.length - count]){
      count++;
    }
    else return false;
  }
  return true;
}
