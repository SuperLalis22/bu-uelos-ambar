// Script para Buñuelos Ámbar - Versión Final

document.addEventListener('DOMContentLoaded', function() {
    // Navbar toggle para móviles
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.innerHTML = navMenu.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
        
        // Cerrar menú al hacer clic en un enlace
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
    }
    
    // Efecto de cambio de navbar al hacer scroll
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.padding = '15px 0';
            navbar.style.backgroundColor = 'rgba(26, 16, 11, 0.98)';
            navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.padding = '25px 0';
            navbar.style.backgroundColor = 'rgba(26, 16, 11, 0.95)';
            navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
        }
    });
    
    // Animaciones al hacer scroll
    const revealElements = document.querySelectorAll('.hero-text, .hero-image, .historia-text, .historia-image, .menu-card, .step, .info-box');
    
    function revealOnScroll() {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('revealed');
            }
        });
    }
    
    // Añadir clase inicial a elementos ya visibles
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('revealed');
        }
    });
    
    window.addEventListener('scroll', revealOnScroll);
    
    // Efectos hover mejorados para tarjetas
    const productCards = document.querySelectorAll('.menu-card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
                
                // Cerrar menú móvil si está abierto
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    navToggle.innerHTML = '<i class="fas fa-bars"></i>';
                }
            }
        });
    });
    
    // Efecto de contador para estadísticas
    const statNumbers = document.querySelectorAll('.stat-number');
    
    function animateStats() {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.textContent.replace('+', ''));
            const suffix = stat.textContent.includes('+') ? '+' : '';
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            
            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                stat.textContent = Math.floor(current) + suffix;
            }, 16);
        });
    }
    
    // Activar animación de estadísticas cuando sean visibles
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const statsSection = document.querySelector('.hero-stats');
    if (statsSection) {
        observer.observe(statsSection);
    }
    
    // Efecto de texto que aparece
    const textElements = document.querySelectorAll('.historia-detalle p, .menu-card-desc, .step-content p');
    
    textElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        element.style.transitionDelay = `${index * 0.2}s`;
        
        // Activar animación cuando el elemento sea visible
        const textObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    textObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        textObserver.observe(element);
    });
    
    // Efecto de brillo en elementos ámbar
    const amberElements = document.querySelectorAll('.title-ambar, .hero-ambar');
    
    amberElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.filter = 'drop-shadow(0 0 10px rgba(212, 162, 76, 0.7))';
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.filter = 'none';
        });
    });
    
    // Efecto especial para el logo circular
    const logoCircles = document.querySelectorAll('.logo-circle');
    
    logoCircles.forEach(circle => {
        circle.addEventListener('mouseenter', () => {
            circle.style.transform = 'scale(1.1) rotate(5deg)';
            circle.style.boxShadow = '0 15px 40px rgba(212, 162, 76, 0.5)';
        });
        
        circle.addEventListener('mouseleave', () => {
            circle.style.transform = 'scale(1) rotate(0deg)';
            circle.style.boxShadow = '0 10px 30px rgba(212, 162, 76, 0.3)';
        });
    });
    
    // Mensaje de consola para desarrolladores
    console.log('%c✨ Buñuelos Ámbar ✨', 'color: #D4A24C; font-size: 22px; font-weight: bold;');
    console.log('%cSabor de familia para compartir - Desde 1978', 'color: #F5E6C8; font-size: 16px;');
    console.log('%cInstagram: @bunuelos.ambar 🍩', 'color: #D4A24C; font-size: 14px;');
    
    // Actualizar año en el footer
    const currentYear = new Date().getFullYear();
    const footerText = document.querySelector('.footer-bottom p:first-child');
    if (footerText) {
        footerText.innerHTML = `&copy; ${currentYear} Buñuelos Ámbar. Tres generaciones de sabor tradicional.`;
    }
});
