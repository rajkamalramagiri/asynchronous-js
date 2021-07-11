console.log("start");

function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("we have the data");
      resolve({ email: email });
    }, 3000);
  });
}

function getUserVideos(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("getuservideos");
      resolve(["vid1", "vid2"]);
    }, 2000);
  });
}

function videoDetails(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("getviddetails");
      resolve("title of video");
    }, 2000);
  });
}

loginUser("ed", "bumba")
  .then((user) => {
    console.log(user);
    return getUserVideos(user.email);
  })
  .then((vid) => videoDetails(vid))
  .then((details) => console.log(details));
