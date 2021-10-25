/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';

//Number Generator Function
function generate(n) {
  var add = 1, max = 19 - add;   // 12 is the min safe number Math.random() can generate without it starting to pad the end with zeros.
  if ( n > max ) { return generate(max) + generate(n - max); }
  max = Math.pow(10, n+add);
  var min = max/10; // Math.pow(10, n) basically
  var number = Math.floor( Math.random() * (max - min + 1) ) + min;
  return ("" + number).substring(add);
}

// describe('Introduction to Mocha Tests - READ ME FIRST', function() {
//   // A Mocha test is just a function!
//   // If the function throws an error when run, it fails.
//   // If it doesn't throw an error when run, it doesn't fail.
//   // To read more about mocha, visit mochajs.org

//   // Once you've read and understood this section, please comment it out.
//   // You will not be able to proceed with a failing test.

//   it('Throws an error so it fails', function() {
//     throw new Error('Delete me!');
//   });

//   it('Doesn\'t throw an error, so it doesn\'t fail', function() {
//     // This test doesn't really test anything at all! It will pass no matter what.
//     var even = function(num){
//       return num/2 === 0;
//     }
//     return even(10) === true;
//   });

//   // In tests, we want to compare the expected behavior to the actual behavior.
//   // A test should only fail if the expected behavior doesn't match the actual.
//   it('Throws an error when expected behavior does not match actual behavior', function() {
//     var even = function(num){
//       return num/2 === 0;
//     }

//     if(even(10) !== true) {
//       throw new Error('10 should be even!');
//     }
//   });
// });
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {

    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true.
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }

  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it.
  //   http://chaijs.com/
  var assert = chai.assert;


  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others.
  // If you want to know more, check out the documentation.
  //   http://chaijs.com/api/bdd/
  var should = chai.should();

  it('has a prefix of 51 and a length of 16', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });

  it("has a prefix of 52 and a length of 16", function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });

  it("has a prefix of 53 and a length of 16", function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });


  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten
  // these tests to pass using should syntax, refactor your tests to
  // use either expect or should, but not both.
  var should = chai.should();

  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal("MasterCard");
  });

  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal("MasterCard");
  })

});

describe('Discover', function() {
  var should = chai.should();
  var discPrefix = [6011, 644, 645, 646, 647, 648, 649, 65];
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  it('has a prefix of 6011 and a length of 16', function() {
    detectNetwork('6011109238746565').should.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 19', function() {
    detectNetwork('6011012983476565748').should.equal('Discover');
  });

  for (var prefix = 644; prefix <= 649; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        detectNetwork(prefix.toString() + '1234567890987').should.equal('Discover');
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        detectNetwork(prefix.toString() + '1234567890987234').should.equal('Discover');
      });
    })
    (prefix)
  };

  it('has a prefix of 65 and a length of 16', function() {
    detectNetwork((65 + (Math.floor(10000000000000 + Math.random() * 90000000000000)).toString())).should.equal('Discover');
  });
  it('has a prefix of 65 and a length of 19', function() {
    detectNetwork((65 + (Math.floor(10000000000000000 + Math.random() * 90000000000000000)).toString())).should.equal('Discover');
  })
});

describe('Maestro', function() {
  var should = chai.should();
  for (var length = 12; length <= 19; length++) {
    var maestroRemainder = generate(length - 4);
    (function(length, maestroRemainder) {
      it('has a prefix of 5018 and length of ' + length, function() {
        detectNetwork("5018" + maestroRemainder).should.equal('Maestro');
      });
      it('has a prefix of 5020 and length of ' + length, function() {
        detectNetwork("5020" + maestroRemainder).should.equal('Maestro');
      });
      it('has a prefix of 5038 and length of ' + length, function() {
        detectNetwork("5038" + maestroRemainder).should.equal('Maestro');
      });
      it('has a prefix of 6304 and length of ' + length, function() {
        detectNetwork("6304" + maestroRemainder).should.equal('Maestro');
      })
    })
    (length, maestroRemainder);
  }
});

