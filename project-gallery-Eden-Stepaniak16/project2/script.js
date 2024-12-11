const audioFile = document.querySelector("#audio-file");
const playBtn = document.querySelector("#play-btn");
const forwardBtn = document.querySelector("#forward-btn");
const backwardBtn = document.querySelector("#backward-btn");
const seekSlider = document.querySelector("#seek-slider");
const currentTimeDisplay = document.querySelector("#current-time");
const durationDisplay = document.querySelector("#duration");

playBtn.addEventListener("click", () => {
  if (audioFile.paused) {
    audioFile.play();
    playBtn.textContent = "⏸";
  } else {
    audioFile.pause();
    playBtn.textContent = "▶";
  }
});

forwardBtn.addEventListener("click", () => {
  audioFile.currentTime += 15;
});

backwardBtn.addEventListener("click", () => {
  audioFile.currentTime -= 15;
});
audioFile.addEventListener("timeupdate", () => {
  seekSlider.value = (audioFile.currentTime / audioFile.duration) * 100;

  currentTimeDisplay.textContent = formatTime(audioFile.currentTime);
});
seekSlider.addEventListener("input", () => {
  audioFile.currentTime = (seekSlider.value / 100) * audioFile.duration;
});

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
}

audioFile.addEventListener("loadedmetadata", () => {
  durationDisplay.textContent = formatTime(audioFile.duration);
});
