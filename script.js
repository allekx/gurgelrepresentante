// Header scroll effect
window.addEventListener('scroll', function () {
  const header = document.getElementById('header');
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form data
  const formData = new FormData(this);
  const name = this.querySelector('input[type="text"]').value;
  const email = this.querySelector('input[type="email"]').value;
  const message = this.querySelector('textarea').value;

  // Simple validation
  if (name && email && message) {
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    this.reset();
  } else {
    alert('Por favor, preencha todos os campos.');
  }
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-up');
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.feature-card, .pricing-card, .news-card').forEach(el => {
  observer.observe(el);
});

// Mobile menu toggle (sidebar implementation)
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const sidebarMenu = document.getElementById('sidebarMenu');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const closeSidebar = document.getElementById('closeSidebar');

function openSidebar() {
  sidebarMenu.classList.add('open');
  sidebarOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeSidebarFn() {
  sidebarMenu.classList.remove('open');
  sidebarOverlay.classList.remove('open');
  document.body.style.overflow = '';
}
mobileMenuBtn.addEventListener('click', openSidebar);
closeSidebar.addEventListener('click', closeSidebarFn);
sidebarOverlay.addEventListener('click', closeSidebarFn);
// Fecha sidebar ao clicar em um link
sidebarMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeSidebarFn);
});

// Pricing card hover effects
document.querySelectorAll('.pricing-card').forEach(card => {
  card.addEventListener('mouseenter', function () {
    this.style.transform = 'translateY(-10px)';
  });

  card.addEventListener('mouseleave', function () {
    if (!this.classList.contains('popular')) {
      this.style.transform = 'translateY(0)';
    } else {
      this.style.transform = 'scale(1.05)';
    }
  });
});

// Add loading animation to buttons
document.querySelectorAll('a.btn[href="#"]').forEach(btn => {
btn.addEventListener('click', function (e) {
e.preventDefault();
const originalText = this.innerHTML;
this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Carregando...';
this.disabled = true;

setTimeout(() => {
  this.innerHTML = originalText;
  this.disabled = false;
}, 2000);
});
});


// Modal de planos de saúde
const planModal = document.getElementById('planModal');
const closePlanModalBtn = document.getElementById('closePlanModal');
const planForm = document.getElementById('planForm');
const planNameInput = document.getElementById('planName');
// Abrir modal ao clicar em "Quero este plano"
document.querySelectorAll('.select-plan-btn').forEach(btn => {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    planNameInput.value = this.getAttribute('data-plan');
    planModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });
});
// Fechar modal
closePlanModalBtn.addEventListener('click', function () {
  planModal.style.display = 'none';
  document.body.style.overflow = '';
});
planModal.addEventListener('click', function (e) {
  if (e.target === planModal) {
    planModal.style.display = 'none';
    document.body.style.overflow = '';
  }
});
// Enviar para WhatsApp
planForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const nome = document.getElementById('userName').value.trim();
  const email = document.getElementById('userEmail').value.trim();
  const cpf = document.getElementById('userCPF').value.trim();
  const plano = document.getElementById('planName').value.trim();
  if (!nome || !email || !cpf || !plano) return;
  const msg = `Olá! Gostaria de contratar um plano de saúde.\nPlano: ${plano}\nNome: ${nome}\nE-mail: ${email}\nCPF: ${cpf}`;
  const url = `https://wa.me/5592992534622?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
  planModal.style.display = 'none';
  document.body.style.overflow = '';
  planForm.reset();
});

// Add parallax effect to hero section
window.addEventListener('scroll', function () {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.hero');
  const rate = scrolled * -0.5;

  if (hero) {
    hero.style.transform = `translateY(${rate}px)`;
  }
});

// Add counter animation for pricing
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);

  const timer = setInterval(() => {
    start += increment;
    element.textContent = Math.floor(start);

    if (start >= target) {
      element.textContent = target;
      clearInterval(timer);
    }
  }, 16);
}

// Initialize counter animations when pricing sections are visible
const pricingObserver = new IntersectionObserver(function (entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const priceElements = entry.target.querySelectorAll('.price');
      priceElements.forEach(priceEl => {
        const priceText = priceEl.textContent;
        const priceNumber = parseInt(priceText.replace(/\D/g, ''));
        if (priceNumber) {
          // Verificar se é um plano de odontologia (tem /mês)
          if (priceEl.textContent.includes('/mês')) {
            priceEl.innerHTML = `R$ <span class="price-number">0</span><span class="price-period">/mês</span>`;
          } else {
            priceEl.innerHTML = `<span class="price-period">a partir de:</span> R$ <span class="price-number">0</span>`;
          }
          const numberSpan = priceEl.querySelector('.price-number');
          animateCounter(numberSpan, priceNumber);
        }
      });
      pricingObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

// Observar ambas as seções de pricing (saúde e odontologia)
const pricingSections = document.querySelectorAll('.pricing');
pricingSections.forEach(section => {
  pricingObserver.observe(section);
});