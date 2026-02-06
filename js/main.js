/**
 * RielArt Studio - Main JavaScript
 * Handles navigation, animations, FAQ accordion, form submission, and mobile menu
 */

document.addEventListener('DOMContentLoaded', function() {
    // ============================================
    // DOM Element References
    // ============================================
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    const faqItems = document.querySelectorAll('.faq-item');
    const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
    const contactForm = document.getElementById('contact-form');
    const successModal = document.getElementById('success-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

    // ============================================
    // Navbar Scroll Effect
    // ============================================
    function handleNavbarScroll() {
        const scrollY = window.scrollY;
        
        if (scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    // Throttled scroll handler for better performance
    let scrollThrottle = false;
    window.addEventListener('scroll', function() {
        if (!scrollThrottle) {
            handleNavbarScroll();
            scrollThrottle = true;
            setTimeout(function() {
                scrollThrottle = false;
            }, 16); // ~60fps
        }
    }, { passive: true });

    // Initial check
    handleNavbarScroll();

    // ============================================
    // Animated Counter for Hero Metrics
    // ============================================
    function animateCounter(element, target, duration, suffix = '') {
        let start = 0;
        const startTime = performance.now();
        
        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function (ease-out)
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(start + (target - start) * easeOut);
            
            element.textContent = current + suffix;
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target + suffix;
            }
        }
        
        requestAnimationFrame(updateCounter);
    }
    
    // Trigger counter animations when hero is visible
    const heroMetrics = document.querySelector('.hero-metrics');
    if (heroMetrics) {
        const counterObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    // Find all counter elements and animate them
                    const counters = entry.target.querySelectorAll('.counter-value');
                    counters.forEach(function(counter, index) {
                        const target = parseInt(counter.dataset.target, 10);
                        const suffix = counter.dataset.suffix || '';
                        setTimeout(function() {
                            animateCounter(counter, target, 2000, suffix);
                        }, index * 200);
                    });
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        counterObserver.observe(heroMetrics);
    }

    // ============================================
    // Mobile Menu Toggle
    // ============================================
    function toggleMobileMenu() {
        const isHidden = mobileMenu.classList.contains('hidden');
        
        if (isHidden) {
            mobileMenu.classList.remove('hidden');
            menuIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // Prevent background scroll
        } else {
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
            document.body.style.overflow = '';
        }
    }

    mobileMenuBtn.addEventListener('click', toggleMobileMenu);

    // Close mobile menu when clicking a link
    mobileNavLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            toggleMobileMenu();
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            if (!mobileMenu.classList.contains('hidden')) {
                toggleMobileMenu();
            }
        }
    });

    // Close mobile menu on window resize (if going to desktop)
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 1024 && !mobileMenu.classList.contains('hidden')) {
            toggleMobileMenu();
        }
    });

    // ============================================
    // Smooth Scroll for Anchor Links
    // ============================================
    function smoothScrollTo(targetId) {
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const navHeight = navbar.offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }

    // Add smooth scroll to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            smoothScrollTo(targetId);
        });
    });

    // ============================================
    // FAQ Accordion
    // ============================================
    faqItems.forEach(function(item) {
        const trigger = item.querySelector('.faq-trigger');
        const content = item.querySelector('.faq-content');
        
        trigger.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all other items
            faqItems.forEach(function(otherItem) {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-content').classList.add('hidden');
                }
            });
            
            // Toggle current item
            if (isActive) {
                item.classList.remove('active');
                content.classList.add('hidden');
            } else {
                item.classList.add('active');
                content.classList.remove('hidden');
            }
        });
    });

    // ============================================
    // Scroll Reveal Animation (Intersection Observer)
    // ============================================
    const revealObserverOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // Optionally unobserve after revealing
                // revealObserver.unobserve(entry.target);
            }
        });
    }, revealObserverOptions);

    scrollRevealElements.forEach(function(element) {
        revealObserver.observe(element);
    });

    // ============================================
    // Contact Form Handling
    // ============================================
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());
        
        // Validate required fields
        const requiredFields = ['name', 'email', 'service', 'message'];
        let isValid = true;
        
        requiredFields.forEach(function(field) {
            const input = contactForm.querySelector('[name="' + field + '"]');
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('border-red-500');
                
                // Remove error styling after 3 seconds
                setTimeout(function() {
                    input.classList.remove('border-red-500');
                }, 3000);
            }
        });
        
        if (!isValid) {
            return;
        }
        
        // Simulate form submission (replace with actual API call)
        console.log('Form submitted:', data);
        
        // Show success modal
        successModal.classList.remove('hidden');
        successModal.classList.add('flex');
        
        // Reset form
        contactForm.reset();
    });

    // Close modal
    closeModalBtn.addEventListener('click', function() {
        successModal.classList.add('hidden');
        successModal.classList.remove('flex');
    });

    // Close modal on outside click
    successModal.addEventListener('click', function(e) {
        if (e.target === successModal) {
            successModal.classList.add('hidden');
            successModal.classList.remove('flex');
        }
    });

    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !successModal.classList.contains('hidden')) {
            successModal.classList.add('hidden');
            successModal.classList.remove('flex');
        }
    });

    // ============================================
    // Active Navigation Link Highlighting
    // ============================================
    const sections = document.querySelectorAll('section[id]');
    
    const sectionObserverOptions = {
        root: null,
        rootMargin: '-20% 0px -80% 0px',
        threshold: 0
    };

    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const sectionId = entry.target.getAttribute('id');
                
                // Remove active class from all nav links
                navLinks.forEach(function(link) {
                    link.classList.remove('text-primary');
                    link.classList.add('text-dark');
                });
                
                // Add active class to current section link
                const activeLink = document.querySelector('.nav-link[href="#' + sectionId + '"]');
                if (activeLink) {
                    activeLink.classList.remove('text-dark');
                    activeLink.classList.add('text-primary');
                }
            }
        });
    }, sectionObserverOptions);

    sections.forEach(function(section) {
        sectionObserver.observe(section);
    });

    // ============================================
    // Process Timeline Animation
    // ============================================
    const processSteps = document.querySelectorAll('.process-step');
    const timelineLine = document.querySelector('.process-step::before');
    
    const processObserverOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };

    const processObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry, index) {
            if (entry.isIntersecting) {
                // Add staggered animation delay
                setTimeout(function() {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 150);
            }
        });
    }, processObserverOptions);

    processSteps.forEach(function(step) {
        processObserver.observe(step);
    });

    // ============================================
    // Service Cards Animation
    // ============================================
    const serviceCards = document.querySelectorAll('.service-card');
    
    const cardObserverOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    };

    const cardObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry, index) {
            if (entry.isIntersecting) {
                setTimeout(function() {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, cardObserverOptions);

    serviceCards.forEach(function(card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        cardObserver.observe(card);
    });

    // ============================================
    // Button Ripple Effect
    // ============================================
    function createRipple(e) {
        const button = e.currentTarget;
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        const ripple = document.createElement('span');
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);
        
        setTimeout(function() {
            ripple.remove();
        }, 600);
    }

    // Add ripple effect to buttons
    document.querySelectorAll('button[type="submit"], .bg-accent').forEach(function(button) {
        button.addEventListener('click', createRipple);
    });

    // Add ripple animation keyframes
    const rippleStyles = document.createElement('style');
    rippleStyles.textContent = `
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyles);

    // ============================================
    // Parallax Effect for Hero Background
    // ============================================
    const heroSection = document.getElementById('home');
    const heroBg = heroSection.querySelector('img');
    
    if (heroBg && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        window.addEventListener('scroll', function() {
            const scrollY = window.scrollY;
            const heroHeight = heroSection.offsetHeight;
            
            if (scrollY < heroHeight) {
                const parallaxValue = scrollY * 0.3;
                heroBg.style.transform = 'translateY(' + parallaxValue + 'px)';
            }
        }, { passive: true });
    }

    // ============================================
    // Preload Critical Images
    // ============================================
    function preloadImages() {
        const criticalImages = [
            'images/hero-bg.jpg',
            'images/fitforward-mockup.jpg'
        ];
        
        criticalImages.forEach(function(src) {
            const img = new Image();
            img.src = src;
        });
    }
    
    preloadImages();

    // ============================================
    // Console Welcome Message
    // ============================================
    console.log('%c Welcome to RielArt Studio! ', 'background: linear-gradient(135deg, #2563EB, #F97316); color: white; font-size: 20px; font-weight: bold; padding: 10px 20px; border-radius: 8px;');
    console.log('%c Looking for a stunning website? Let\'s talk! ', 'color: #2563EB; font-size: 14px;');
    console.log('%c Contact: hi@rielart.com ', 'color: #F97316; font-size: 12px;');

});

// ============================================
// Utility Functions (Global Scope)
// ============================================

/**
 * Debounce function for performance optimization
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            func.apply(context, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle function for scroll events
 */
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(function() {
                inThrottle = false;
            }, limit);
        }
    };
}

/**
 * Check if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Animate number counter
 */
function animateCounter(element, target, duration) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    updateCounter();
}

// ============================================
// Form Validation Helpers
// ============================================

/**
 * Validate email format
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Validate phone number (basic)
 */
function isValidPhone(phone) {
    const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
    return phoneRegex.test(phone);
}

// ============================================
// Analytics & Tracking (Placeholder)
// ============================================

/**
 * Track custom event (integrate with your analytics)
 */
function trackEvent(eventName, eventData) {
    // Google Analytics 4
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
    
    // Facebook Pixel
    if (typeof fbq !== 'undefined') {
        fbq('trackCustom', eventName, eventData);
    }
    
    console.log('Event tracked:', eventName, eventData);
}

// Track important interactions
document.addEventListener('DOMContentLoaded', function() {
    // Track CTA clicks
    document.querySelectorAll('a[href="#contact"]').forEach(function(link) {
        link.addEventListener('click', function() {
            trackEvent('cta_click', { location: 'navigation', text: this.textContent.trim() });
        });
    });
    
    // Track form submissions
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function() {
            trackEvent('form_submit', { form: 'contact' });
        });
    }
});
