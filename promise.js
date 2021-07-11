const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("got user");
    resolve({ user: "raj" });
  }, 2000);
});

promise.then((user) => {
  console.log(user);
});
