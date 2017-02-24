'use strict'

function increment(input) { return input + 1;}
function decrement(input) { return input - 1; }
function double(input) { return input * 2; }
function halve(input) { return input / 2; }

/** 
 * Use array reduction to create functional pipelines by composing arrays of functions.
 * 
 * Pipeline - a series of functions that gets applied to some initial value in order to return some final value.
 * Useful for stream computing, big data and simple js stuff :)
 * 
 */ 
var initial_value = 1;

var pipeline = [
  increment,
  increment,
  increment,
  double,
  increment,
  increment,
  halve
];

// Make the pipeline work by returning an application of the function to the accumulator. Like unix pipes.
var final_value = pipeline.reduce(function(acc, fn) {
  return fn(acc);
}, initial_value);
console.log(final_value);

// Runs the "halve" function first and works backward
var reversed = pipeline.reduceRight(function(acc, fn) {
  return fn(acc);
}, initial_value)

console.log(final_value, reversed);
