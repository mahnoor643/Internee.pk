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



// Testimonial slider

const testimonials = document.querySelectorAll('.testimonial-each-card');
const testimonialContent = document.querySelector('.testimonial-content');
let currentIndex = 0;

function showTestimonials() {
    const offset = -currentIndex * 50; // Slide by 50% to show two cards
    testimonialContent.style.transform = `translateX(${offset}%)`;
}

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentIndex < testimonials.length - 2) { // Ensure only two cards are shown at a time
        currentIndex++;
    }
    showTestimonials();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    }
    showTestimonials();
});

showTestimonials(); // Initialize with first two testimonials