'use strict'

var data = [1,2,3];

// we 'map' one array into a new array. Iterating the items only once.
// acc = accumulator...
var doubled = data.reduce(function(acc, value) {
	acc.push(value * 2);
	return acc;
}, []);

console.log('my doubled data: ', doubled);


var data2 = [1,2,3,4,5,6];
var evens = data2.reduce(function(acc, value) {
	if (value % 2 === 0) {
		acc.push(value);
	}
	return acc;
}, []);

var evenFiltered = data2.filter(function(item) {
	return (item % 2 === 0);
});

// Chaining functions. Concise and readable. Always good. But you pass over the objects twice.
var filterMapped = data2.filter(function(value) {
	return value % 2 === 0;
}).map(function(value) {
	return value * 2;
});
console.log('my filterMapped: ', filterMapped);


var bigData = [];
for (var i = 0; i < 1000000; i++) {
	bigData[i] = i;
}

// Performance of reduce is higher than chained functions.
console.time('bigData');
var filterMappedBigData = bigData.filter(function(value) {
	return value % 2 === 0;
}).map(function(value) {
	return value * 2;
});
console.timeEnd('bigData');

console.time('bigDataReduce');
var reducedBigData = bigData.reduce(function(acc, value) {
	if (value % 2 === 0) {
		acc.push(value * 2);
	}
	return acc;
}, []);
console.timeEnd('bigDataReduce');



