const userLogin = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Performing user Authentication");
      if (username == "raj" && password == 123) {
        resolve("user authenticated");
      } else {
        reject("authenticaton failed");
      }
    }, 1000);
  });
};

function goToHomePage(userAuthStatus) {
  return Promise.resolve(`Go to Homepage as: ${userAuthStatus}`);
}

userLogin("raj", 123)
  .then((response) => {
    console.log("validating user");
    return goToHomePage(response);
  })
  .then((userAuthStatus) => {
    console.log(userAuthStatus);
  })
  .catch((err) => {
    console.log(err);
  });
