// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScrollTop = scrollTop;
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.service-card, .gallery-item, .testimonial-card, .about-content, .contact-content');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Contact Form Handling with Formspree
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    // Show loading state while form submits to Formspree
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.innerHTML = '<span class="loading"></span> Sending...';
    submitBtn.disabled = true;
    
    // Let Formspree handle the form submission
    // The form will redirect to Formspree's success page or your thank-you page
});

// Gallery lightbox effect
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        const img = this.querySelector('img');
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <span class="lightbox-close">&times;</span>
                <img src="${img.src}" alt="${img.alt}">
                <div class="lightbox-caption">${this.querySelector('h4').textContent}</div>
            </div>
        `;
        
        document.body.appendChild(lightbox);
        document.body.style.overflow = 'hidden';
        
        // Close lightbox
        const closeBtn = lightbox.querySelector('.lightbox-close');
        closeBtn.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
        
        function closeLightbox() {
            document.body.removeChild(lightbox);
            document.body.style.overflow = '';
        }
        
        // Add ESC key support
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && document.querySelector('.lightbox')) {
                closeLightbox();
            }
        });
    });
});

// Add lightbox styles dynamically
const lightboxStyles = `
    .lightbox {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
    }
    
    .lightbox-content {
        position: relative;
        max-width: 90%;
        max-height: 90%;
        text-align: center;
    }
    
    .lightbox-content img {
        max-width: 100%;
        max-height: 80vh;
        object-fit: contain;
        border-radius: 10px;
    }
    
    .lightbox-close {
        position: absolute;
        top: -40px;
        right: 0;
        color: white;
        font-size: 30px;
        cursor: pointer;
        z-index: 10001;
    }
    
    .lightbox-caption {
        color: white;
        font-size: 18px;
        margin-top: 20px;
        font-family: 'Playfair Display', serif;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;

// Add styles to head
const styleSheet = document.createElement('style');
styleSheet.textContent = lightboxStyles;
document.head.appendChild(styleSheet);

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero-background');
    if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Loading animation for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
        
        // If image is already loaded (cached)
        if (img.complete) {
            img.classList.add('loaded');
        }
    });
});

// Add image loading styles
const imageStyles = `
    img {
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    img.loaded {
        opacity: 1;
    }
`;

const imageStyleSheet = document.createElement('style');
imageStyleSheet.textContent = imageStyles;
document.head.appendChild(imageStyleSheet);

// Phone number formatting
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length >= 6) {
            value = value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
        } else if (value.length >= 3) {
            value = value.replace(/(\d{3})(\d{0,3})/, '($1) $2');
        }
        e.target.value = value;
    });
}

// Add scroll-to-top button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #d4a574 0%, #b8956a 100%);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    font-size: 18px;
    box-shadow: 0 4px 15px rgba(212, 165, 116, 0.3);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
