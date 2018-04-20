
//======= Concise Properties and Methods =======//
var c = 'hello'

var obj = {
	a,
	b(){ },
	[c]: 42,
	[c+'fn'](){ },
	*foo(){ },
	*[c+'gn'](){ }
};

//======= Template Strings =======//
"This is a multi-\n\
line string"

"this is *not* a multi-\
line string"

`This is a multi-
line string`

`This is *not* a multi-\
line string`

// Template strings/literals are not actually templates
// (unless they are used in a function, which would then
// itself be the template). They are interpreted in place.
//interpoliterals --> interpolated string literal

// ****** Tag functions ******* //

function foo(strings,...values){
	// do your stuff (e.g. formatting) with these
	// before passing on to message variable.
}
var message  = foo`Hello ${world} ${num3}!`;
// There are already many libraries of tag functions
// that can be used to format interpolated strings...
// ...someone has created a JSX tag function that will
// translate HTML'd strings so that they don't need
// JSX transpiled.
// Also regex tag function.
// Tag functions are a Turing complete language.

// ******* Tag functions ******* //





//======= Exercise =======//
function upper(strings,...values) {}

var name = "kyle",
	twitter = "getify",
	classname = "es6 workshop";

console.log(
	`Hello ____ (@____), welcome to the ____!` ===
	"Hello KYLE (@GETIFY), welcome to the ES6 WORKSHOP!"
);
