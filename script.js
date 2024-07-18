// for animating heading
const texts = ["Get a competitive job", "On your desire domain", "Gives hands on experience"];
let currentTextIndex = 0;

function changeText() {
    const typingElement = document.getElementById("typing-text");
    typingElement.textContent = texts[currentTextIndex];
    typingElement.classList.remove("typing");

    // Trigger a reflow to restart the animation
    void typingElement.offsetWidth;

    typingElement.classList.add("typing");

    currentTextIndex = (currentTextIndex + 1) % texts.length;
}

setInterval(changeText, 6000); // Change text every 6 seconds

// Initialize with the first text
changeText();








