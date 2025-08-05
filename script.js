const certificates = [
  'certificates/cert1.jpg',
  'certificates/cert2.jpg',
  'certificates/cert3.jpg',
  'certificates/cert4.jpg',
  'certificates/cert5.jpg',
  'certificates/cert6.jpg',
  'certificates/cert7.jpg',
  'certificates/cert8.jpg',
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
