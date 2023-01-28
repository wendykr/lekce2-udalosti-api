// tady je místo pro náš program

let odstavec = document.querySelector('.odstavec');

function changeColor () {
    let odstavec = document.querySelector('.odstavec');

    odstavec.classList.toggle('cervena');
}

function increaseFont() {
    let velikost = document.querySelector('.odstavec');
    
    let styles_applied = getComputedStyle(velikost);

    let size = parseFloat(styles_applied.fontSize);
    size++;
    velikost.style.fontSize = size + "px";
}

let player = document.querySelector('.prehravac');

function spustAudio() {
    player.play();
}

function zastavAudio() {
    player.pause();
}

function resetAudio() {
    player.currentTime = 0;
}

function muteAudio() {
    player.volume = 0.0;
}

function halfMuteAudio() {
    player.volume = 0.5;
}

function unmuteAudio() {
    player.volume = 1.0;
}