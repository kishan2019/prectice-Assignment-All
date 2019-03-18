const items = [1, 2, 3, 4, 5, 5]; // use this array to test your code. 
/*
  Complete the following functions.
  These functions only need to work with arrays.
  A few of these functions mimic the behavior of the `Built` in JavaScript Array Methods.
  The idea here is to recreate the functions from scratch BUT if you'd like,
  feel free to Re-use any of your functions you build within your other functions.
  **DONT** Use for example. .forEach() to recreate each, and .map() to recreate map etc.
  You CAN use concat, push, pop, etc. but do not use the exact method that you are replicating
*/

function each(elements, callback) {
  // Do NOT use forEach to complete this function.
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  // You should also pass the index into `cb` as the second argument
  // based off http://underscorejs.org/#each
  for(let i = 0; i < elements.length; i++){
      callback(elements[i], i);
  }
}

function cb(elem, i){
  console.log(elem);
  }
each(items,cb);



function map(elements, callback) {
  // Do NOT use .map, to complete this function.
  // How map works: Map calls a provided callback function once for each element in an array, in order, and functionructs a new array from the res .
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
  let temp =[];
  for(let i = 0; i < elements.length; i++){
       temp.push(callback(elements[i]));
 }
 return temp;
}

function triplet(elem){
  return elem * 3;
  }
  
map([1,2,3,4,5],triplet);




function reduce( cb,elements, startingValue) {
  // Do NOT use .reduce to complete this function.
  // How reduce works: A reduce function combines all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb` along with the `startingValue`.
  // `startingValue` should be the first argument passed to `cb` and the array element should be the second argument.
  // `startingValue` is the starting value.  If `startingValue` is undefined then make `elements[0]` the initial value.
  let temp = [];
  for(let i=0;i< elements.length;i++){
       if(cb(elements[i] && i+1 > startingValue)){
         temp.push(elements[i]);
       }
  }
  return temp;
}
function sum(elem){
  return elem % 2 === 0;
  }
reduce(sum,items,1);





function find(elements,item, cb) {
  // Do NOT use .includes, to complete this function.
  // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.
         console.log(cb(elements,item));
  }
function checkelem(elements , item){
for(let i=0; i < elements.length; i++){
  if(elements[i] === item) return true;
 }
 return "undefind";
}
find([1,2,3,4,5],6,checkelem);




function filter(elements, cb) {
  // Do NOT use .filter, to complete this function.
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test
  let temp =[];
  for(let i=0; i< elements.length; i++){
      if(cb(elements[i])){
        temp.push(elements[i]);
      }
  }
  return temp;
}

function even(element){
       return (element % 2 !== 0); 
  }

filter([1,2,3,4,5], even);


const nestedArray = [1, [2], [[3]], [[[4]]]]; // use this to test 'flatten'

function flatten(elements ,callback) {
  // Flattens a nested array (the nesting can be to any depth).
  // Hint: You can solve this using recursion.
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  ///arr1.reduce((acc, val) => acc.concat(val), []);// [1, 2, 3, 4]
  console.log(callback(elements));
}

function cb(nestedArray){
  var arr1 = [1, 2, [[3]], 4];
  for(let i=0; i< arr1.length; i++){
  while(Array.isArray(arr1[i])){
  arr1 = [].concat(...arr1);
   }
  }
  return arr1;
}
flatten(nestedArray, cb)
 