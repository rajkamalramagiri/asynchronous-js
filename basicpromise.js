//basic promise

const promise = new Promise((resolve, reject) => {
  console.log("Async task in promise execution");
  if (true) {
    resolve();
  } else {
    reject();
  }
});

promise.then(
  () => {
    console.log("passed");
  },
  () => {
    console.log("failed");
  }
);

//basic promise with arguments

const promise1 = new Promise((resolve, reject) => {
  console.log("Async task in promise1 execution");
  if (false) {
    const person = { name: "raj" };
    resolve(person);
  } else {
    const error = { errCode: "1001" };
    reject(error);
  }
});

promise1.then(
  (val) => {
    console.log(val);
  },
  (err) => {
    console.log(err);
  }
);

// use catch instead of reject

promise1
  .then((val) => {
    console.log(val);
  })
  .catch((err) => console.log(err));
