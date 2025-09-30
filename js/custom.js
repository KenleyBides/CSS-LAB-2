// Custom JavaScript
// STEP 15: Call up the carousel using the id, and use the .Carousel() method to create the options object
const carouselCars = document.querySelector("#carouselExample");

const carousel = new bootstrap.Carousel(carouselCars, {
    interval: 5000, // STEP 16: Change the interval to 5 seconds
    wrap: false
});

// STEP 17: Try an event handler to zoom up the .carousel-caption after the slide completes sliding
carouselCars.addEventListener('slide.bs.carousel', event => {
    document.querySelector(".carousel-caption").classList.remove("zoomit");
});

carouselCars.addEventListener('slid.bs.carousel', event => {
    document.querySelector(".carousel-caption").classList.add("zoomit");
});

// Lab 2
carouselCars.addEventListener('keydown', event => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
    }
});