describe('China UnionPay', function() {
  var should = chai.should();
  for (var sixPrefix = 622126; sixPrefix <= 622925; sixPrefix++) {
    for (var length = 16; length <= 19; length++) {
      var sixRemainder = generate(length - 6);
    }
    (function(currPre) {
      it('has a prefix of ' + currPre + ' and a length of 16', function() {
        detectNetwork(currPre.toString() + '1092387456').should.equal('China UnionPay');
      });
      it('has a prefix of ' + currPre + ' and a length of 17', function() {
        detectNetwork(currPre.toString() + '10923874456').should.equal('China UnionPay');
      });
      it('has a prefix of ' + currPre + ' and a length of 18', function() {
        detectNetwork(currPre.toString() + '109238567456').should.equal('China UnionPay');
      });
      it('has a prefix of ' + currPre + ' and a length of 19', function() {
        detectNetwork(currPre.toString() + '1674092387456').should.equal('China UnionPay');
      });
    })
    (sixPrefix);
  }

  for (var threePrefix = 624; threePrefix <= 626; threePrefix++) {
    (function(currPre) {
      it('has a prefix of ' + currPre + ' and a length of 16', function() {
        detectNetwork((currPre.toString() + '4310923847456')).should.equal('China UnionPay');
      });
      it('has a prefix of ' + currPre + ' and a length of 17', function() {
        detectNetwork((currPre.toString() + '97435109238474')).should.equal('China UnionPay');
      });
      it('has a prefix of ' + currPre + ' and a length of 18', function() {
        detectNetwork((currPre.toString() + '109238474565643')).should.equal('China UnionPay');
      });
      it('has a prefix of ' + currPre + ' and a length of 19', function() {
        detectNetwork((currPre.toString() + '3456710923847456')).should.equal('China UnionPay');
      });
    })
    (threePrefix);
  }

  for (var fourPrefix = 6282; fourPrefix <= 6288; fourPrefix++) {
    (function(currPre) {
      it('has a prefix of ' + currPre + ' and a length of 16', function() {
        detectNetwork((currPre.toString() + '310923847456')).should.equal('China UnionPay');
      });
      it('has a prefix of ' + currPre + ' and a length of 17', function() {
        detectNetwork((currPre.toString() + '3510923847456')).should.equal('China UnionPay');
      });
      it('has a prefix of ' + currPre + ' and a length of 18', function() {
        detectNetwork((currPre.toString() + '62384745656439')).should.equal('China UnionPay');
      });
      it('has a prefix of ' + currPre + ' and a length of 19', function() {
        detectNetwork((currPre.toString() + '671357680923847')).should.equal('China UnionPay');
      });
    })
    (fourPrefix);
  }
});

describe('Switch', function() {
  var should = chai.should();
  var switchPrefix = [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759];
  var switchLength = [16, 18, 19];
  for (var i = 0; i < switchPrefix.length; i++) {
    var currPrefix = switchPrefix[i];
    for (var j = 0; j < switchLength.length; j++) {
      var currLen = switchLength[j];
      var cardNumRemainder = generate(currLen - currPrefix.toString().length);
      (function(currentPrefix, currentLength, remainder) {
        it('has a prefix of ' + currentPrefix + ' and a length of ' + currentLength, function() {
          detectNetwork((currentPrefix.toString() + remainder)).should.equal('Switch');
        })
      })
      (currPrefix, currLen, cardNumRemainder);
    }
  }
})

// var moPrefix = [5018, 5020, 5038, 6304];
//   //Number Generator Function
//   function generate(n) {
//     var add = 1, max = 12 - add;   // 12 is the min safe number Math.random() can generate without it starting to pad the end with zeros.

//     if ( n > max ) {
//             return generate(max) + generate(n - max);
//     }

//     max = Math.pow(10, n+add);
//     var min = max/10; // Math.pow(10, n) basically
//     var number = Math.floor( Math.random() * (max - min + 1) ) + min;

//     return ("" + number).substring(add);
// }
//  for (var length = 12; length <= 19; length++) {
//    for (var i = 0; i < moPrefix.length; i++) {
//      var remainder = length - moPrefix[i].toString().length;
//      var prefix = moPrefix[i];
//      var dumbyNumber = (prefix.toString() + generate(remainder));
//     (function(length, prefix, dumbyNumber) {
//       it('has a prefix of ' + prefix + ' and a length of ' + length, function() {
//         detectNetwork((dumbyNumber).toString()).should.equal('Maestro');
//       })
//     })
//     (length, prefix);
//    }