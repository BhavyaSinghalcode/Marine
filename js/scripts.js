const leftBtn = document.querySelector('.scroll-btn.left');
const rightBtn = document.querySelector('.scroll-btn.right');
const imageSlider = document.querySelector('.image-slider');
const images = document.querySelectorAll('.image-slider .image-item');

let scrollAmount = 0;
const imageWidth = images[0].offsetWidth + 10; // Correct width of each image including margin

// Function to move the slider
function moveSlider() {
    imageSlider.style.transform = `translateX(-${scrollAmount}px)`;
}

leftBtn.addEventListener('click', () => {
    scrollAmount -= imageWidth;
    if (scrollAmount < 0) {
        // If scrolling past the first image, loop to the last image
        scrollAmount = imageWidth * (images.length - 1);
    }
    moveSlider();
});

rightBtn.addEventListener('click', () => {
    scrollAmount += imageWidth;
    if (scrollAmount >= imageWidth * images.length) {
        // If scrolling past the last image, loop to the first image
        scrollAmount = 0;
    }
    moveSlider();
});



function showAnswer() {
    const answer = document.getElementById('quiz-answer');
    answer.classList.toggle('hidden');
}
console.log('Welcome to Ocean Life Exploration!');


const fish = document.getElementById('fishcur');

// Follow the cursor
document.addEventListener('mousemove', (event) => {
  const x = event.pageX;
  const y = event.pageY;
  fish.style.left = x + 'px';
  fish.style.top = y + 'px';
});
