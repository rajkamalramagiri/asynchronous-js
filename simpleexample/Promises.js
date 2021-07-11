const number = (num) => {
  let p = new Promise((res, rej) => {
    if (num === 2) return res(num);
    else return rej("Not 2");
  });
  return p;
};
let promises = number(2);
promises
  .then((result) => result + result)
  .then((result) => console.log(`result : ${result},${result}`))
  .catch((error) => console.log(`Error : ${error}`));
