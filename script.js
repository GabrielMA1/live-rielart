/* ============================================ */
/* RIELART - MAIN JAVASCRIPT                    */
/* ============================================ */
/* EDIT: This file handles all animations and   */
/* interactions. Modify with care.              */
/* ============================================ */

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide Icons
    lucide.createIcons();

    // Create floating particles
    createParticles();

    // Initialize GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Initialize all animations and interactions
    initHeroAnimations();
    initScrollAnimations();
    initNavigation();
    initMobileMenu();
    initFormHandling();
    initServiceFocus();
});

/* ============================================ */
/* PARTICLE BACKGROUND                          */
/* ============================================ */
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (10 + Math.random() * 10) + 's';

        // Vary particle sizes slightly
        const size = 1 + Math.random() * 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';

        container.appendChild(particle);
    }
}

/* ============================================ */
/* HERO ANIMATIONS                              */
/* ============================================ */
function initHeroAnimations() {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.to('.hero-headline', { opacity: 1, y: 0, duration: 1, delay: 0.3 })
      .to('.hero-desc', { opacity: 1, y: 0, duration: 0.8 }, '-=0.6')
      .to('.hero-ctas', { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
      .to('.hero-stats', { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
      .to('.hero-service-choices', { opacity: 1, y: 0, duration: 0.8 }, '-=0.4');
}

/* ============================================ */
/* SCROLL ANIMATIONS                            */
/* ============================================ */
function initScrollAnimations() {
    // Reveal animations for all sections
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach((element) => {
        gsap.fromTo(element,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            }
        );
    });

    // Service group cards stagger animation
    gsap.fromTo('.service-group-card',
        { opacity: 0, y: 50, rotateX: 10 },
        {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '#services',
                start: 'top 70%'
            }
        }
    );

    // Service choice cards in hero
    gsap.fromTo('.service-choice-card',
        { opacity: 0, y: 30 },
        {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.hero-service-choices',
                start: 'top 90%'
            }
        }
    );

    // Sub-service items stagger
    gsap.fromTo('.sub-service',
        { opacity: 0, x: -20 },
        {
            opacity: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.service-group-card',
                start: 'top 70%'
            }
        }
    );

    // Project cards
    gsap.fromTo('.project-card',
        { opacity: 0, x: -50 },
        {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '#work',
                start: 'top 70%'
            }
        }
    );

    // Testimonial cards
    gsap.fromTo('.testimonial-card',
        { opacity: 0, y: 40, scale: 0.95 },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '#testimonials',
                start: 'top 70%'
            }
        }
    );

    // Process nodes
    gsap.fromTo('.process-step',
        { opacity: 0, y: 30 },
        {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '#process',
                start: 'top 70%'
            }
        }
    );
}

/* ============================================ */
/* NAVIGATION                                   */
/* ============================================ */
function initNavigation() {
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.classList.add('nav-blur');
        } else {
            navbar.classList.remove('nav-blur');
        }
    }, { passive: true });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/* ============================================ */
/* MOBILE MENU                                  */
/* ============================================ */
function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const closeBtn = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (!menuBtn || !closeBtn || !mobileMenu) return;

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.add('open');
        document.body.style.overflow = 'hidden';
    });

    closeBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
    });

    // Close menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            document.body.style.overflow = '';
        });
    });

    // Close menu on outside click
    mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) {
            mobileMenu.classList.remove('open');
            document.body.style.overflow = '';
        }
    });
}

/* ============================================ */
/* FORM HANDLING - AJAX (No redirect)           */
/* ============================================ */
function initFormHandling() {
    // Form submission is handled by handleFormSubmit() inline on the form
}

// Global function called by form onsubmit
function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    // Show loading state
    submitBtn.innerHTML = '<span class="flex items-center justify-center gap-2">Sending... <svg class="animate-spin w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg></span>';
    submitBtn.disabled = true;

    // Submit via AJAX
    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
    })
    .then(response => {
        if (response.ok) {
            // Show thank you message
            form.innerHTML = `
                <div class="text-center py-8">
                    <div class="w-16 h-16 rounded-full bg-gradient-brand flex items-center justify-center mx-auto mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h3 class="font-display font-bold text-2xl mb-3">Thank You!</h3>
                    <p class="text-brand-gray">Your message has been submitted. We'll get back to you as soon as possible.</p>
                </div>
            `;
        } else {
            throw new Error('Form submission failed');
        }
    })
    .catch(error => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        showToast('Something went wrong. Please try again.');
    });

    return false;
}

/* ============================================ */
/* SERVICE FOCUS FUNCTIONALITY                  */
/* ============================================ */

// Global function to focus on a specific service group
function focusService(type) {
    // Set the form subject based on which service was clicked
    const subjectField = document.getElementById('form-subject');
    if (subjectField) {
        subjectField.value = type === 'digital'
            ? 'Digital Presence Inquiry'
            : 'AI Integration Inquiry';
    }

    // Add a highlight effect to the targeted card
    setTimeout(() => {
        const cardId = type === 'digital' ? 'digital-presence-card' : 'ai-integration-card';
        const card = document.getElementById(cardId);
        if (card) {
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });

            // Add a temporary glow effect
            card.style.boxShadow = '0 0 60px rgba(0, 217, 255, 0.3)';
            card.style.borderColor = 'rgba(0, 217, 255, 0.5)';

            setTimeout(() => {
                card.style.boxShadow = '';
                card.style.borderColor = '';
            }, 2000);
        }
    }, 100);
}

// Global function to set form subject
function setSubject(subject) {
    const subjectField = document.getElementById('form-subject');
    if (subjectField) {
        subjectField.value = subject;
    }
}

// Check URL hash on load for service focus
function initServiceFocus() {
    const hash = window.location.hash;
    if (hash === '#digital-presence') {
        focusService('digital');
    } else if (hash === '#ai-integration') {
        focusService('ai');
    }
}

/* ============================================ */
/* TOAST NOTIFICATION                           */
/* ============================================ */
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');

    if (!toast || !toastMessage) return;

    toastMessage.textContent = message;
    toast.classList.remove('translate-y-20', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');

    setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0');
        toast.classList.remove('translate-y-0', 'opacity-100');
    }, 4000);
}

/* ============================================ */
/* UTILITY FUNCTIONS                            */
/* ============================================ */

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// IntersectionObserver fallback for simple reveals (if GSAP fails)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, observerOptions);

// Observe all reveal elements as fallback
document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
});