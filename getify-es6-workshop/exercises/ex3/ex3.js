
//======= Destructuring =======//

// Pulling out and ssigning walues from an array (destructuring the array)
var [a, b, c = 23, ..rest] = [10,undefined,undefined,30,40,50]
	==> a = 10, b = undefined, c = 23, rest = [30,40,50]

// Swap values of variables
var x = 10, y = 20;
[x,y] = [y,x];

// Throw away values + rest and spread
var arrX = ['scrub1',1,2,3];
[ , ,...iDontWantNoScrubs] = ['scrub2',...arrX,]

console.log(iDontWantNoScrubs);

//
var data = [1,2,3,[4,5,6],7,8,9];

var a,b,c,theRest;

[
	a,
	defaultsLikeThis = 2*1,
	theNumberThree,
	[
		yourDestructuring,
		needsToMatch,
		theStructureOfTheData
	],
	,
	youCanMissOutDetailsYouDoNotWhat,
	byUsingAComma
]
= data || []

// Pass through of assignment
// destructuring adds values to the variables specified, but the assigned
// data is still there and is passed on *complete* to x in the example below...
var x = [a,b] = data;
console.log(a);		// 1
console.log(b);		// 2
console.log(x);		// [1,2,3,[4,5,6],7,8,9];
// ...thus destructuring can be chained:
var a,b,c,x,y,z,rest;
[a,b,...c] = [x,y,,[,,,],,z] = data;

//======= Object Destructuring =======//
// instead of index numbers (implicit) in the array destructure, that must match
//the array we are destructuring, we use the property names of the object we are destructuring.

// Variables that do not have a match in the data return undefined value, which
// will then invoke any default value assigned.

// We can use concise notation here, if the variable we want to attach matches the
//value we want to matck...
// or we can use the semi-colon notation (a: x) to, as here, assign value a to var x.

var obj = {a: 5, b: 10, c: 15, d:{e:20}};

var {
	a = 10,
	b: X = 42,
	c,
	d: X,
	d: Y,
	d: {
		e
	} = {}
} = obj || {}

//======= All the Young Dudes =======//

function iCouldGetARecordPlayerAnd(){
	(function *a(){
		console.log('...generate the music that makes you feel better');
	})();
}

//======= Exercise =======//
function ajax(url,cb) {
	// fake ajax response:
	cb({
		foo: 2,
		baz: [ 6, 8, 10 ],
		bam: {
			qux: 12
		}
	});
}

function check(data) {
	console.log(
		56 === (
			data.foo +
			data.bar +
			data.baz[0] + data.baz[1] + data.baz[2] +
			data.bam.qux +
			data.bam.qam
		)
	);
}

var defaults = {
	foo: 0,
	bar: 4,
	bam: {
		qux: 0,
		qam: 14
	}
};

function response() {

	check({

	});

}

ajax("http://fun.tld",response);
