// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    // Variables
    const navbar = document.querySelector('.navbar');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const statsNumbers = document.querySelectorAll('.stat-number');
    const skillProgresses = document.querySelectorAll('.skill-progress');
    const projectCards = document.querySelectorAll('.project-card');
    const heroText = document.querySelector('.hero-text');
    const heroVisual = document.querySelector('.hero-visual');
    const contactForm = document.querySelector('.contact-form');
    const floatingElements = document.querySelectorAll('.floating-element');

    let isMobileMenuOpen = false;
    let statsAnimated = false;
    let skillsAnimated = false;

    // Mobile Navbar Toggle
    function initMobileMenu() {
        const isMobile = window.innerWidth <= 768;
        if (isMobile) {
            navToggle.style.display = 'flex';
            navMenu.style.display = 'none';
        } else {
            navToggle.style.display = 'none';
            navMenu.style.display = 'flex';
        }
    }

    navToggle.addEventListener('click', function() {
        isMobileMenuOpen = !isMobileMenuOpen;
        if (isMobileMenuOpen) {
            navMenu.style.display = 'flex';
            navMenu.style.flexDirection = 'column';
            navMenu.style.position = 'absolute';
            navMenu.style.top = '100%';
            navMenu.style.left = '0';
            navMenu.style.width = '100%';
            navMenu.style.background = 'rgba(255, 255, 255, 0.98)';
            navMenu.style.padding = '20px';
            navMenu.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            // Animate bars to X
            const bars = navToggle.querySelectorAll('.bar');
            bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            navMenu.style.display = 'none';
            // Reset bars
            const bars = navToggle.querySelectorAll('.bar');
            bars.forEach(bar => {
                bar.style.transform = 'none';
                bars[1].style.opacity = '1';
            });
        }
    });

    // Smooth Scrolling for Nav Links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
            // Close mobile menu if open
            if (isMobileMenuOpen) {
                navToggle.click();
            }
        });
    });

    // Navbar Background on Scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
        }
    });

    // Animate Numbers (Stats Counter)
    function animateNumber(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16); // ~60fps
        function updateNumber() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start);
                requestAnimationFrame(updateNumber);
            } else {
                element.textContent = target;
            }
        }
        updateNumber();
    }

    // Animate Progress Bars
    function animateProgress(element, targetWidth, duration = 2000) {
        let startWidth = 0;
        const increment = parseFloat(targetWidth) / (duration / 16);
        function updateWidth() {
            startWidth += increment;
            if (startWidth < parseFloat(targetWidth)) {
                element.style.width = startWidth + '%';
                requestAnimationFrame(updateWidth);
            } else {
                element.style.width = targetWidth;
            }
        }
        updateWidth();
    }

    // Intersection Observer for Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;

                // Hero Fade-in (initial load)
                if (target === heroText || target === heroVisual) {
                    target.style.opacity = '0';
                    target.style.transform = 'translateY(30px)';
                    target.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                    setTimeout(() => {
                        target.style.opacity = '1';
                        target.style.transform = 'translateY(0)';
                    }, 200); // Stagger
                }

                // About Stats
                if (target.classList.contains('stats') && !statsAnimated) {
                    statsNumbers.forEach(stat => {
                        const targetNum = parseInt(stat.getAttribute('data-target'));
                        animateNumber(stat, targetNum);
                    });
                    statsAnimated = true;
                }

                // Skills Progress
                if (target.classList.contains('skills-grid') && !skillsAnimated) {
                    skillProgresses.forEach(progress => {
                        const targetWidth = progress.getAttribute('data-width');
                        animateProgress(progress, targetWidth);
                    });
                    skillsAnimated = true;
                }

                // Projects Cards Slide-up
                if (target.classList.contains('projects-grid')) {
                    projectCards.forEach((card, index) => {
                        if (!card.classList.contains('animated')) {
                            card.style.opacity = '0';
                            card.style.transform = 'translateY(50px)';
                            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                            setTimeout(() => {
                                card.style.opacity = '1';
                                card.style.transform = 'translateY(0)';
                                card.classList.add('animated');
                            }, index * 100); // Stagger animation
                        }
                    });
                }

                // About Photo Hover Enhancement (already CSS, but add JS for overlay trigger on scroll)
                const aboutPhoto = document.querySelector('.about-photo');
                if (target === aboutPhoto && !aboutPhoto.classList.contains('animated')) {
                    aboutPhoto.classList.add('animated');
                }
            }
        });
    }, observerOptions);

    // Observe Elements
    observer.observe(heroText);
    observer.observe(heroVisual);
    observer.observe(document.querySelector('.stats'));
    observer.observe(document.querySelector('.skills-grid'));
    observer.observe(document.querySelector('.projects-grid'));
    observer.observe(document.querySelector('.about-photo'));

    // Floating Elements Random Movement (enhance CSS animation)
    function animateFloating() {
        floatingElements.forEach((el, index) => {
            const x = Math.random() * 20 - 10; // Random -10 to 10px
            const y = Math.random() * 20 - 10;
            el.style.transform = `translate(${x}px, ${y}px)`;
        });
        requestAnimationFrame(animateFloating);
    }
    // Start after 1s delay
    setTimeout(animateFloating, 1000);

    // Contact Form Submission (Simulation)
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Simulate API call
            setTimeout(() => {
                alert('Message sent successfully! I\'ll get back to you soon.');
                contactForm.reset();
            }, 500);
        });

        // Form Input Focus Animation
        const formInputs = document.querySelectorAll('.form-input');
        formInputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.style.transform = 'scale(1.02)';
                this.parentElement.style.transition = 'transform 0.2s ease';
            });
            input.addEventListener('blur', function() {
                this.parentElement.style.transform = 'scale(1)';
            });
        });
    }

    // Initial Mobile Check and Resize Handler
    initMobileMenu();
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(initMobileMenu, 250); // Debounce
    });

    // Active Nav Link on Scroll (highlight current section)
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');
        const scrollPos = window.scrollY + 200; // Offset for fixed navbar

        sections.forEach(section => {
            if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    console.log('Portfolio animations initialized!'); // Debug
});

