//Async code example

// the below code the value will be printed undefined before execution of setTimeout fn
console.log("start");
let x;
function value() {
  setTimeout(() => {
    return 5;
  }, 5000);
}

console.log(value());
console.log("End");
