// Puedes agregar una ligera variación en velocidad o dirección
document.querySelectorAll('.wave').forEach((wave, index) => {
    wave.style.animationDuration = `${8 + index}s`;
});
