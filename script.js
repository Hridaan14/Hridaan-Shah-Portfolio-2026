document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling for Nav Links and CTAs
    const navLinks = document.querySelectorAll('.nav-links a, .cta-button, .nav-button');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100, // Offset for fixed nav
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Reveal Elements on Scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Elements to reveal (now defined in CSS for reliability)
    const revealElements = document.querySelectorAll('.reveal-text, .offer-card, .about-text p, .about-visual, .contact-card');
    revealElements.forEach(el => observer.observe(el));

    // Navbar background change on scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(0, 0, 0, 0.8)';
            navbar.style.backdropFilter = 'blur(20px)';
            navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
        } else {
            navbar.style.background = 'rgba(0, 0, 0, 0.5)';
            navbar.style.backdropFilter = 'blur(10px)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Parallax effect for blobs
    window.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        const blobs = document.querySelectorAll('.blob');
        blobs.forEach((blob, index) => {
            const speed = (index + 1) * 20;
            const x = (mouseX - 0.5) * speed;
            const y = (mouseY - 0.5) * speed;
            blob.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
});
