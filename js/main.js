// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Stats Counter Animation
const statNumbers = document.querySelectorAll('.stat-number');
const statsSection = document.querySelector('.stats');

function animateStats() {
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        let current = 0;
        const increment = target / 50;
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                stat.innerText = Math.ceil(current);
                setTimeout(updateCounter, 20);
            } else {
                stat.innerText = target;
            }
        };
        updateCounter();
    });
}

// Intersection Observer for Stats
if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    observer.observe(statsSection);
}

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== "#") {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Sticky Navbar Background Change
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'white';
        navbar.style.backdropFilter = 'none';
    }
});

// Gallery Filtering and Lightbox
if (document.querySelector('.gallery-grid')) {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = '<span class="close-lightbox">&times;</span><img src="" alt="Lightbox">';
    document.body.appendChild(lightbox);
    const lightboxImg = lightbox.querySelector('img');
    const closeLightbox = lightbox.querySelector('.close-lightbox');
    
    // Filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');
            
            galleryItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Lightbox functionality
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            lightboxImg.src = imgSrc;
            lightbox.classList.add('active');
        });
    });
    
    closeLightbox.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });
}

// Admission Form Submission
const admissionForm = document.getElementById('admissionForm');
if (admissionForm) {
    admissionForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your application! Our admissions office will contact you shortly.');
        admissionForm.reset();
    });
}

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Your message has been sent successfully. We will get back to you soon!');
        contactForm.reset();
    });
}

// Newsletter Form Submission
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        alert(`Thank you for subscribing with ${email}! You will receive our updates.`);
        newsletterForm.reset();
    });
}

// Add animation on scroll for elements
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.feature-card, .curriculum-card, .department-card, .facility-card, .value-card, .event-card, .announcement-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
};

animateOnScroll();

// Simple placeholder for images that fail to load
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        this.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
    });
});

// Add current year to footer dynamically
const yearSpan = document.querySelector('.footer-bottom p');
if (yearSpan) {
    const currentYear = new Date().getFullYear();
    yearSpan.innerHTML = `&copy; ${currentYear} Mahawilacchiya National School. All rights reserved.`;
}
