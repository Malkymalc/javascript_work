

// ===== Default Values and Gather/Spread Operator ===== //

// Default values can be any expression, including function invocations
// Function invocations could be used to dynamically pass in, for example,
// a unique id as default, either as backup if no unique id passed in, or
// just to make function invocations more concise.




// ===== Gather/Rest* & Spread Operators ===== //
// * Rest as in 'all the rest'.

//Rest (Gather) operator - assignment context ...x is a variable/placeholder,
// e.g. we are on the LHS of the expression.
Define as (...args), input is (x,y,z) ==> get [x,y,z];

// Spread operator - list/value context ...x is a value, e.g. we are on the RHS
// of the expression.
Define as [...args], input is [x,y,z] ==> get (  x,y,z  );

// Abstraction - seperating a thing into seperate parts (so that they can be
// thought about seperately/clearly). Remove distraction.

// Declaritive forms can be recognized and optimised for by engines -
// imperative forms (micro-management) cannot be.

// Spread will spread out anything that has an iterator. Both arrays and strings
// are iterable by default.

function ignore2nd3rdArgs(x,y,z,...rest) {
	return [x,...rest];
}

function bar() {
	var a1 = [ 2, 4 ];
	var a2 = [ 6, 8, 10, 12 ];

	return ignore2nd3rdArgs(...a1,...a2);
}

console.log(
	bar().join("") === "281012"
);
