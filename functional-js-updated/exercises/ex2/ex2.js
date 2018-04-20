//


// Exercise 1.
const output = console.log.bind(console);


// Exercise 2.
const ifTrueDo =
  (fn) => (predicate) => (...args) => {if (predicate(...args)) return fn(...args)};

const printIf = ifTrueDo(output);

// Exercise 3.
function negatationOf(predicate){
	return (...args) => !fn(...args);
}
function isShortEnough(str) {
	return str.length <= 5;
}
const isLongEnough = negationOf(isShortEnough);

var msg1 = "Hello";
var msg2 = msg1 + " World";

printIf(isShortEnough)(msg1);		// Hello
printIf(isShortEnough)(msg2);
printIf(isLongEnough)(msg1);
printIf(isLongEnough)(msg2);		// Hello World
