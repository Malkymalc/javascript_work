function foo(x) {
	y++;
	z = x * y;
}

var y = 5, z;

foo(20);
z;		// 120

foo(25);
z;		// 175


// Exercise 1a.
function bar(currentX,currentY){
	// Store the current state of the variables that will be side-effected
	// (variables that we will borrow).
	const [yPre,zPre] = [currentY,z];
	// Set up the local varibles that foo() needs
	y = currentY;
	// Definition of impure function that produces side effects on borrowed variables.
	function foo(x) {
		y++;
		z = x * y;
	};
	// Run function producing side effects on the 'borrowed' variables
	foo(currentX);
	// Store/set side-effect results in new varialbes based on the state of
	// the 'borrowed' variables
	const [yNew,zNew] = [y,z];
	// Give back variables to outside state in the form
	// that they were taken.
	[y,z] = [yPre,zPre]
	// return our newly created result 'holder' variables.
	return [yNew,zNew];
}

// Exercise 1b.
function bar(currentX,currentY){
	// Make copies of the outside variables
	const [yInside,zInside] = [y,z];
	// create local copies of the variables that foo() is looking for.
	const [y,z] = [yInside,zInside];
	// Change foo so that it takes the inside copies of these variables
	function foo(x) {
		y++;
		z = x * y;
	}
	// run the side-effecting function
	foo(x);
	// return the side-effected (but internal) variables that the function effects.
	return [y,z];
}
