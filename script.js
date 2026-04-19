document.addEventListener('DOMContentLoaded', () => {
    // Header background change on scroll
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(15, 17, 21, 0.95)';
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
        } else {
            header.style.background = 'rgba(15, 17, 21, 0.8)';
            header.style.boxShadow = 'none';
        }
    });

    // Hamburger Menu Logic
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Intersection Observer for fade-in animations on scroll
    const faders = document.querySelectorAll('.service-card, .about-text, .stat, .contact-box');

    faders.forEach(fader => {
        fader.classList.add('fade-in');
    });

    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // Form submission handle
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Just a visual feedback for the demo
            const btn = form.querySelector('button');
            const originalText = btn.textContent;

            btn.textContent = 'Wysłano!';
            btn.style.backgroundColor = '#4caf50';
            btn.style.boxShadow = '0 4px 15px rgba(76, 175, 80, 0.3)';

            form.reset();

            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.backgroundColor = '';
                btn.style.boxShadow = '';
            }, 3000);
        });
    }
});
