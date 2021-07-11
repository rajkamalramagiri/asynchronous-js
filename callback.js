console.log("start");
// callback means sending function as an argument to another function and it will be called from that function
function loginUser(email, password, callback) {
  setTimeout(() => {
    console.log("now we have value");
    callback({ userEmail: email });
  }, 5000);
}

const userName = loginUser("raj@gamcil.com", 1234, (user) => {
  console.log(user);
});

console.log("finish");
