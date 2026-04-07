/**
 * Amogh Associates - Digital Justice Landing Page Scripts
 * Premium interactions and scroll reveals.
 */

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const reveals = document.querySelectorAll('.reveal');
    const contactForm = document.getElementById('contactForm');

    /**
     * Navbar scroll effect
     */
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    /**
     * Reveal on scroll (Intersection Observer)
     */
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.15
    });

    reveals.forEach(reveal => {
        revealObserver.observe(reveal);
    });

    /**
     * Smooth Scroll Polyfill (for Safari and others)
     */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80, // Offset for fixed navbar
                    behavior: 'smooth'
                });
            }
        });
    });

    /**
     * Form Submission (Prevent default and log)
     */
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerHTML;
            
            // Visual feedback
            btn.disabled = true;
            btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Processing...';
            
            setTimeout(() => {
                btn.innerHTML = '<i class="fa-solid fa-check"></i> Request Received';
                btn.style.background = '#28a745';
                
                // Alert the user (could be a custom toast)
                console.log('Legal request initiated for Amogh Associates.');
                
                setTimeout(() => {
                    btn.disabled = false;
                    btn.innerHTML = originalText;
                    btn.style.background = '';
                    contactForm.reset();
                }, 3000);
            }, 1500);
        });
    }

    /**
     * Parallax effect on hero background
     */
    const heroBg = document.querySelector('.hero-bg');
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        if (heroBg) {
            heroBg.style.transform = `translateY(${scrolled * 0.4}px)`;
        }
    });
});
