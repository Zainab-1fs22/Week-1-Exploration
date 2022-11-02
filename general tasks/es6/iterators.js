var arr = ["red", "green", "blue"];

//ES5 -forloop
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.log("\n");

//ES6 - foreach
arr.forEach(function (itr) {
  console.log(itr);
});
