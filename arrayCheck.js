/* Create different variables, each containing either an array or a non-array value.
Now use isArray to check if each variable is an array.
Print a message to the console indicating whether each variable is an array or not. */

let name = "navid";
const friends = ["rasel", "nyon", "anuj", "tarif"];
const array = [];
let num1 = 10;

console.log (Array.isArray(name));
console.log (Array.isArray(friends));
console.log (Array.isArray(array));
console.log (Array.isArray(num1));