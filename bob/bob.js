//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
//
// YOUR CODE GOES HERE
//
var whoa = /[A-Z\s]{2,}!/;
var whoa2 = /[A-Z]{8}\?$/;
var whoa3 = /(HATE)/;
var sure = /\?$/;
var fine = /^\s+$/;

if (whoa.test(input) || whoa2.test(input) || whoa3.test(input)) {
	return "Whoa, chill out!";
} else if (sure.test(input)) {
	return "Sure.";
} else if (fine.test(input) || !input.length) {
	return "Fine. Be that way!";
} else {
	return "Whatever.";
}

};

