const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt User to select Media Stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getUserMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.onplay();
    };
  } catch (error) {
    // catch error here
    console.log("whoops, error here", error);
  }
}

//onload
selectMediaStream();