`;

document.body.appendChild(scrollToTopBtn);

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.opacity = '1';
        scrollToTopBtn.style.visibility = 'visible';
    } else {
        scrollToTopBtn.style.opacity = '0';
        scrollToTopBtn.style.visibility = 'hidden';
    }
});

// Scroll to top functionality
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add hover effect to scroll to top button
scrollToTopBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-3px)';
    this.style.boxShadow = '0 6px 20px rgba(212, 165, 116, 0.4)';
});

scrollToTopBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
    this.style.boxShadow = '0 4px 15px rgba(212, 165, 116, 0.3)';
});

// Hero Background Slider Functionality
let currentHeroSlideIndex = 0;

// Function to get current hero slides
function getHeroSlides() {
    return document.querySelectorAll('.hero-slide');
}

// Function to show specific hero slide
function showHeroSlide(index) {
    const heroSlides = getHeroSlides();
    
    // Remove active class from all hero slides
    heroSlides.forEach(slide => slide.classList.remove('active'));
    
    // Add active class to current hero slide
    if (heroSlides[index]) {
        heroSlides[index].classList.add('active');
        console.log('Showing slide', index + 1, 'of', heroSlides.length);
    }
    
    currentHeroSlideIndex = index;
}

// Function to go to next hero slide
function nextHeroSlide() {
    const heroSlides = getHeroSlides();
    const totalHeroSlides = heroSlides.length;
    
    if (totalHeroSlides > 0) {
        currentHeroSlideIndex = (currentHeroSlideIndex + 1) % totalHeroSlides;
        showHeroSlide(currentHeroSlideIndex);
    }
}

// Auto-play hero slider
let heroAutoPlayInterval;

function startHeroAutoPlay() {
    // Wait a bit for images to load, then start auto-play
    setTimeout(() => {
        heroAutoPlayInterval = setInterval(nextHeroSlide, 4000); // Change slide every 4 seconds
        console.log('Hero slider auto-play started');
    }, 1000);
}

function stopHeroAutoPlay() {
    clearInterval(heroAutoPlayInterval);
}

// Initialize hero slider when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Reinitialize hero slides after DOM is loaded
    const heroSlidesUpdated = document.querySelectorAll('.hero-slide');
    
    // Start auto-play if hero slides exist
    if (heroSlidesUpdated.length > 0) {
        console.log('Found', heroSlidesUpdated.length, 'hero slides');
        
        // Ensure first slide is active
        heroSlidesUpdated.forEach((slide, index) => {
            slide.classList.remove('active');
            if (index === 0) {
                slide.classList.add('active');
            }
        });
        
        // Start the slider
        startHeroAutoPlay();
        
        // Pause auto-play on hover (optional)
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            heroSection.addEventListener('mouseenter', stopHeroAutoPlay);
            heroSection.addEventListener('mouseleave', startHeroAutoPlay);
        }
    } else {
        console.log('No hero slides found');
    }
});

// Image Slider Functionality (for other sliders if any)
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

// Function to show specific slide
function showSlide(index) {
    // Remove active class from all slides and dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Add active class to current slide and dot
    if (slides[index]) {
        slides[index].classList.add('active');
    }
    if (dots[index]) {
        dots[index].classList.add('active');
    }
    
    currentSlideIndex = index;
}

// Function to go to next slide
function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
    showSlide(currentSlideIndex);
}

// Function to go to previous slide
function prevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentSlideIndex);
}

// Function to change slide (called by navigation buttons)
function changeSlide(direction) {
    if (direction === 1) {
        nextSlide();
    } else {
        prevSlide();
    }
}

// Function to go to specific slide (called by dots)
function currentSlide(index) {
    showSlide(index - 1); // Convert to 0-based index
}

// Auto-play slider
let autoPlayInterval;

function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

// Initialize slider when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Start auto-play if slides exist
    if (slides.length > 0) {
        showSlide(0); // Show first slide
        startAutoPlay();
        
        // Pause auto-play on hover
        const sliderContainer = document.querySelector('.slider-container');
        if (sliderContainer) {
            sliderContainer.addEventListener('mouseenter', stopAutoPlay);
            sliderContainer.addEventListener('mouseleave', startAutoPlay);
        }
    }
});

// Keyboard navigation for slider
document.addEventListener('keydown', function(e) {
    if (slides.length > 0) {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    }
});

// Touch/swipe support for mobile
let startX = 0;
let endX = 0;

const sliderWrapper = document.querySelector('.slider-wrapper');
if (sliderWrapper) {
    sliderWrapper.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
    });
    
    sliderWrapper.addEventListener('touchmove', function(e) {
        endX = e.touches[0].clientX;
    });
    
    sliderWrapper.addEventListener('touchend', function() {
        const diffX = startX - endX;
        const threshold = 50; // Minimum swipe distance
        
        if (Math.abs(diffX) > threshold) {
            if (diffX > 0) {
                nextSlide(); // Swipe left - go to next slide
            } else {
                prevSlide(); // Swipe right - go to previous slide
            }
        }
    });
}

// Gallery Filter Functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (filterButtons.length > 0 && galleryItems.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                // Filter gallery items
                galleryItems.forEach(item => {
                    const category = item.getAttribute('data-category');
                    
                    if (filter === 'all' || category === filter) {
                        item.classList.remove('hidden');
                        item.style.display = 'block';
                    } else {
                        item.classList.add('hidden');
                        item.style.display = 'none';
                    }
                });
                
                console.log('Gallery filtered by:', filter);
            });
        });
    }
});

// Enhanced Gallery Lightbox (improved version)
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('.gallery-img');
            const title = this.querySelector('.gallery-overlay h4').textContent;
            const description = this.querySelector('.gallery-overlay p').textContent;
            
            const lightbox = document.createElement('div');
            lightbox.className = 'gallery-lightbox';
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <span class="lightbox-close">&times;</span>
                    <img src="${img.src}" alt="${img.alt}">
                    <div class="lightbox-info">
                        <h3>${title}</h3>
                        <p>${description}</p>
                    </div>
                </div>
            `;
            
            document.body.appendChild(lightbox);
            document.body.style.overflow = 'hidden';
            
            // Close lightbox
            const closeBtn = lightbox.querySelector('.lightbox-close');
            closeBtn.addEventListener('click', closeLightbox);
            lightbox.addEventListener('click', function(e) {
                if (e.target === lightbox) {
                    closeLightbox();
                }
            });
            
            function closeLightbox() {
                document.body.removeChild(lightbox);
                document.body.style.overflow = '';
            }
            
            // Add ESC key support
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && document.querySelector('.gallery-lightbox')) {
                    closeLightbox();
                }
            });
        });
    });
});

// Add gallery lightbox styles
const galleryLightboxStyles = `
    .gallery-lightbox {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.95);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
    }
    
    .gallery-lightbox .lightbox-content {
        position: relative;
        max-width: 90%;
        max-height: 90%;
        text-align: center;
        background: white;
        border-radius: 15px;
        overflow: hidden;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    }
    
    .gallery-lightbox .lightbox-content img {
        max-width: 100%;
        max-height: 70vh;
        object-fit: contain;
        display: block;
    }
    
    .gallery-lightbox .lightbox-close {
        position: absolute;
        top: 15px;
        right: 20px;
        color: white;
        font-size: 30px;
        cursor: pointer;
        z-index: 10001;
        background: rgba(0, 0, 0, 0.5);
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
    }
    
    .gallery-lightbox .lightbox-close:hover {
        background: rgba(0, 0, 0, 0.8);
        transform: scale(1.1);
    }
    
    .gallery-lightbox .lightbox-info {
        padding: 20px;
        background: white;
    }
    
    .gallery-lightbox .lightbox-info h3 {
        font-family: 'Playfair Display', serif;
        font-size: 1.5rem;
        color: #333;
        margin-bottom: 10px;
    }
    
    .gallery-lightbox .lightbox-info p {
        color: #666;
        line-height: 1.6;
        margin: 0;
    }
`;

// Add gallery styles to head
const galleryStyleSheet = document.createElement('style');
galleryStyleSheet.textContent = galleryLightboxStyles;
document.head.appendChild(galleryStyleSheet);

console.log('Saffron Caterers website loaded successfully!');
