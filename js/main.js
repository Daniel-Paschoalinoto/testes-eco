const downloadBtn = document.querySelector('.js-download-btn');
const clickSound = document.getElementById('click-sound');

downloadBtn.addEventListener('click', (event) => {
    clickSound.currentTime = 0;
    clickSound.play().catch(e => console.error("Error playing sound:", e));
});

document.addEventListener('contextmenu', event => event.preventDefault());

const openWarningModalBtn = document.getElementById('openWarningModal');
const warningModal = document.getElementById('warningModal');
const closeButton = document.querySelector('.close-button');

openWarningModalBtn.addEventListener('click', () => {
    warningModal.classList.remove('hidden');
});

closeButton.addEventListener('click', () => {
    warningModal.classList.add('hidden');
});

warningModal.addEventListener('click', (event) => {
    if (event.target === warningModal) {
        warningModal.classList.add('hidden');
    }
});