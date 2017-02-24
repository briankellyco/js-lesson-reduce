'use strict'


// add items up and then we 'calculated' it into the mean. Not a purely functional programming approach.
function reducer(accumulator, value) {
	return accumulator + value;
}

var data = [1,2,3,4,5,3,1];
var sum = data.reduce(reducer, 0);
console.log(sum / data.length);

// mean via a more pure functional programming approach
// The javascript "reduce" function will accept a callback which may possess 4 arguments
// e.g https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
function reducer2(accumulator, value, index, array) {
	var intermediaryValue = accumulator + value;
	if (index === array.length - 1) {
		return intermediaryValue / array.length;
	}
	return accumulator + value;
}

var data2 = [1,2,3,4,5,3,1];
var mean = data2.reduce(reducer2, 0);
console.log(mean);



