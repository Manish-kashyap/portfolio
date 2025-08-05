// Particles.js
particlesJS('particles-js', {
  particles: {
    number: { value: 30, density: { enable: true, value_area: 800 } },
    color: { value: ['#D4AF37', '#8B7500'] },
    shape: { type: 'circle' },
    opacity: { value: 0.3, random: true },
    size: { value: 2, random: true },
    line_linked: { enable: false },
    move: { enable: true, speed: 0.8, direction: 'none', random: true }
  },
  interactivity: {
    detect_on: 'canvas',
    events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } },
    modes: { repulse: { distance: 100 }, push: { particles_nb: 4 } }
  }
});

// Smooth Scroll
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
    this.classList.add('active');
  });
});

// Section Header Animation
const headers = document.querySelectorAll('h2');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.3 });
headers.forEach(header => observer.observe(header));

// Skill Progress Animation
const progressFills = document.querySelectorAll('.progress-fill');
const progressObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      progressFills.forEach(fill => {
        fill.style.width = fill.getAttribute('data-width');
      });
      progressObserver.disconnect();
    }
  });
}, { threshold: 0.5 });
progressObserver.observe(document.querySelector('.skill-progress'));

// Testimonial Carousel
const testimonialSlides = document.querySelectorAll('.testimonial-slide');
let currentTestimonial = 0;
testimonialSlides[0].classList.add('active');
function showTestimonial(index) {
  testimonialSlides.forEach(slide => slide.classList.remove('active'));
  testimonialSlides[index].classList.add('active');
}
document.getElementById('t-prev').onclick = () => {
  currentTestimonial = (currentTestimonial - 1 + testimonialSlides.length) % testimonialSlides.length;
  showTestimonial(currentTestimonial);
  resetTestimonialInterval();
};
document.getElementById('t-next').onclick = () => {
  currentTestimonial = (currentTestimonial + 1) % testimonialSlides.length;
  showTestimonial(currentTestimonial);
  resetTestimonialInterval();
};
let testimonialInterval = setInterval(() => {
  currentTestimonial = (currentTestimonial + 1) % testimonialSlides.length;
  showTestimonial(currentTestimonial);
}, 5000);
function resetTestimonialInterval() {
  clearInterval(testimonialInterval);
  testimonialInterval = setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonialSlides.length;
    showTestimonial(currentTestimonial);
  }, 5000);
}

// Certificate Slideshow
const certificates = [
  'certificates/cert1.jpg',
  'certificates/cert2.jpg',
  'certificates/cert3.jpg',
  'certificates/cert4.jpg',
  'certificates/cert5.jpg',
  'certificates/cert6.jpg',
  'certificates/cert7.jpg',
  'certificates/cert8.jpg'
];
let currentCert = 0;
const certImg = document.getElementById('cert-slide');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
function updateCertificate() {
  certImg.classList.remove('fade-in');
  setTimeout(() => {
    certImg.src = certificates[currentCert];
    certImg.alt = `Achievement Certificate ${currentCert + 1}`;
    certImg.classList.add('fade-in');
  }, 500);
}
function showPrev() {
  currentCert = (currentCert - 1 + certificates.length) % certificates.length;
  updateCertificate();
  resetAutoSlide();
}
function showNext() {
  currentCert = (currentCert + 1) % certificates.length;
  updateCertificate();
  resetAutoSlide();
}
prevBtn.onclick = showPrev;
nextBtn.onclick = showNext;
let slideInterval = setInterval(showNext, 4000);
function resetAutoSlide() {
  clearInterval(slideInterval);
  slideInterval = setInterval(showNext, 4000);
}
updateCertificate();

// Scroll-to-Top Button
const scrollTopBtn = document.querySelector('.scroll-top');
window.addEventListener('scroll', () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
scrollTopBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Form Modal
const modal = document.querySelector('.modal');
const openModalBtn = document.querySelector('.open-modal');
const closeModalBtn = document.querySelector('.close-modal');
openModalBtn.onclick = () => modal.style.display = 'block';
closeModalBtn.onclick = () => modal.style.display = 'none';
window.onclick = (e) => { if (e.target == modal) modal.style.display = 'none'; };

// Form Success Feedback
const form = document.getElementById('contact-form');
const successMessage = document.querySelector('.form-success');
form.addEventListener('submit', (e) => {
  setTimeout(() => {
    successMessage.style.display = 'block';
    setTimeout(() => { successMessage.style.display = 'none'; modal.style.display = 'none'; }, 3000);
  }, 1000);
});
