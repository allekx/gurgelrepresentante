// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functions
    initMobileMenu();
    initScrollAnimations();
    initSmoothScrolling();
    initFormValidation();
    initHeaderScroll();
    initWhatsAppButton();
    initTestimonialSlider();
    initMobileOptimizations();
});

// Mobile Optimizations
function initMobileOptimizations() {
    // Prevent zoom on input focus (iOS)
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            if (window.innerWidth <= 768) {
                this.style.fontSize = '16px';
            }
        });
        
        input.addEventListener('blur', function() {
            this.style.fontSize = '';
        });
    });
    
    // Add touch feedback for buttons
    const buttons = document.querySelectorAll('.btn, .contact-item, .feature-card, .specialty-card');
    buttons.forEach(button => {
        button.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        button.addEventListener('touchend', function() {
            this.style.transform = '';
        });
    });
    
    // Optimize scroll performance on mobile
    let ticking = false;
    function updateScroll() {
        ticking = false;
        // Scroll-based animations can be added here
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateScroll);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick, { passive: true });
    
    // Add viewport meta tag if not present
    if (!document.querySelector('meta[name="viewport"]')) {
        const viewport = document.createElement('meta');
        viewport.name = 'viewport';
        viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
        document.head.appendChild(viewport);
    }
}

// Mobile Menu Toggle
function initMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileToggle.classList.toggle('active');
            
            // Animate hamburger menu
            const spans = mobileToggle.querySelectorAll('span');
            spans.forEach((span, index) => {
                span.style.transition = 'all 0.3s ease';
                if (navMenu.classList.contains('active')) {
                    if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
                    if (index === 1) span.style.opacity = '0';
                    if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
                } else {
                    span.style.transform = 'none';
                    span.style.opacity = '1';
                }
            });
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
                const spans = mobileToggle.querySelectorAll('span');
                spans.forEach(span => {
                    span.style.transform = 'none';
                    span.style.opacity = '1';
                });
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
                const spans = mobileToggle.querySelectorAll('span');
                spans.forEach(span => {
                    span.style.transform = 'none';
                    span.style.opacity = '1';
                });
            }
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
                const spans = mobileToggle.querySelectorAll('span');
                spans.forEach(span => {
                    span.style.transform = 'none';
                    span.style.opacity = '1';
                });
            }
        });
    }
}

// Smooth Scrolling
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                // Use smooth scroll for desktop, instant for mobile
                if (window.innerWidth > 768) {
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                } else {
                    // For mobile, use a faster scroll
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Add a small delay for better UX on mobile
                    setTimeout(() => {
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }, 100);
                }
            }
        });
    });
}

// Scroll to Section Function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = section.offsetTop - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Header Scroll Effect
function initHeaderScroll() {
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add/remove scrolled class for styling
        if (scrollTop > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Hide/show header on scroll (optional)
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Add animation classes
                if (entry.target.dataset.aos) {
                    entry.target.classList.add('animate');
                }
            }
        });
    }, observerOptions);
    
    // Observe elements with animations
    const animatedElements = document.querySelectorAll('[data-aos], .feature-card, .specialty-card, .contact-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// Form Validation
function initFormValidation() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Basic validation (sem exigir especialidade)
            const required = ['name', 'email', 'phone'];
            let valid = true;
            required.forEach((fieldName) => {
                const field = this.querySelector(`[name="${fieldName}"]`);
                if (field && !validateField(field)) {
                    valid = false;
                }
            });
            if (!valid) return;

            // Formatar e enviar mensagem
            const message = formatWhatsAppMessage(data);
            sendToWhatsApp(message);
            showNotification('Redirecionando para WhatsApp...', 'success');
            this.reset();
        });
        
        // Real-time validation
        const inputs = contactForm.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                clearFieldError(this);
            });
            
            // Mobile-specific validation
            if (window.innerWidth <= 768) {
                input.addEventListener('focus', function() {
                    // Scroll to input on mobile
                    setTimeout(() => {
                        this.scrollIntoView({ 
                            behavior: 'smooth', 
                            block: 'center' 
                        });
                    }, 300);
                });
            }
        });
    }
}

// Validate individual field
function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';
    
    // Remove existing error
    clearFieldError(field);
    
    // Validation rules
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'Este campo é obrigatório.';
    } else if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'Digite um e-mail válido.';
        }
    } else if (field.type === 'tel' && value) {
        const phoneRegex = /^[\d\s\(\)\-\+]+$/;
        if (!phoneRegex.test(value) || value.length < 10) {
            isValid = false;
            errorMessage = 'Digite um telefone válido.';
        }
    }
    
    // Show error if invalid
    if (!isValid) {
        showFieldError(field, errorMessage);
    }
    
    return isValid;
}

