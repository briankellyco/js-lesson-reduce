'use strict'

/**
 * Demos how to reduce a path to provide safe default values and avoid exceptions when walking the same path 
 * on non-homogenous objects.
 *
 * Trick is we need the path we're going to follow down through the object e.g parents.father.jedi
 */
var luke = {
  name: "luke skywalker",
  jedi: true,
  parents: {
    father: {
      jedi: true
    },
    mother: {
      jedi: false
    }
  }
}

var han = {
  name: "han solo",
  jedi: false,
  parents: {
    father: {
      jedi: false
    },
    mother: {
      jedi: false
    }
  }
}

var anakin = {
  name: "anakin skywalker",
  jedi: true,
  parents: {
    mother: {
      jedi: false
    }
  }
}

var characters = [luke, han, anakin];

// Split returns an array... with "parents", "father" and "jedi".
// First time obj is the character we pass in... returning character.parents!!
// Second time obj is the parents object.... returning parents.father!!
// Last time obj passed in is father .... returning father.jedi status!!
// Where the object does not exist it returns "undefined" as in the case of "anakin".
function fatherWasJedi(character) {
  var path = "parents.father.jedi";
  return path.split(".").reduce(function(obj, field) {
    if (obj) {
      return obj[field];
    }
    return false;
  }, character);
}

characters.forEach(function(character) {
  console.log(character.name + "'s father was a jedi:", fatherWasJedi(character));
});

