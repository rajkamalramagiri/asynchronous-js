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

async function displayUser() {
  const loggedUser = await loginUser("raj", 122);
  console.log(loggedUser);

  const videos = await getUserVideos(loggedUser.email);

  console.log(videos);

  const details = await videoDetails(videos[0]);

  console.log(details);
}
displayUser();
