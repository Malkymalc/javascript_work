const x = 2;
var fns = [];

(function(){
	var x = 5;

	for (let i=0; i<x; i++) {
		const foo = function foo() {return i+1}
		fns.push(foo);
	}
})();

console.log(
	(x * 2) === fns[x*2]()
);
// true
