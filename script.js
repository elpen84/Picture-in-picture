const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt User to select Media Stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getUserMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // catch error here
    console.log("whoops, error here", error);
  }
}

button.addEventListener("click", async () => {
  // Disable button
  button.disabled = true;
  // start picture in picture
  await videoElement.requestPictureInPicture();
  // reset Button
  button.disabled = false;
});

//onload
selectMediaStream();
