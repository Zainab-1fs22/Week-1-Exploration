//ES5
function sayHello1(name) {
  return "Hello " + name;
}
var sayHello2 = function (name) {
  return "Hello " + name;
};

var name1 = "Rose";
var name2 = "Jan";

console.log(sayHello1(name1));
console.log(sayHello2(name2));

//ES6

const add1 = (val1, val2) => {
  return `${val1} + ${val2} = ${val1 + val2}`;
};
const add2 = (val1, val2) => `${val1} + ${val2} = ${val1 + val2}`;

console.log(add1(17, 5));
console.log(add2(23, 6));
