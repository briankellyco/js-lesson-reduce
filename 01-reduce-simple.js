'use strict'

/**
 * the "reduce" function is available on all arrays. Always returns a single value. Reduce will iterate 
 * each item in an array.
 *
 * the "accumulator" is the single value that aggregates the result of each iteration that happens during a
 * reduce operation. It will be the "initialValue" during the first iteration.
 */
//var data = [];
var data = [15,3,20];

var reducer = function(accumulator, item) {
	return accumulator + item;
};

var initialValue = 0;

var total = data.reduce(reducer, initialValue);

console.log(total);
