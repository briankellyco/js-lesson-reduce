'use strict'

/*
 * ALWAYS pass an initialised accumulator to "reduce" function e.g "{}" for objects
 *
 * Strings are object literals
 */ 
var data = ["vote1","vote2","vote3","vote4"];

function reducer(accumulator, value) {
	if (accumulator[value]) {
		accumulator[value] = accumulator[value] + 1;
	} else {
		accumulator[value] = 1;
	}
	return accumulator;
}

var tally = data.reduce(reducer, {});

console.log(tally);
