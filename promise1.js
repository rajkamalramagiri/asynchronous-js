const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("got user");
    reject(new Error("user not logged in"));
  }, 2000);
});

promise
  .then((user) => {
    console.log(user);
  })
  .catch((err) => console.log(err.message));
