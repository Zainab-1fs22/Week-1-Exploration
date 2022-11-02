function greeting(name) {
  morningMessage(name);
}

function getUsername() {
  var username = "Lebron";
  morningMessage(username);
}

function printUsername(name) {
  console.log(name);
}

function morningMessage(name) {
  console.log("\n" + sayHi());
  printUsername(name);
  console.log("Good Morning");
}

function sayHi() {
  return "Hi! ";
}
getUsername();
greeting("Belle");
