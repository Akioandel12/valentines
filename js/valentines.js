const buttonHeight = 50;
const buttonWidth = 150;
const maxWidth = window.innerWidth - buttonWidth;
const maxHeight = window.innerHeight - buttonHeight;
let scaleFactor = 1;
let currentLabelIndex = 0;

// Array of different labels for the "no" button
const noButtonLabels = [
    "Subukan mo lang iclick ito, sampal ka saakin",
    "Di moko love",
    "Please choose me",
    "Aba, mayabang ka",
    "Wala ka roses saakin",
    "Sige, sige",
    "Magclick ng No panget"
    // Add more labels as needed
];

window.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('button');

    noButton.addEventListener('click', () => {
        scaleFactor += 0.4;
        yesButton.style.transform = `scale(${scaleFactor})`;

        // Update the text content of the "no" button
        if (currentLabelIndex < noButtonLabels.length - 1) {
            currentLabelIndex++;
        } else {
            // Reset to the first label if all labels have been used
            currentLabelIndex = 0;
        }
        noButton.textContent = noButtonLabels[currentLabelIndex];
    });

    noButton.addEventListener('touchstart', (event) => {
        event.preventDefault();
        scaleFactor += 0.4;
        yesButton.style.transform = `scale(${scaleFactor})`;

        // Update the text content of the "no" button
        if (currentLabelIndex < noButtonLabels.length - 1) {
            currentLabelIndex++;
        } else {
            // Reset to the first label if all labels have been used
            currentLabelIndex = 0;
        }
        noButton.textContent = noButtonLabels[currentLabelIndex];
    });
});