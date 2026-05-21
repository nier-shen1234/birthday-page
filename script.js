function showMessage() {
    const message = document.getElementById('surprise-message');
    if (message) {
        message.classList.remove('hidden');
    }
}

document.addEventListener('click', () => {
    const song = document.getElementById('birthday-audio');
    if (song && song.paused) {
        song.play().catch(error => {
            console.log("Audio autoplay was blocked by the browser:", error);
        });
    }
}, { once: true });
