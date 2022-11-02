function greeting(name) {
  console.log("\n--Greeting executes");
  morningMessage(name);
}

function getUsername() {
  console.log("--getUsername executes");
  var username = "Lebron";
  morningMessage(username);
}

function printUsername(name) {
  console.log("--printUsername executes");
  console.log(name);
}

function morningMessage(name) {
  console.log("--morningMessage executes");
  console.log("\n" + sayHi());
  printUsername(name);
  console.log("Good Morning");
}

function sayHi() {
  console.log("--sayHi executes");
  return "Hi! ";
}
getUsername();
greeting("Belle");
