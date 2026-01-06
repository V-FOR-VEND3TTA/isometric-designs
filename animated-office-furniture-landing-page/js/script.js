// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

// Navbar background on scroll
window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
                navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.classList.remove('navbar-scrolled');
                navbar.style.backgroundColor = 'white';
                navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
            }
});
        
// Interactive isometric objects
document.addEventListener('DOMContentLoaded', function() {
    const isoObjects = document.querySelectorAll('.iso-object');
            
            isoObjects.forEach(object => {
                object.addEventListener('mouseenter', function() {
                    this.style.transform = this.style.transform.replace('translateY(0)', 'translateY(-20px)');
                    this.style.transition = 'transform 0.3s ease';
                });
                
                object.addEventListener('mouseleave', function() {
                    this.style.transform = this.style.transform.replace('translateY(-20px)', 'translateY(0)');
                });
});
            
// Add parallax effect to isometric container on scroll
window.addEventListener('scroll', function() {
                const scrollPosition = window.scrollY;
                const isometricContainer = document.querySelector('.isometric-container');
                
                if (isometricContainer) {
                    const translateY = scrollPosition * 0.1;
                    isometricContainer.style.transform = `perspective(1000px) rotateX(10deg) translateY(${translateY}px)`;
                }
            });
        });
        
// Add animation to feature cards on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};
        
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeInUp');
            }
        });
    }, observerOptions);
        
// Observe feature cards and product cards
    document.querySelectorAll('.feature-card, .product-card').forEach(card => {
    observer.observe(card);
});