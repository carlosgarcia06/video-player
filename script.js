let video = document.getElementById("video");
let play = document.getElementById("play");
let pause = document.getElementById("pause");
let backward = document.getElementById("backward");
let forward = document.getElementById("forward");

play.addEventListener("click", handlePlay);
pause.addEventListener("click", handlePause);

function handlePlay() {
    video.play();
    play.hidden = true;
    pause.hidden = false;
    console.log("Le diste click al boton de play");
}

function handlePause() {
    video.pause();
    pause.hidden = true;
    play.hidden = false;
    console.log("Le diste click al boton de pausa");
}

backward.addEventListener("click", handleBackward);

function handleBackward() {
    video.currentTime = video.currentTime - 10;
    console.log("Para atrás 10 segundos", video.currentTime)
}

forward.addEventListener("click", handleForward);

function handleForward() {
    video.currentTime = video.currentTime + 10;
    console.log("Para adelante 10 segundos", video.currentTime)
}

let progress = document.getElementById("progress");
video.addEventListener("loadedmetadata", handleLoaded);
video.addEventListener("timeupdate", handleTimeUpdate);

function handleLoaded() {
    progress.max = video.duration;
    console.log("Ha cargado mi video", video.duration);
}

function handleTimeUpdate() {
    progress.value = video.currentTime;
    // console.log("Tiempo actual", video.currentTime);
}

progress.addEventListener("input", handleInput);

function handleInput() {
    video.currentTime = progress.value;
    console.log(progress.value)
}