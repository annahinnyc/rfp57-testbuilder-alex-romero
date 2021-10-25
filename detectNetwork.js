// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.

  //User Card Number Info
  var cnOnePrefix = cardNumber.slice(0, 1);
  var cnTwoPrefix = cardNumber.slice(0, 2);
  var cnThreePrefix = cardNumber.slice(0, 3);
  var cnFourPrefix = cardNumber.slice(0, 4);
  var cnSixPrefix = cardNumber.slice(0, 6);
  var cnLength = cardNumber.length;
  //Diner's Club Info
  var dcPrefix = [38, 39];
  var dcLength = 14;
  //American Express Info
  var axPrefix = [34, 37];
  var axLength = 15;
  //Visa Info
  var visaPrefix = 4
  var visaLength = [13, 16, 19];
  //MasterCard Info
  var mcPrefix = [51, 52, 53, 54, 55];
  var mcLength = 16;
  //Discover Info
  var discPrefix = [6011, 644, 645, 646, 647, 648, 649, 65];
  var discLength = [16, 19];
  //Maestro Info
  var moPrefix = [5018, 5020, 5038, 6304];
  var moLength = [12, 13, 14, 15, 16, 17, 18, 19];
  //Switch Info
  var switchPrefix = [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759];
  var switchLength = [16, 18, 19];

  if (parseInt(cnTwoPrefix) === dcPrefix[0] || parseInt(cnTwoPrefix) === dcPrefix[1] && cnLength === dcLength) {
    return "Diner's Club";
  } else if (parseInt(cnTwoPrefix) === axPrefix[0] || parseInt(cnTwoPrefix) === axPrefix[1] && cnLength === axLength) {
    return "American Express";
  }
  for (var k = 0; k < switchPrefix.length; k++) {
    var currPre = switchPrefix[k];
    if ((parseInt(cnFourPrefix) === currPre || parseInt(cnSixPrefix) === currPre) && (cnLength === 16 || cnLength === 18 || cnLength === 19)) {
      return 'Switch'
    }5
  }
  if ((parseInt(cnOnePrefix) === visaPrefix) && (cnLength === 13 ||cnLength === 16 || cnLength === 19)) {
    return "Visa";
  }
  if (mcPrefix.includes(parseInt(cnTwoPrefix)) && mcLength === cnLength) {
    return "MasterCard";
  }
  for (var i = 0; i < discPrefix.length; i++) {
    if (discPrefix[i] === parseInt(cnTwoPrefix)
      || cnThreePrefix.includes(discPrefix[i])
      || cnFourPrefix.includes(discPrefix[i])
      && discLength.includes(cnLength)) {
        return 'Discover';
      }
  }
  for (var j = 0; j < moPrefix.length; j++) {
    if (moPrefix[j] === parseInt(cnFourPrefix)
      && moLength.includes(cnLength)) {
        return 'Maestro';
      }
  }
  if ((cnSixPrefix >= 622126 && cnSixPrefix <= 622925)
  || (cnThreePrefix >= 624 && cnThreePrefix <= 626)
  || (cnFourPrefix >= 6282 && cnFourPrefix <= 6288)
  && cnLength >= 16 && cnLength <= 19) {
    return 'China UnionPay';
  }

  // if (parseInt(cnFourPrefix) === 4903 || parseInt(cnFourPrefix) === 4905 || parseInt(cnFourPrefix) === 4911 || parseInt(cnFourPrefix) === 4936 || parseInt(cnFourPrefix) === 6333 || parseInt(cnFourPrefix) === 6759 && cnLength === 16 || cnLength === 18 || cnLength === 19) {
  //   return 'Switch'
  // }
};