/*Eloquent JavaScript, 3rd Edition;
Chapter 3: Functions;
Minimum;*/

//Assume that a prior function verified that the parameters are actually numbers before being passed to min()

function min(x, y) {
	if (x < y) {
		console.log(`${x} is the lowest value`);
}	else if (x > y) {
		console.log(`${y} is the lowest value`);
}	else {
		console.log(`The values are equal`);
}
}