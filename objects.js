var _ = require('underscore');

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }; // use this object to test your functions

// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

function keys(obj) {
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
  return _.keys(obj);
}
console.log(keys(testObject));

function values(obj) {
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values
  return _.values(obj);
}
console.log(values(testObject));

function mapObject(obj, cb) {
  // Like map for arrays, but for objects. Transform the value of each property in turn by passing it to the callback function.
  // http://underscorejs.org/#mapObject
  return _.mapObject(obj);
}
console.log(mapObject(testObject));

function pairs(obj) {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  return _.pairs(obj);
}
console.log(pairs(testObject));

/* STRETCH PROBLEMS */

function invert(obj) {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  return _.invert(obj);
}
console.log(invert(testObject));

function defaults(obj, defaultProps) {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  return _.defaults(obj, {flavor: "vanilla", sprinkles: "lots"});
}
console.log(default(testObject));
