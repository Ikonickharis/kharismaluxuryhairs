// Mobile nav toggle
document.getElementById('menu-toggle').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('show');
});

// Form validation
const form = document.getElementById('contactForm');
const msg = document.getElementById('formMsg');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      msg.textContent = 'All fields are required.';
      msg.style.color = 'red';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      msg.textContent = 'Enter a valid email.';
      msg.style.color = 'red';
    } else {
      msg.textContent = 'Message sent successfully!';
      msg.style.color = 'green';
      form.reset();
    }
  });
}

// Gallery carousel
const track = document.querySelector('.carousel-track');
const slides = Array.from(document.querySelectorAll('.carousel-slide'));
let currentSlide = 0;

document.querySelector('.next')?.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateCarousel();
});

document.querySelector('.prev')?.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateCarousel();
});

function updateCarousel() {
  const width = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${width * currentSlide}px)`;
}

