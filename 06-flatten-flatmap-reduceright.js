var data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// "flattened" pattern outputs [1,2,3,4,5,6,7,8,9]
var flattenedData = data.reduce(function(acc, value) {
  return acc.concat(value);
}, []);
console.log(flattenedData);


var input = [
  {
    title: "Batman Begins",
    year: 2005,
    cast: [
      "Christian Bale",
      "Michael Caine",
      "Liam Neeson",
      "Katie Holmes",
      "Gary Oldman",
      "Cillian Murphy"
    ]
  },
  {
    title: "The Dark Knight",
    year: 2008,
    cast: [
      "Christian Bale",
      "Heath Ledger",
      "Aaron Eckhart",
      "Michael Caine",
      "Maggie Gyllenhal",
      "Gary Oldman",
      "Morgan Freeman"
    ]
  },
  {
    title: "The Dark Knight Rises",
    year: 2012,
    cast: [
      "Christian Bale",
      "Gary Oldman",
      "Tom Hardy",
      "Joseph Gordon-Levitt",
      "Anne Hathaway",
      "Marion Cotillard",
      "Morgan Freeman",
      "Michael Caine"
    ]
  }
];

// "flatmap" pattern turns a complex object into arrays and extracts to a list.
var stars = input.reduce(function(acc, value) {
  return acc.concat(value.cast);
}, []);
console.log(stars);

// "flatmap" pattern returning unique list
var stars = input.reduce(function(acc, value) {
	value.cast.forEach(function(star) {
		if (acc.indexOf(star) === -1) {
			acc.push(star);
		}
	});
	return acc;
}, []);
console.log(stars);

// Number concatenated with a string in JS is a string e.g 105
var data = [1, 2, 3, 4, "5"];
var sum = data.reduce(function(acc, value, index) {
  console.log(index);
  return acc + value;
}, 0);
console.log(sum);

// Avoid 105 issue above by counting down from 5. Use "reduceRight".
var data = [1, 2, 3, 4, "5"];
var sum = data.reduceRight(function(acc, value, index) {
  console.log(index);
  return acc + value;
}, 0);
console.log(sum);


