console.log("Hello, \n");
console.log("Starting of the program");

console.log("Line 1 ");

setTimeout(function () {
  console.log("Line 2");
  console.log("setTimeout 1: Event Loop at 1000 millisecond");
}, 1000);

console.log("Line 3");

setTimeout(function () {
  console.log("\nsetTimeout 2: Event Loop at 0 millisecond");
}, 0);

Promise.resolve()
  .then(function () {
    console.log("\npromise 1");
  })
  .then(function () {
    console.log("promise 2");
  });

console.log("3 other Promises");

Promise.resolve()
  .then(function () {
    console.log("promise 3");
  })
  .then(function () {
    console.log("promise 4");
  })
  .then(function () {
    console.log("promise 5");
  });

//control + option + N => output