// Show field error
function showFieldError(field, message) {
    field.style.borderColor = '#ef4444';
    field.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    errorDiv.style.color = '#ef4444';
    errorDiv.style.fontSize = '14px';
    errorDiv.style.marginTop = '4px';
    
    field.parentNode.appendChild(errorDiv);
}

// Clear field error
function clearFieldError(field) {
    field.style.borderColor = '';
    field.style.boxShadow = '';
    
    const errorDiv = field.parentNode.querySelector('.field-error');
    if (errorDiv) {
        errorDiv.remove();
    }
}

// Validate entire form
function validateForm(data) {
    // Compatível, mas sem exigir 'specialty'
    const requiredFields = ['name', 'email', 'phone'];
    let isValid = true;
    requiredFields.forEach(fieldName => {
        const field = document.querySelector(`[name="${fieldName}"]`);
        if (field && !validateField(field)) {
            isValid = false;
        }
    });
    return isValid;
}

// Show notification
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#3b82f6'};
        color: white;
        padding: 16px 20px;
        border-radius: 8px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// WhatsApp Button Enhancement
function initWhatsAppButton() {
    const whatsappButton = document.querySelector('.whatsapp-float a');
    
    if (whatsappButton) {
        // Add click tracking
        whatsappButton.addEventListener('click', function() {
            // You can add analytics tracking here
            console.log('WhatsApp button clicked');
        });
        
        // Add hover effect
        whatsappButton.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        whatsappButton.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    }
}

// Testimonial Slider
function initTestimonialSlider() {
    const testimonials = [
        {
            text: "O Cirurgia Segura me deu tranquilidade durante minha cirurgia plástica. Saber que estava protegida financeiramente fez toda a diferença.",
            author: "Maria Silva",
            role: "Paciente - Cirurgia Plástica",
            rating: 5
        },
        {
            text: "Excelente serviço! O processo foi muito simples e a equipe foi muito atenciosa. Recomendo para todos que vão fazer cirurgia.",
            author: "João Santos",
            role: "Paciente - Cirurgia Geral",
            rating: 5
        },
        {
            text: "Como médico, recomendo o Cirurgia Segura para meus pacientes. É uma proteção essencial que traz segurança para todos.",
            author: "Dr. Carlos Oliveira",
            role: "Cirurgião Plástico",
            rating: 5
        }
    ];
    
    let currentTestimonial = 0;
    const testimonialContainer = document.querySelector('.testimonial-slider');
    
    if (testimonialContainer && testimonials.length > 1) {
        // Create navigation dots
        const dotsContainer = document.createElement('div');
        dotsContainer.className = 'testimonial-dots';
        dotsContainer.style.cssText = `
            display: flex;
            justify-content: center;
            gap: 8px;
            margin-top: 20px;
        `;
        
        testimonials.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.className = `testimonial-dot ${index === 0 ? 'active' : ''}`;
            dot.style.cssText = `
                width: 12px;
                height: 12px;
                border-radius: 50%;
                border: none;
                background: ${index === 0 ? '#3b82f6' : '#d1d5db'};
                cursor: pointer;
                transition: background 0.3s ease;
            `;
            
            dot.addEventListener('click', () => {
                showTestimonial(index);
            });
            
            dotsContainer.appendChild(dot);
        });
        
        testimonialContainer.appendChild(dotsContainer);
        
        // Auto-rotate testimonials
        setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        }, 5000);
        
        function showTestimonial(index) {
            const testimonial = testimonials[index];
            const testimonialCard = testimonialContainer.querySelector('.testimonial-card');
            
            // Update content with fade effect
            testimonialCard.style.opacity = '0';
            
            setTimeout(() => {
                testimonialCard.innerHTML = `
                    <div class="testimonial-content">
                        <p>"${testimonial.text}"</p>
                        <div class="testimonial-author">
                            <div class="author-info">
                                <h4>${testimonial.author}</h4>
                                <span>${testimonial.role}</span>
                            </div>
                            <div class="rating">
                                ${'<i class="fas fa-star"></i>'.repeat(testimonial.rating)}
                            </div>
                        </div>
                    </div>
                `;
                
                testimonialCard.style.opacity = '1';
            }, 300);
            
            // Update dots
            const dots = dotsContainer.querySelectorAll('.testimonial-dot');
            dots.forEach((dot, dotIndex) => {
                dot.style.background = dotIndex === index ? '#3b82f6' : '#d1d5db';
            });
            
            currentTestimonial = index;
        }
    }
}

// Counter Animation
function animateCounter(element, target, duration = 2000) {
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

// Parallax Effect (optional)
function initParallax() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax');
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Lazy Loading for Images (if needed)
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Performance optimization
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

// Optimize scroll events
const optimizedScrollHandler = debounce(function() {
    // Scroll-based animations and effects
}, 16);

window.addEventListener('scroll', optimizedScrollHandler);

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Export functions for global use
window.scrollToSection = scrollToSection;
window.showNotification = showNotification;
