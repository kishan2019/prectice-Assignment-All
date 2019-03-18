// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {};
let myFunction = () => {};
console.log(myFunction);


// let anotherFunction = function (param) {
//   return param;
// };
let anotherFunction = (param) => {
    return param;
};
console.log(anotherFunction(10));

// let add = function (param1, param2) {
//   return param1 + param2;
// };

let add = ((param1, param2) => {
            return param1 + param2;
        });
        console.log(add(1,2));

        // let subtract = function (param1, param2) {
        //   return param1 - param2;
        // };
        let subtract = (param1, param2) => {
                return param1 - param2;
              };
         console.log(subtract(1,2));

        // exampleArray = [1,2,3,4];
        // const triple = exampleArray.map(function (num) {
        //   return num * 3;
        // });
        exampleArray = [1,2,3,4];
        const triple = exampleArray.map(num => num *3);
         console.log(triple);
