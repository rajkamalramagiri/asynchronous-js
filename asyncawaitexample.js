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

async function performTask() {
  try {
    const response = await userLogin("raj", 1235);

    const userAuthStatus = await goToHomePage(response);

    console.log(userAuthStatus);
  } catch (err) {
    console.log(err);
  }
}
performTask();
