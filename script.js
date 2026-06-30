// ===============================
// NAVBAR SAAT SCROLL
// ===============================

const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
});

// ===============================
// MENU RESPONSIF
// ===============================

const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    menuToggle.classList.toggle('active');
});

// Tutup menu saat link diklik
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show');
        menuToggle.classList.remove('active');
    });
});

// ===============================
// HERO SLIDER
// ===============================

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

setInterval(nextSlide, 4000);

// ===============================
// BACK TO TOP
// ===============================

const topBtn = document.getElementById('topBtn');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        topBtn.style.display = 'block';
    } else {
        topBtn.style.display = 'none';
    }
});

topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===============================
// LIGHTBOX GALERI
// ===============================

const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close');

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

// ===============================
// ANIMASI SCROLL
// ===============================

const elements = document.querySelectorAll('.card, .gallery-item, .timeline-item, .tentang-content, .contact-wrapper');

function reveal() {
    elements.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add('show');
        }
    });
}

window.addEventListener('scroll', reveal);
reveal();

// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===============================
// LOADING ANIMATION
// ===============================

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ===============================
// EFEK HOVER CARD
// ===============================

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.03)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// ===============================
// KONTAK FORM
// ===============================

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Terima kasih! Pesan Anda berhasil dikirim.');
    form.reset();
});

// ===============================
// TAHUN FOOTER OTOMATIS
// ===============================

const copyright = document.querySelector('.copyright');
if (copyright) {
    const year = new Date().getFullYear();
    copyright.innerHTML = `© ${year} Danau Paniai | Universitas Jenderal Soedirman`;
}