let currentIndex = 0;
const slideInterval = 3000; // Change slide every 3 seconds
const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;

// Function to show the current slide
function showSlide(index) {
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    slides.style.transform = `translateX(${-currentIndex * 100}%)`;
}

// Function to move slide based on direction
function moveSlide(direction) {
    showSlide(currentIndex + direction);
}

// Automatic slide function
function autoSlide() {
    setInterval(() => {
        showSlide(currentIndex + 1);
    }, slideInterval);
}

// Start the automatic sliding
autoSlide();

// Show the first slide initially
showSlide(currentIndex);
