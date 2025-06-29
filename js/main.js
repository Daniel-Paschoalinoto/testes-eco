const downloadBtn = document.querySelector('.js-download-btn');
const clickSound = document.getElementById('click-sound');

downloadBtn.addEventListener('click', (event) => {
    console.log('Button clicked!');
    clickSound.currentTime = 0; // Rewind to the start
    clickSound.play().catch(e => console.error("Error playing sound:", e));
});